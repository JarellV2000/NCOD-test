# NCOD-test repository audit — 2026-10-29

## Confirmed on GitHub main
- 12 files at audit: `NCOD-2D-GAME-ONLY.html`, `README.md`, `css/theme.css`, `game.html`, `index.html`, `js/animations.js`, `js/game.js`, `js/supabase.js`, `living-room-preview.html`, `lounge.png`, `theme.html` (11? Count actual paths: 11).
- `lounge.png` exists in repository root (~2.59 MB) and the preview HTML references that exact path.
- Current home page is self-contained with sample question arrays, seven mode tiles and 14 generic concept avatars.
- Earlier `game.html` references external CSS/JS that exist.
- `theme.html` references the same CSS and animations JS that exist.
- `js/game.js` contains six legacy modes with very small sample banks, not full question libraries.
- `js/supabase.js` has empty URL and anon key; not connected.

## Known gaps / risks
1. The original image is **flattened**: Eli, Zay, Brezzy and scenery are baked into one PNG. True body animations need clean background and separate transparent character sprites.
2. Preview voting/chat/reactions run locally in a single browser only; no shared multiplayer state, rejoin, room codes, or backend.
3. Current homepage's seven mode labels do not mean all seven have complete production mechanics.
4. Full original question counts (66 Friends, 35 Talking Stage, 35 Couples) are not in tracked source; recover before promising complete game.
5. Several independent prototypes coexist; do not delete any until their functionality and question banks are consolidated.
6. Need manual browser testing on iPhone and desktop after each release. A repository file existing does not alone prove GitHub Pages has deployed successfully.
7. `lounge.png` is at repository root; moving it requires updating the HTML path simultaneously.

## Non-destructive organization
- Leave all current entrypoints and their paths unchanged.
- Create documented modular directories for future work, rather than moving live files prematurely.
- Separate lobby renderer from per-mode game logic and Supabase adapter.
- No official production repository edits.
