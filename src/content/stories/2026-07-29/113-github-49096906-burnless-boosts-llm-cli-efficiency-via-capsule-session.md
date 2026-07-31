---
authors:
- rudekwydra
comments: https://news.ycombinator.com/item?id=49096906
date: '2026-07-29'
depth_score: 8
hn_id: '49096906'
image: /infographics/113-github-49096906-burnless-boosts-llm-cli-efficiency-via-capsule-session.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- caching
- catchup
- github
- llm-clis
- llm-orchestration
- performance-optimization
- session-state
title: Burnless boosts LLM CLI efficiency via capsule session state
url: https://github.com/Rudekwydra/burnless
utility_score: 9
why_read: This text introduces Burnless, a multi-tier LLM orchestration layer that
  dramatically improves LLM CLI efficiency. You will learn how capsule-based session
  state and prefix-cache reuse reduce token usage and operational costs.
---

Token limits and escalating costs are the silent killers of many promising LLM applications. Burnless tackles this head-on with a multi-tier orchestration layer designed to stop the endless replay of transcripts.

This project introduces innovative concepts like capsule-based session state and rolling memory, achieving astounding token reductions. Imagine a 1.44M-token workday condensed into just 1,590 tokens of active context - that is a 90.3 percent saving against no-cache and 30 percent versus cached replay.

For any senior engineer building LLM-powered CLIs or agentic workflows, this offers a practical blueprint for tackling one of the biggest infrastructure bottlenecks: context window management. These patterns are immediately applicable to optimize your LLM interactions and rein in costs.

Seriously, check this out to build more efficient and cost-effective LLM systems.