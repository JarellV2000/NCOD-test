# NO CAP OR DRINK 2.0 — NCOD-test

Development and preview repository. **Not the official production game.**

## Open previews
- [2.0 home / mode flipcards](./index.html)
- [Approved-art living room preview](./living-room-preview.html)
- [Legacy question demo](./game.html)
- [Theme and animation lab](./theme.html)
- [Older standalone 2D flipcard demo](./NCOD-2D-GAME-ONLY.html)

## What is actually working
- Local flipcard/question demos and basic page animations.
- Living-room preview uses `lounge.png` (uploaded) as a static illustrated background; buttons produce floating reactions, local chat, and local vote demo.
- **No synchronized multiplayer, animated character bodies, real room joining, user accounts, or persistent voting yet.**
- `js/supabase.js` is a placeholder, not an active connection.
- Full original question banks (Friends 66, Talking Stage 35, Couples 35) are **not** present in this repository.

## File map
| Path | Purpose |
| --- | --- |
| `index.html` | Current home page; standalone CSS/JS |
| `living-room-preview.html` | Current interactive illustrated lobby demo; loads `lounge.png` |
| `lounge.png` | Approved living room artwork (includes characters in same flattened image) |
| `game.html` | Earlier game question demo; uses `css/theme.css`, `js/game.js`, `js/animations.js` |
| `theme.html` | Earlier visual theme lab |
| `NCOD-2D-GAME-ONLY.html` | Older self-contained flipcard prototype |
| `css/theme.css` | Styles for older game/theme pages |
| `js/game.js` | Partial legacy question bank and UI logic |
| `js/animations.js` | Simple reveal and button effects |
| `js/supabase.js` | **Unconfigured placeholder** |

## Development folders
- `docs/` — inventory, architecture, and readiness checklist.
- `ncod-2.0/lobby/` — future reusable room renderer, avatar layers, animation controller, and live presence.
- `ncod-2.0/modes/` — future independent modules for each mode.

**Safe-change rule:** Keep `index.html`, `game.html`, `living-room-preview.html`, and their asset paths stable until a replacement has been tested. Do not delete or move existing files just to tidy the root. Keep the official site untouched.

See [repository audit](./docs/REPOSITORY-AUDIT.md) and [development structure](./docs/ARCHITECTURE.md).
