---
title: Benchmarking implicit puzzle discovery reshuffles frontier model leaderboards
source: hn
url: https://arxiv.org/abs/2609.30144
date: '2026-09-28'
tags:
- benchmark-design
- catchup
- enigmaforge
- hn
- logic-puzzles
- model-evaluation
- sat-solver
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49881185'
comments: https://news.ycombinator.com/item?id=49881185
why_read: This paper introduces a novel benchmark where models must uncover hidden
  logic puzzles without explicit questions, revealing dramatic performance differences
  compared to standard fact-recovery metrics.
authors:
- Daniel Eisner
---

Most LLM benchmarks hand a model an explicit question and evaluate the final response against ground truth. EnigmaForge takes the opposite approach by providing an uncurated collection of documents with no prompt question at all, hiding a SAT-solver verified logic puzzle inside letters, receipts, and log records.

Evaluating twenty-five frontier models across 600 synthetic instances revealed a massive 22x performance spread on implicit puzzle discovery, compared to only a 1.6x spread on standard fact recovery. Strikingly, the second-best model at fact retrieval dropped to fourteenth place when it had to identify the underlying problem unguided.

This benchmark highlights a fundamental flaw in standard agent evaluation setups. When models cannot autonomously discover latent tasks within raw enterprise context, throwing larger context windows at the pipeline only amplifies noise.
