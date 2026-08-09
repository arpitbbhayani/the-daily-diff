---
title: Optimizing coding agents by minimizing conversation transcript cost
source: hn
url: https://app.nz/blog/app-agent-token-efficiency-optimizations
date: '2026-08-07'
tags:
- benchmarking-harness
- catchup
- coding-agents
- cost-optimization
- hn
- stateless-api
- tool-calls
- transcript-cost
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49210901'
comments: https://news.ycombinator.com/item?id=49210901
why_read: This article explains why the cost of coding agents is driven by transcript
  size multiplied by turns. Readers will learn the critical factor for optimizing
  agent cost and how to properly measure it.
authors:
- opwizardx
---

Building AI agents? The real cost is not in the work itself, but in the "residue" of context that accumulates in the transcript over turns. One team found that an agent might pay for a file read 37 more times if it happens early in a 40-turn run.

They tackled this by building a dedicated "wire cost" harness that simulates 36 tool calls without involving the actual LLM. This allowed them to iterate rapidly and cut token usage in half for the same amount of agent work, showing that effective context management is paramount.

This is a critical insight for anyone deploying coding agents, emphasizing that token efficiency is an engineering problem solvable with smart testing and context engineering, not just better models.
