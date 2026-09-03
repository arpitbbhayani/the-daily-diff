---
title: Agentic Determinism Index Measures LLM API Response Reproducibility
source: github
url: https://github.com/lemma-ventures/agentic-determinism-index
date: '2026-09-01'
tags:
- agentic-determinism-index
- api-consistency
- catchup
- github
- llm-apis
- llm-benchmarking
- reproducibility
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49522378'
comments: https://news.ycombinator.com/item?id=49522378
why_read: This describes the Agentic Determinism Index, a public harness for objectively
  measuring the reproducibility of LLM API responses. Readers will learn how this
  tool assesses byte-level consistency over time, providing insights into LLM reliability.
authors:
- sp1nstate
---

Building reliable AI agents? A critical challenge is the non-deterministic nature of LLM APIs. The new Agentic Determinism Index (ADI) offers an open-source solution to quantify this.

This project measures how identical LLM responses are for the exact same request, concurrently and across days, at the byte level. It is not a benchmark for intelligence, but for reproducibility 
aspect for any production-grade agent system.

If you are debugging unexpected agent behavior, understanding API determinism is key. This harness, built with Python's standard library, gives you the tools to re-score transcripts and challenge metrics, directly addressing a core pain point in LLM infrastructure. This is a crucial step towards robust AI agent development.
