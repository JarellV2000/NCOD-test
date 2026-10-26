# Validation performed

- JavaScript syntax checked with `node --check`.
- `node tests/static.cjs`: local imports/links resolve; all seven prompt banks contain unique strings.
- `node --experimental-vm-modules tests/model.cjs`: four complete question games, no repeated prompts in a session, refresh recovery, recap counted once, two complete local voting games, concealed Confessional results, 20-second deadline, author reveal, 2v2v2 fixed match environment and final scores. Uses a minimal DOM model, not a real browser.
- Browser test suite included at `tests/browser.cjs`, but NOT executed: no Chromium executable was available and the download failed in this environment. Mobile visual QA remains outstanding. Install Playwright and its Chromium browser, serve the project, then run `node tests/browser.cjs`.
- SQL was not executed against Supabase. Multi-device reconnect, full-room races, authorization and online membership remain unverified until staging is connected.
