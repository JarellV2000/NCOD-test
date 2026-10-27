# Party Deck — separate playable flip-card build

Branch: `feature/flipcard-playable`, based on `ncod-2.0-phase1-dev`.

## Play
Serve this folder as a static site and open `index.html`. No build step or package installation is needed. Choose a mode, flip its popup to the rules, then Start Game. Question decks reveal on tap; No Cap, Drink and Skip automatically advance. Use Exit to return home.

13 modes: Friends, Talking Stage, Couples, Confessional, Confessionals Pt. 2, Who’s Most Likely To, Dare or Drink, Love or Drink, 21+ After Dark, Hot Seat, Exposed, Chaos, No Mercy. Battle Royale is absent.

Each mode has its own folder and question file. The three original categorized banks are retained as `original-prompts.json`; original question text has been merged with the development branch's draft questions, removing exact duplicates within each bank. The 125 original Confessional voting prompts also feed the Who’s Most Likely To deck. No service workers cache an older theme.

## What works
- Illustrated A+B party/collectible card homepage, popup front/back rules cards, tap-to-reveal question cards, automatic advance and recap.
- Shared-phone play for all modes; shuffled prompts without repeats within a deck.
- Question deck recovery after refreshing the same tab; local recap counts.
- 20-second local voting, self-votes, handoff, per-round totals, ties, local emoji reactions and final totals.
- Original Confessional retains numbered player labels and hides totals until the final recap.
- Confessionals Pt. 2 supports multiple submissions, between-round stories, author reveal and correct-guess scoring.
- Love or Drink uses six players, chosen/random pairs, a stable random setting per match, challenge rankings and final scores.

## Limits
This is a shared-phone playable build, not completed synchronized multiplayer. The inherited online lobby connection remains disabled pending database setup. No Supabase schema or project settings were changed. Online rounds, private author storage, cross-phone voting/reactions, XP/coin rewards, fan simulation and selfies are not implemented here. Local confession authors can be inspected by the device owner. Voting and confession rounds do not resume after refresh; use ordinary question decks for refresh recovery. Character art is illustrative sample artwork, not the finalized 14 friend-based characters.

Hot Seat, Exposed, Chaos, No Mercy and After Dark use the rotating-player prompt deck controller, preserving their original text; Chaos does not conduct embedded vote prompts as a separate synchronized ballot.

## Verification
`node tests/static.cjs` checks all local links/imports and all 12 authored banks for uniqueness. `node --experimental-vm-modules tests/model.cjs` completes all nine prompt-deck modes, two voting games, timer expiration, confession reveal, and Love or Drink. Question-mode tests verify unique draws, automatic advance, same-tab refresh recovery, recap counts, and no double award.

Browser QA confirmed mode popup flip, rules navigation, Friends setup, tap reveal and automatic progression. Deployment is intentionally excluded; main and the official game are unchanged.

## Art
`assets/images/party-deck.webp` is generated 2D sample artwork. Brief: six adult Black friends, Baltimore/Atlanta-inspired streetwear, collectible card ink illustration, playful crowns/doodles, black/red/orange/cream palette. Generated with the built-in image generation tool and converted to WebP for faster loading.
