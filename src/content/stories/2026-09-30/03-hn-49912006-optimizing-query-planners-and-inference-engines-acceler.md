---
title: Optimizing query planners and inference engines accelerates AI-SQL
source: hn
url: https://modal.com/blog/quail-billion-tpm
date: '2026-09-30'
tags:
- ai-sql
- catchup
- cost-performance
- hn
- inference-engines
- quail
- query-planning
section: databases
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49912006'
comments: https://news.ycombinator.com/item?id=49912006
why_read: Learn how co-designing database query planners and LLM inference engines
  enables high-throughput, low-cost analytical AI-SQL workloads.
authors:
- gmays
image: /infographics/03-hn-49912006.jpg
---

Running batch language model workloads inside relational databases usually hits massive performance bottlenecks. Standard inference servers treat every prompt as an independent request, ignoring the structural patterns and repetitive joins inherent in SQL execution plans.

The Quail system bridges this divide by co-designing the database query planner with the inference engine. By analyzing prompt templates and row join dependencies ahead of execution, the engine can pre-cache prefix KV states, eliminate redundant token processing, and schedule token generation in massive coherent batches.

This architectural shift allows a single graphics processing unit to achieve throughput of over one billion tokens per minute on structured analytic queries.

When database planners understand inference memory dynamics, analytical processing over unstructured data becomes orders of magnitude cheaper.
