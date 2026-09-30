---
title: Speeding up AI-SQL by co-optimizing query planner and inference engine
source: hn
url: https://modal.com/blog/quail-billion-tpm
date: '2026-09-29'
tags:
- ai-sql
- batch-inference
- catchup
- hn
- inference-engine
- llm-inference
- query-planner
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49902184'
comments: https://news.ycombinator.com/item?id=49902184
why_read: Read this to understand how joint optimization of database query planners
  and LLM inference engines can make large-scale analytic AI queries computationally
  viable. You will learn how backend data transformation workloads differ from standard
  agentic LLM patterns.
authors:
- Charles Frye
- Shreya Shankar
---

Running LLMs inside database queries typically wrecks both your token budget and query latency. When executing joins or filters driven by AI predicates across millions of rows, traditional decoupled architectures treat the LLM as an external black box, flooding inference engines with redundant token streams.

Quail tackles this bottleneck by jointly optimizing the analytical query planner and the inference runtime. Rather than routing raw sequences independently through standard agentic inference pipelines, it aligns relational operators with small, high-throughput model backends.

This co-design allows the query planner to batch, prune, and share KV cache state across tabular prompts before executing the model pass. It proves that embedding AI transformations directly into the relational layer requires redesigning query execution paths rather than simply wrapping API calls.

Treating the inference engine as a first-class database operator is the future of analytical data pipelines.
