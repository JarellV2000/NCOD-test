
/*
 * NO CAP OR DRINK — Supabase connection placeholder
 *
 * This file is not connected to Supabase yet.
 * Never put a service_role key or secret key in public code.
 */

const SUPABASE_CONFIG = {
  url: "",
  anonKey: ""
};

function isSupabaseConfigured() {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
}

function getSupabaseStatus() {
  return isSupabaseConfigured()
    ? "Configuration added; connection still needs testing."
    : "Not connected yet.";
}

window.NCODSupabase = {
  isConfigured: isSupabaseConfigured,
  getStatus: getSupabaseStatus
};
