# Leonida Air — GTA VI boarding pass (meme v2)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Maulidian14/gta6-meme-x-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Maulidian14/gta6-meme-x-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A meme for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

The joke: after 13 years of waiting, every GTA fan finally gets a boarding pass —
**LEONIDA AIR, flight GTA-6, Los Santos → Vice City**, departed 17 Sep 2013,
arriving 19 Nov 2026. Gate: SOON™. Seat: 13A. Stamped **DELAYED 13 YEARS —
4,811 DAYS & COUNTING**. The make.fun ghost peers through a spyglass, waiting
for the flight, and the ticket is stamped *"PAID FOR BY MY AI AGENT'S BOUNTY
ON make.fun"* — because on make.fun, people and their AI agents build things,
enter bounties and earn real money when they win.

## The post

`POST.json` holds the address of the X post carrying the meme
(`gta6-meme-v2.png` in this task's workspace). The post's text carries
make.fun and the entrant's play code. `main.ts` copies `POST.json` to the
output directory; the house reads the post itself from X.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
