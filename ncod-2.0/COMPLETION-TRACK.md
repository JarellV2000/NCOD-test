# NCOD 2.0 — Completion Track

Branch: `feature/ncod-2-complete-game`. Do not merge or deploy to production without approval.

## Locked design
- Mobile-first; realistic 2D/static characters, reaction bubbles, no skeletal/full-body animation.
- 14 selectable characters; host-owned Atlanta living room; 12 players maximum.
- Room code and invite URL; reconnect after phone lock; secret votes until reveal.
- Seven modes: Friends, Talking Stage, Couples (offline); Most Likely To, Dare or Drink, Confessional, Confessionals Pt. 2 (multiplayer).
- Separate mode modules; nonrepeating prompt banks; 20-second voting where appropriate.
- 20 levels at 500 XP each; multiplayer rewards more than offline; no daily rewards.
- Account to save progression; guest play allowed. Username/passcode desired, secure authentication design required.
- Five living rooms unlocked at levels 1,5,10,15,20; clothing shop with ATL/Baltimore styles.

## Release gates
- [ ] Replace experimental single-file prototype with separate mode modules and full approved question banks.
- [ ] Implement Confessional: private submissions, author hidden even from host, guessing, reveal, scoring.
- [ ] Define and implement distinct Confessionals Pt. 2 rules.
- [ ] Implement Most Likely To with reliable voting, 20s deadline, server-enforced reveal and no duplicate votes.
- [ ] Implement Dare or Drink turn assignment and skip/drink choices.
- [ ] Verify 12-player limit and secure room membership; prevent unauthorized access to other rooms.
- [ ] Persist session and reconnect on mobile background/resume.
- [ ] Create account/profile and safe progression, XP, coins, achievements.
- [ ] Integrate 14 approved character assets; five distinct room assets; outfit catalog.
- [ ] Test iPhone Safari and Android Chrome with 2+ devices.
- [ ] Deploy a separate preview only after user approves; keep official site untouched.

## Current limitations
- The existing NCOD 2.0 party page is a prototype with starter question banks, not complete game modes.
- Supabase test project contains room/player/vote tables; anonymous authentication availability is unverified.
- Existing confessional prototype does not implement anonymous submissions.
- Existing five room HTML pages do not yet have five distinct completed room artworks.
- Real character movement is explicitly out of scope.
