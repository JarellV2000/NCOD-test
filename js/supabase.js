import {config} from './config.js';
let promise;
export function configured(){return config.lobbyEnabled!==false&&/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(config.supabaseUrl)&&!!config.supabaseKey;}
export async function client(){if(!configured())throw new Error('Online play needs the staging database connection. Local modes are ready now.');if(!promise)promise=import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm').then(({createClient})=>createClient(config.supabaseUrl,config.supabaseKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}})).catch(e=>{promise=null;throw e;});return promise;}
export async function identity(){const c=await client();const {data,error}=await c.auth.getSession();if(error)throw error;if(!data.session){const r=await c.auth.signInAnonymously();if(r.error)throw r.error;}return c;}
export async function rpc(name,args={}){const c=await identity();const {data,error}=await c.rpc(name,args);if(error)throw new Error(error.message);return data;}
