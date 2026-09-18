---
title: VS-OPT and GIUSTRA Engine reduce LLM search token overhead
source: github
url: https://github.com/filippocarrucciu1-lang/vs-opt-deterministic-search
date: '2026-09-16'
tags:
- catchup
- deterministic-search
- github
- llm-token-overhead
- pre-query-optimization
- rag-optimization
- state-verification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49723840'
comments: https://news.ycombinator.com/item?id=49723840
why_read: To understand how a deterministic mathematical pipeline can significantly
  reduce LLM and search token overhead. Readers will learn about a new architecture
  for pre-query intent correction and zero-trust state verification in AI search engines.
authors:
- filippo10
---

LLMs are notoriously token-hungry, especially in search and browser agent contexts. But what if you could slash token overhead by 40 percent without resorting to constant web re-crawling? This project introduces VS-OPT.

VS-OPT replaces the typical probabilistic, iterative refinement loop with a deterministic pipeline. Instead of endless scraping and prompt re-generation, it uses a Query Optimizer for pre-query intent correction and a GIUSTRA State Verification system that validates data authority, timestamp, and version *hic et nunc*.

This approach addresses a critical challenge in LLM infrastructure: exponential token consumption and high operational expenditure. By building a zero-trust state governance model and leveraging a ledger-backed state for data authority, engineers can achieve significant cost savings and latency reduction. This is a game-changer for anyone building production-grade AI search engines or browser assistants.
