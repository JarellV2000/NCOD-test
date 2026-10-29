# NCOD 2.0 planned structure

```
/
  index.html                     current homepage — keep stable
  living-room-preview.html       current illustrated room preview — keep stable
  lounge.png                     current flattened room art — keep stable
  game.html, theme.html           legacy demos — keep stable
  NCOD-2D-GAME-ONLY.html          older standalone demo — keep stable
  css/theme.css
  js/game.js, animations.js, supabase.js
  docs/
    REPOSITORY-AUDIT.md
    ARCHITECTURE.md
  ncod-2.0/
    lobby/
      README.md                   upcoming reusable lobby module
    modes/
      README.md                   independent game mode module plan
```

## Future modular implementation (not yet coded)
- `ncod-2.0/lobby/room.js`: draw host-selected room and seat map.
- `ncod-2.0/lobby/characters.js`: manage up to 12 visible player avatars using 14 selectable characters.
- `ncod-2.0/lobby/animations.js`: sitting -> standing -> emote -> sitting state machine.
- `ncod-2.0/lobby/realtime.js`: Supabase presence, reconnect, votes, chat, room events.
- `ncod-2.0/modes/{friends,talking-stage,couples,confessional,confessionals-pt2,most-likely-to,dare-or-drink}.js`: isolated question/round logic.

The lobby should be reusable across multiplayer modes; offline modes must remain playable without a network connection. All multiplayer modes use the host's personal room, maximum 12 participants. 14 character options are not 14 simultaneous players.

## Rules
- Do not put Supabase service_role keys in client-side code.
- Preserve the approved realistic-looking 2D art direction; do not replace it with emojis.
- Avoid modifying official production repository.
- Changes to mode files should not change other modes.
- Current static art cannot independently animate character bodies; create separate sprites first.
