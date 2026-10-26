# Connect the staging lobby

1. Create a separate Supabase staging project. Do not run this migration in the existing live project.
2. Enable Anonymous Sign-Ins under Authentication settings. Anonymous identities use the authenticated role. Their access cannot be recovered after clearing browser data or switching devices until account linking is implemented.
3. Run `supabase/001_staging_lobbies.sql` in that staging project's SQL editor. It creates isolated `ncod2_private` tables and four `ncod2_` API wrappers. No existing NCOD tables are altered.
4. In `js/config.js`, set `supabaseUrl` and the public publishable/anon key. Never insert a service-role or secret key. Do not expose `ncod2_private` through Data API settings.
5. Serve the extracted repository with HTTP (for example `python3 -m http.server 8000`) or a separate Netlify preview. This change does not include a deployment workflow.
6. Test with two separate browsers: host, join, refresh, lock/unlock, offline/online, leave. Check that only members can read snapshots; a 13th player cannot join; an existing member can rejoin a full room. Verify a host leaving transfers to another member.

Online rounds are not implemented in this build. Start local games from the home screen.

References used for implementation:
- https://supabase.com/docs/guides/auth/auth-anonymous
- https://supabase.com/docs/guides/database/functions
- https://supabase.com/docs/guides/database/postgres/row-level-security

Production follow-up: CAPTCHA/rate limits for anonymous signup, expired-room cleanup, account linking, full SQL concurrency/authorization tests and cross-device integration tests. Current SQL has not been executed against a Supabase instance in this session.
