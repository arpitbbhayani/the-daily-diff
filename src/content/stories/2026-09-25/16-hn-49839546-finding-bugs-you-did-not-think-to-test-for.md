---
authors:
- wh33zle
comments: https://news.ycombinator.com/item?id=49839546
date: '2026-09-25'
depth_score: 8
hn_id: '49839546'
image: /infographics/16-hn-49839546.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- bug-discovery
- catchup
- deterministic-simulation
- fuzzing
- hn
- sans-io-protocol
- software-testing
title: Finding bugs you did not think to test for
url: https://www.firezone.dev/blog/finding-bugs-you-didnt-think-to-test-for
utility_score: 9
why_read: This article explains why traditional test suites struggle to find unexpected
  bugs and introduces an advanced approach combining sans-IO design, deterministic
  simulation, and fuzzing.
---

Finding insidious bugs often requires more than just unit and integration tests. This article dives into a powerful triad of techniques: sans-IO protocol design, deterministic simulation, and coverage-guided fuzzing. This combination radically improves test coverage and reliability.

The sans-IO approach cleanly separates your core logic from I/O, making it inherently more testable. When combined with deterministic simulation, you can replay complex system behaviors exactly, pinning down race conditions or subtle protocol deviations that are nearly impossible to catch in live environments.

Adding coverage-guided fuzzing then generates test cases that explore code paths you never explicitly thought to test for, pushing your system into unexpected states and revealing hidden vulnerabilities.

Learn how to build more resilient systems by adopting these advanced testing practices.