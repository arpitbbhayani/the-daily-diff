---
title: Making formalization cheap exposes the gap in verified trust
source: hn
url: https://yangky11.github.io/blog/ai-and-formalization/
date: '2026-09-27'
tags:
- ai-safety
- catchup
- formal-verification
- hn
- lean
- specification-gap
- theorem-proving
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49863578'
comments: https://news.ycombinator.com/item?id=49863578
why_read: Read this to understand why low-cost formal proof generation does not automatically
  resolve the challenge of defining trustworthy specifications.
authors:
- Kaiyu Yang
---

Automating formal proof generation does not automatically solve software trust. As coding agents make formal verification in tools like Lean remarkably cheap, we face a subtle architectural trap: proving a specification is correct does not mean the specification captures the real-world problem.

When formalization was expensive, the human effort of writing specifications forced rigorous thinking about system requirements. With AI agents generating both specifications and proofs rapidly, the bottleneck shifts entirely to specification correctness and environment modeling. A verified proof of an incomplete or flawed specification merely produces verified bugs.

For systems engineers designing safety harnesses around autonomous agents, formal proofs are a powerful layer, but they cannot replace robust integration testing and empirical validation.
