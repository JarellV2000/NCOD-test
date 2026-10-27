-- NCOD 2.0 staging ONLY. Additive, isolated names; no old tables are dropped.
-- Lobby membership only. No round secrets, votes, rewards or money are stored here.
begin;
create schema if not exists ncod2_private;
revoke all on schema ncod2_private from public, anon;
grant usage on schema ncod2_private to authenticated;
create table if not exists ncod2_private.rooms (
 code text primary key check (code ~ '^[A-F0-9]{6}$'),
 host_id uuid not null references auth.users(id) on delete cascade,
 created_at timestamptz not null default now(),
 expires_at timestamptz not null default now()+interval '24 hours'
);
create table if not exists ncod2_private.members (
 code text not null references ncod2_private.rooms(code) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 name text not null check(char_length(name) between 1 and 32),
 joined_at timestamptz not null default now(),
 last_seen timestamptz not null default now(),
 primary key(code,user_id)
);
alter table ncod2_private.rooms enable row level security;
alter table ncod2_private.members enable row level security;
revoke all on all tables in schema ncod2_private from public, anon, authenticated;
create or replace function ncod2_private.snapshot(p_code text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare result jsonb;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if not exists(select 1 from ncod2_private.members m join ncod2_private.rooms r using(code) where m.code=p_code and m.user_id=auth.uid() and r.expires_at>now()) then raise exception 'Room unavailable or not a member'; end if;
 update ncod2_private.members set last_seen=now() where code=p_code and user_id=auth.uid();
 select jsonb_build_object('code',r.code,'members',(select coalesce(jsonb_agg(jsonb_build_object('name',m.name,'host',m.user_id=r.host_id,'online',m.last_seen>now()-interval '30 seconds') order by m.joined_at),'[]'::jsonb) from ncod2_private.members m where m.code=r.code)) into result from ncod2_private.rooms r where r.code=p_code;
 return result;
end $$;
create or replace function ncod2_private.create_room(p_name text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare new_code text;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if p_name is null or char_length(trim(p_name)) not between 1 and 32 then raise exception 'Use a name with 1–32 characters'; end if;
 -- Serialize creates by this user so the active-room limit cannot race.
 perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text,0));
 if (select count(*) from ncod2_private.rooms where host_id=auth.uid() and expires_at>now())>=3 then raise exception 'You already have three active rooms'; end if;
 loop
  new_code:=upper(substr(replace(gen_random_uuid()::text,'-',''),1,6));
  begin
   insert into ncod2_private.rooms(code,host_id) values(new_code,auth.uid());
   exit;
  exception when unique_violation then null;
  end;
 end loop;
 insert into ncod2_private.members(code,user_id,name) values(new_code,auth.uid(),trim(p_name));
 return ncod2_private.snapshot(new_code);
end $$;
create or replace function ncod2_private.join_room(p_code text,p_name text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare normalized text:=upper(trim(p_code));
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if p_name is null or char_length(trim(p_name)) not between 1 and 32 then raise exception 'Use a name with 1–32 characters'; end if;
 perform 1 from ncod2_private.rooms where code=normalized and expires_at>now() for update;
 if not found then raise exception 'Room not found or expired'; end if;
 if not exists(select 1 from ncod2_private.members where code=normalized and user_id=auth.uid()) then
  if (select count(*) from ncod2_private.members where code=normalized)>=12 then raise exception 'This room has 12 players'; end if;
  if (select count(*) from ncod2_private.members m join ncod2_private.rooms r using(code) where m.user_id=auth.uid() and r.expires_at>now())>=10 then raise exception 'Leave another room first'; end if;
 end if;
 insert into ncod2_private.members(code,user_id,name) values(normalized,auth.uid(),trim(p_name)) on conflict(code,user_id) do update set name=excluded.name,last_seen=now();
 return ncod2_private.snapshot(normalized);
end $$;
create or replace function ncod2_private.leave_room(p_code text) returns void
language plpgsql security definer set search_path='' as $$
declare host uuid; successor uuid;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 select host_id into host from ncod2_private.rooms where code=p_code for update;
 delete from ncod2_private.members where code=p_code and user_id=auth.uid();
 if host=auth.uid() then
  select user_id into successor from ncod2_private.members where code=p_code order by joined_at limit 1;
  if successor is null then delete from ncod2_private.rooms where code=p_code;
  else update ncod2_private.rooms set host_id=successor where code=p_code; end if;
 end if;
end $$;
-- Invoker wrappers expose only these checked operations through the Data API.
create or replace function public.ncod2_create_room(p_name text) returns jsonb language sql security invoker set search_path='' as $$ select ncod2_private.create_room(p_name); $$;
create or replace function public.ncod2_join_room(p_code text,p_name text) returns jsonb language sql security invoker set search_path='' as $$ select ncod2_private.join_room(p_code,p_name); $$;
create or replace function public.ncod2_room_snapshot(p_code text) returns jsonb language sql security invoker set search_path='' as $$ select ncod2_private.snapshot(p_code); $$;
create or replace function public.ncod2_leave_room(p_code text) returns void language sql security invoker set search_path='' as $$ select ncod2_private.leave_room(p_code); $$;
revoke all on function ncod2_private.snapshot(text),ncod2_private.create_room(text),ncod2_private.join_room(text,text),ncod2_private.leave_room(text) from public,anon;
grant execute on function ncod2_private.snapshot(text),ncod2_private.create_room(text),ncod2_private.join_room(text,text),ncod2_private.leave_room(text) to authenticated;
revoke all on function public.ncod2_create_room(text),public.ncod2_join_room(text,text),public.ncod2_room_snapshot(text),public.ncod2_leave_room(text) from public,anon;
grant execute on function public.ncod2_create_room(text),public.ncod2_join_room(text,text),public.ncod2_room_snapshot(text),public.ncod2_leave_room(text) to authenticated;
create index if not exists ncod2_members_user_idx on ncod2_private.members(user_id);
create index if not exists ncod2_rooms_host_idx on ncod2_private.rooms(host_id);
commit;
