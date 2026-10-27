# Staging connection status

Project: NCOD-2.0-test (`gwfnevlygkiqpwlvqtex`).
The public browser connection is prepared in js/config.js. Lobby activation is intentionally false.

Both database write attempts returned `Invalid or expired requestState`. A subsequent table inventory confirmed no lobby tables were created. No database integration test has passed yet.

Finish in this order:
1. Apply supabase/001_staging_lobbies.sql to this TEST project only.
2. Enable Anonymous Sign-Ins for the test project using Supabase Auth settings.
3. Run authorization, 12-player capacity, rejoin and host-transfer tests.
4. Set lobbyEnabled:true, update the Netlify preview and test across phones.

The original project and main branch remain outside this change.
