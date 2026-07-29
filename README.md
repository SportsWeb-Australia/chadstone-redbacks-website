# Chadstone Redbacks Lacrosse Club — website

Static marketing site for Chadstone Redbacks Lacrosse Club (Malvern East, VIC · Est. 1960).
Built to the approved "gameday" design; content and images sourced from the club's existing
site (chadstonelacrosse.com.au).

## Stack
Plain static HTML + CSS + a tiny vanilla JS file. **No build step, no dependencies.**
Fonts via Google Fonts (Oswald + Inter). Deployed on Vercel.

## Structure
```
index.html + 13 inner pages   ← home, about, what-is-lacrosse, teams, match-centre,
                                 news, membership, store, contact, play-at-chaddy,
                                 history, privacy, terms, cookies
404.html                      ← branded not-found page
assets/                       ← site.css, site.js, logo.png (crest), favicons,
                                 store product photos, tile-*.jpg (news photos)
vercel.json                   ← static config + asset caching
```

## Run locally
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080

## Content notes
- Real content pulled from the old site: 2026/27 fees, EFT/bank details, program
  coordinators, junior grades, club history, Green Jacket Australian representatives,
  store products & prices, registration (GameDay), sponsors.
- Junior Coordinator phone is **0407 705 367** (James Conheady) — confirmed correct.
- Legal pages (privacy/terms/cookies) carry honest placeholders pending the club's real
  policy text.
- Store shows real photos for 4 products; the rest use styled placeholder tiles.
- The whole-club group photo on the old homepage is locked in a gallery widget and
  couldn't be extracted — supply it to use as a hero background if desired.

_Website by SportsWeb Australia._
