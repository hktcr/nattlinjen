# Nattlinjen – feedback correction R2 (development only)

This development branch preserves the runtime of `1b68bac94fdb81fab78aff04aa88302bd8a7b5eb` and applies the narrowly reviewed R2 feedback correction. It does not update the live Pages branch or authorize a release. The repository is public; this is not a private testing URL.

## Change and evidence

Editing a previously checked draft replaces stale success with a neutral request to check again, without repeating on each keystroke. Conditional fields preserve a still-valid stage check. Queued stale announcements are superseded, Home clears them, and Undo/reset have truthful feedback. Math, gameplay controls and stored receipt format are unchanged.

Independent scoped R2 code/DOM review: PASS. F1 state 32 pass / 0 fail (42/42 instances closed), F1 math 4 pass / 0 fail (4/4 closed). Syntax, core, guides, display doubles, CSS structure and static build passed. Real Chromium UI verified success → edit, further edit, Undo, reset and Home on 30 October 2026. Physical mobile/touch and actual spoken screenreader testing remain open. DOM or accessibility-tree results are not screenreader results.

Full `npm test` is NOT green: historical scene-test fails on both unchanged baseline and this candidate. Historical world-native suite has 0 pass / 35 fail on both. These failures are retained, not hidden or rewritten.

## Reproduce

Node >=18, Python3; jsdom locked at26.1.0. Install locally with `npm ci --ignore-scripts`, then:

```sh
node --check app.js
node --check campaign/engine.js
node qa/f1-local-test.cjs state /tmp/nattlinjen-state-fresh.json
node qa/f1-local-test.cjs math /tmp/nattlinjen-math-fresh.json
npm test
npm run build
python3 -m http.server 8765 --bind 127.0.0.1
```

Use fresh result filenames; the bounded QA script refuses overwrite. `npm run build` only copies static runtime to dist, it does not deploy. Synthetic game state is browser-local. No credentials or user data are required.

## Provenance

The previous `build-provenance.json` describes the parent runtime, not this correction. See `feedback-r2-provenance.json` for this revision. This branch is not full-game acceptance and must not be merged into or pushed over `gh-pages` as an implicit release.
