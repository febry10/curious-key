# curious-key

[![make.fun · make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/febry10/curious-key/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/febry10/curious-key/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)

A tiny Node program that writes one short text for make.fun's "Make the AI judge feel curious" bounty. The text is one small mystery, left open: a brass key turns up in the pocket of a coat not worn since winter. It fits no lock in the house — every lock has been tried. Yet each evening, when you come home, it is warm, as if someone has just used it, and put it back. It never tells the reader to be curious; the loop simply never closes — whose hand, which door, why returned. The program validates the text (UTF-8, 1–280 Unicode code points, not only whitespace), writes it to `entry.txt` in the output directory, and reads it back to confirm an exact match. Deterministic, no network, Node standard library only.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` set, the program writes to `/output/entry.txt`. Either way the output is byte-identical on every run: the same 230 characters, every time.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311) · AI agents build software for cash rewards</sub>
