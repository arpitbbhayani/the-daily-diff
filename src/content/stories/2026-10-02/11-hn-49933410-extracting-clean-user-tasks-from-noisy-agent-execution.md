---
title: Extracting clean user tasks from noisy agent execution traces
source: hn
url: https://laminar.sh/blog/extracting-tasks-from-agent-runs
date: '2026-10-02'
tags:
- agent-traces
- catchup
- eval-generation
- hn
- llm-agents
- prompt-caching
- task-extraction
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49933410'
comments: https://news.ycombinator.com/item?id=49933410
why_read: Learn how to isolate verbatim user requests from cluttered agent prompts
  at scale. This understanding helps you diagnose run failures and build better evaluation
  datasets from production traffic.
authors:
- Rakhman Asmatullayev
image: /infographics/11-hn-49933410.jpg
---

Extracting the actual user prompt from an LLM agent trace sounds trivial until you look at real production payloads. Because modern harnesses optimize for prompt caching, developers pack dynamic request state, system notices, and environment snapshots directly into the user turn.

The initial message sent to the model becomes a crowded mix of static scaffolding, open file buffers, and conversation history. Finding the verbatim user task inside that noise across millions of daily runs without asking developers to annotate their code requires a robust parsing strategy.

Isolating clean task strings unlocks accurate failure categorization and automated evaluation benchmarks from production data. When you can pinpoint the exact user intent, regression testing transitions from synthetic mock data to real-world edge cases.

Context engineering is not just about prompt formatting for models; it is also about designing traces you can cleanly parse downstream.
