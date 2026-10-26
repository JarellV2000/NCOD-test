# NCOD 2.0 — Phase 1 package

## What this is
An incremental update to the **uploaded NCOD-2.0 starter scaffold**, not a restoration of the older live NCOD-test game. Eight mode folders remain separate. Each now imports its own questions.js and uses a shared offline question-preview controller. Empty banks show an honest empty-state message. No prompts were invented.

## What is NOT implemented
Multiplayer lobbies, Supabase, anonymous voting, confession submissions, Love or Drink teams, scoring, coins, XP, persistent profiles, and smart rejoin. Do not use this package to replace an existing working website without comparing its features.

## Safe upload procedure
1. Keep your official `no-cap-or-drink-` repository untouched.
2. Create a **new development repository** or a separate branch of `NCOD-test`; do not overwrite `main`.
3. Extract the ZIP. Upload the **contents**, preserving directories, not the ZIP itself.
4. Preview from the development branch or an isolated preview deployment.
5. Open every mode on iPhone and verify navigation, question empty state, and CSS.
6. Only approve a merge after comparison against the existing working test site.

## Add questions
Edit only `modes/<mode-name>/questions.js`:
```js
export const questions = [
  'Your approved question here?',
  'Another approved question?'
];
```
Questions are currently empty because the uploaded starter did not include the original approved banks.

## Files changed
`js/core/question-controller.js` added; all eight mode entry JavaScript files updated; `modes/confessionals-pt2/questions.js` added; `css/theme.css` received additive styles. Other starter files are retained.
