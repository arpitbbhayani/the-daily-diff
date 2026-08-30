---
title: AI coding bot context files do not improve success rates
source: hn
url: https://pivot-to-ai.com/2026/08/27/your-agents-md-file-doesnt-actually-do-anything/
date: '2026-08-28'
tags:
- ai-coding-bots
- anthropic
- catchup
- context-files
- hn
- inference-cost
- llms
- task-success-rates
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49476140'
comments: https://news.ycombinator.com/item?id=49476140
why_read: This article reveals that context files like AGENTS.md or CLAUDE.md for
  AI coding bots do not generally improve task success rates and significantly increase
  inference costs. It provides insights into the limited utility of these instruction
  files across different LLMs and coding agents.
authors:
- latexr
---

If you are using AGENTS.md or similar context files for your LLM-based coding agents, you might be surprised by recent research from ETH Zurich. A study found these context files do not generally improve task success rates, and they significantly increase inference cost by over 20 percent on average.

This observation holds across different LLMs and coding agents, even with human-written context files. It challenges the common belief that more context automatically leads to better performance. Instead, it suggests that agents can get distracted or simply fail to leverage the additional information effectively, leading to wasted tokens and no real gain.

The key takeaway is that better context engineering means being ruthlessly selective, not simply providing more data. This insight is critical for anyone aiming to build truly effective and cost-efficient AI agents, reminding us that sometimes, less is genuinely more.
