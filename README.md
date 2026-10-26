# NO CAP OR DRINK 2.0 — Starter scaffold

This is a **working navigation preview**, not a finished game. Each of the eight game modes has an isolated folder and page. Shared gameplay, multiplayer, profiles, XP, coins, and Supabase are **placeholders** only.

## Upload to a NEW repository
1. Create a new GitHub repository called `NCOD-2.0` (do not edit your existing repositories).
2. Unzip this package. Upload **the contents of the `NCOD-2.0` folder**, not the enclosing folder, to the repository root. GitHub's web upload may not preserve empty directories; `.gitkeep` files are included.
3. Commit the upload.
4. Open Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
5. Wait for Pages deployment and open the Pages URL shown in GitHub Settings. Check all eight mode cards.

## Editing one mode
Example: edit `modes/friends/friends.js` for gameplay and `modes/friends/questions.js` for questions. Other mode files do not need editing. Changes to shared services can affect all modes and must be tested.

## Security
Never commit Supabase service-role or secret keys. Public/anon keys are only safe with correctly configured Row Level Security. Do not implement XP, coins, voting, or game authority solely in browser code.

## Next steps
1. Verify navigation on iPhone.
2. Choose one mode and implement real question/round logic.
3. Define database schema and Row Level Security in a separate staging Supabase project.
4. Implement secure lobby creation, state sync, and reconnection.
5. Add profiles, characters, apartments, shop, XP, and coins.
6. Test every mode and cross-mode isolation before any release.


## Phase 1 offline preview
See `docs/PHASE1.md` for scope, missing features, and safe upload steps.
