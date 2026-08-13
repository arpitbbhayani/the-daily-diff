---
title: Jitter RNG is a compliant true random number generator
source: hn
url: https://www.chronox.de/jent/
date: '2026-08-11'
tags:
- ais-20-31-ntg-1
- catchup
- entropy-source
- hn
- jitter-rng
- sp800-90b
- true-random-number-generator
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49256664'
comments: https://news.ycombinator.com/item?id=49256664
why_read: This text introduces Jitter RNG, a software-based true random number generator
  compliant with SP800-90B and AIS 20/31 NTG.1 standards. Readers will understand
  its unique properties as an entropy source for both kernel and user land.
authors:
- fanf2
---

Generating true random numbers is a surprisingly hard problem, especially when you need high assurance and compliance. This Jitter RNG project introduces a novel software-based solution that leverages CPU jitter, sidestepping reliance on physical hardware or complex environmental noise.

It works in both kernel and user space and boasts compliance with SP800-90B and AIS 20/31 standards, which is a huge deal for cryptographic applications and system integrity. This means it is not just theoretically interesting, but also practically certifiable.

Understanding how non-physical entropy can be extracted from micro-architectural timings offers deep insights into system security fundamentals and can influence your approach to building robust, secure distributed systems.
