# NO CAP OR DRINK 2.0

Integrated development build. Each game mode lives in `modes/<slug>/` with its own page, JavaScript entry and question bank. Shared engines live in `js/core/`; world screens use `hub.html` and `js/hub.js`.

Run locally: `python3 -m http.server 8000`, then open `http://localhost:8000`. Do not open module pages directly through file://.

See [build status](docs/BUILD-STATUS.md) for exactly what works and what remains. See [staging setup](docs/CONNECT-STAGING.md) for the optional online lobby. Local games work without any keys. No build step is required.

Online gameplay/rewards are not complete. Guest progress is device-local, and character/apartment art is placeholder illustration. This branch is for development only; do not merge into main or change Pages settings without reviewing and testing.
