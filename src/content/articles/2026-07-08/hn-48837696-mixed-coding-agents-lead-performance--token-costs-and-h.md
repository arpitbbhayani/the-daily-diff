---
title: Mixed coding agents lead performance; token costs and harnesses are crucial
source: hn
url: https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase
date: '2026-07-08'
tags:
- benchmarking
- catchup
- coding-agents
- cost-efficiency
- harnesses
- hn
- llm-performance
score: 154
hn_id: '48837696'
comments: https://news.ycombinator.com/item?id=48837696
why_read: You should read this to understand the performance and cost dynamics of
  various coding agents based on Databricks' internal benchmarks. It reveals how model
  choice, token efficiency, and harness design impact real-world coding task outcomes.
authors:
- tanelpoder
author: tanelpoder
---

Databricks just published a crucial benchmark: evaluating coding agents on their own multi-million line codebase, covering Python, Go, Scala, and Typescript. The findings are a must-read for any senior engineer leveraging AI in development. They found that no single model dominates the 'Pareto frontier' for quality vs. cost; a mix of OpenAI, Anthropic, and open-source models is required. Furthermore, open models like GLM 5.2 are now tackling the hardest tasks. A surprising insight: token price is not a reliable indicator of total cost, as larger models can be significantly more token-efficient. Perhaps most impactful, the 'harness' or prompt structure dramatically affects both cost and quality. This means how you interact with these models is as important as the model itself. Optimizing these interactions is a new, essential engineering practice for AI-driven development.
