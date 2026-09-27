---
title: Why Buran used four computers to survive two failures
source: hn
url: https://zatona.dev/blog/why-buran-had-four-computers
date: '2026-09-24'
tags:
- biser-4
- catchup
- fault-tolerance
- formal-verification
- hn
- lean-4
- redundancy
- voting-mechanisms
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49836905'
comments: https://news.ycombinator.com/item?id=49836905
why_read: Understand the architectural reasoning behind Buran's four-computer redundancy
  model and see how formal verification in Lean 4 validates voting mechanisms.
authors:
- Dmitrii Zatona
image: /infographics/10-hn-49836905.jpg
---

Designing fault-tolerant systems often leads engineers to assume Byzantine fault tolerance requires 3f + 1 nodes. Yet the Soviet Buran orbiter famously used four synchronized flight computers rather than three or five, and not for Byzantine consensus reasons.

The spacecraft needed to survive any two hardware failures using output comparison alone. If you only compare outputs without internal diagnostics, three computers can identify that one has failed, but after one failure, the remaining two cannot resolve a subsequent disagreement. Four computers provide the exact redundancy needed to isolate and block two consecutive failures.

Identical redundant channels still share software bugs. To tackle this, modern high-integrity systems combine architectural dissimilarity with formal verification. The voter logic itself can be implemented in Rust and formally proved in Lean 4 to guarantee that healthy channels always agree on correct actuator commands.

Hardware redundancy only protects against hardware faults, making formal verification essential for the arbitration layer.
