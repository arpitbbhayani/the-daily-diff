---
title: Language models resolve open mathematical conjectures autonomously at modest
  cost
source: hn
url: https://arxiv.org/abs/2608.11941
date: '2026-08-16'
tags:
- ai-agents
- benchmarking
- catchup
- hn
- language-models
- lean-formalization
- mathematical-conjectures
- oeis
- theorem-proving
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49323857'
comments: https://news.ycombinator.com/item?id=49323857
why_read: This paper demonstrates that language models can resolve open mathematical
  conjectures autonomously and at modest cost. Readers will learn about the OEIS Open
  benchmark and the surprising capabilities of current LMs in formal mathematics.
authors:
- Tom Adamczewski
---

Language models are making surprising strides in automated reasoning. A new benchmark, OEIS Open, challenged LLMs to resolve 492 unsolved mathematical conjectures formalized in Lean, and they managed to crack 147 of them.

What is truly eye-opening is that simply giving LMs access to vast mathematical literature (like 476,000 arXiv papers) or using more sophisticated agent loops did not actually increase performance. This suggests that the bottleneck is often not external context or complex orchestration, but perhaps the core reasoning capabilities or how problems are framed.

This paper provides crucial empirical data for anyone building or researching AI agents, offering insights into their current strengths and where further breakthroughs are truly needed, especially when facing open-ended problems.
