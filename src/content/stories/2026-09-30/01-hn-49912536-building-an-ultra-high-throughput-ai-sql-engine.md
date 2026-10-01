---
title: Building an ultra-high throughput AI-SQL engine
source: hn
url: https://fsdatalab.github.io/blog/introducing-quail/
date: '2026-09-30'
tags:
- ai-sql
- catchup
- database-systems
- hn
- llm-inference
- query-optimization
- user-defined-functions
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49912536'
comments: https://news.ycombinator.com/item?id=49912536
why_read: Understand the computational bottlenecks of running LLM-powered SQL functions
  over large datasets and how modern engines optimize high-throughput model execution.
authors:
- Shreya Shankar
- Charles Frye
- Fergus Finn
- Arnav Dhariya
- Joseph Barrow
- Meryem Arik
image: /infographics/01-hn-49912536.jpg
---

Running LLMs inside database queries via user-defined functions like AI.IF creates severe performance bottlenecks. Evaluating prompts row-by-row can easily trigger hundreds of thousands of independent inference calls across massive tables.

The team at Full Stack Data Lab introduced QUAIL to solve this by co-optimizing relational query execution with LLM inference scheduling. Instead of treating the model as a black-box scalar function, the engine coordinates predicate pushdown, filter reordering, and model batching across relational operators.

By synchronizing query plan generation with token cache sharing and parallel inference batching, the engine achieves up to 14x throughput improvements over naive row-level invocations.

Co-designing query optimizers with model execution runtimes is becoming essential for high-throughput AI infrastructure.
