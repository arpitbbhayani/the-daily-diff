---
title: Bough agent uses a unique programmatic harness design
source: github
url: https://github.com/andreylukin/bough
date: '2026-08-12'
tags:
- catchup
- coding-agent
- control-flow
- github
- harness-design
- javascript-programming
- no-sandboxing
- real-world-execution
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49273308'
comments: https://news.ycombinator.com/item?id=49273308
why_read: Read this to understand an alternative design for AI coding agent harnesses,
  where the agent writes executable JavaScript programs with control flow. You will
  learn about its direct execution model and the associated security considerations.
authors:
- Andreylukin
---

Most current LLM agent frameworks orchestrate tasks through a series of discrete tool calls. However, Bough, a new coding agent, takes a radically different approach: it writes a full, executable program with real control flow (loops, branches, composition) in JavaScript for each turn.

This fundamentally changes the agent's reasoning capability. Instead of being limited to sequential operations, the agent can express more complex logic and interact with its environment in a more sophisticated, programmatic way. The agent effectively codes its own workflow on the fly.

For anyone designing sophisticated AI agents, Bough offers a compelling alternative to consider. It highlights how better harness design, not just larger models, can unlock new levels of agentic intelligence and capability.
