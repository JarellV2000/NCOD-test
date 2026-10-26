# NCOD 2.0 — Integrated development build

## Playable locally
- Friends: 66 new draft prompts; Talking Stage: 35; Couples: 35; Dare or Drink: 30.
- Names, shuffled deck, no repeats inside a game, automatic advance, skip, recap, refresh recovery in the same tab.
- Confessional: 20-second local vote rounds, anonymous player labels, results withheld until recap, self-votes allowed.
- Most Likely To: 20-second local vote rounds, names, round results and recap.
- Confessionals Pt. 2: multiple stories per person, stories between rounds, 20-second guessing, correct-guess scores, author reveal. Stories exist only in memory. The phone owner can inspect local data; this is NOT secure online author secrecy.
- Love or Drink: exactly six players, chosen or random pairs, one of four settings per match, nine challenges, live ranking and final totals. No AI fan voting, selfies or online rounds yet.

## World screens
14 selectable illustrated placeholder characters, local guest name and local counts, five apartment tiers, clothing try-on. These are CSS illustrations, not finished 3D assets. Personality names are draft slots awaiting the user/friend surveys. Shop prices are provisional. Level 1 and starter outfit only can be equipped. No coin purchases or XP awards are enabled.

## Online lobby implementation — requires setup and testing
An additive staging SQL migration, Supabase client adapter, create/join/leave/snapshot UI, max 12 members, 24-hour rooms, retained seats after disconnect, foreground reconnect polling, host transfer on explicit leave. Online gameplay, reactions, submissions and voting are not synchronized yet. No rewards/account linking are implemented. Do not describe lobby membership as a completed multiplayer game.

## Next implementation sequence
1. Connect and validate staging lobby across phones (including lock/unlock and full-room rejoin).
2. Add server-controlled rounds and versioned transitions; keep 20-second deadlines on server.
3. Add secret confession storage with no client-readable author IDs before reveal; authenticate submissions and guesses server-side.
4. Add XP/coin ledger, idempotent game completion awards, inventory and account linking.
5. Replace placeholders using the 14 surveys and approved character/apartment art. Add cosmetic layers, reactions, and Love or Drink selfies/fan simulation with explicit labeling.

The official repository, main branch and hosting configuration must remain unchanged until separately authorized.
