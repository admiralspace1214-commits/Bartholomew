# Bartholomew — Learning Brain (PWA package)

This is the Little Brain v0.1 prototype prepared for installation as an Android home-screen web app.

## Files
- `index.html` — the brain prototype
- `manifest.json` — app name, icon, and install settings
- `sw.js` — offline caching after first successful visit
- `icon.svg` — Bartholomew app icon

## Install on Android using only your phone
A PWA must be served from HTTPS (or localhost); opening `index.html` directly from Downloads will not enable full installation/offline features.

1. Extract this ZIP on your phone so all four files stay together.
2. Upload the extracted files to a static website host that provides HTTPS. One option is GitHub Pages: create a repository, upload the four files to its root using the browser, then enable Pages in repository Settings. A public repository is simplest for Pages on free accounts.
3. Open the published HTTPS website in Chrome on Android.
4. Open Chrome's ⋮ menu and choose **Install app** or **Add to Home screen**.
5. Launch **Bartholomew** from the new icon. Open it online once first so its files can be cached for offline use.

Keep in mind: browser storage belongs to that browser/origin. Do not clear site data if you want to keep memories/training examples. Use the app's JSON export for backups. Do not save passwords or sensitive personal information.

This is a PWA, not a signed APK. The neural network learns a small positive/negative text classification task; the chat responses remain mostly rule-based.
