---
title: Coordinating Claude Code Sessions with Parallel Agent Lanes on a Shared File
source: github
url: https://github.com/adam-s/lanes
date: '2026-09-01'
tags:
- agent-coordination
- catchup
- claude-code
- github
- multi-agent-system
- shared-file-communication
- token-cost-optimization
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49523092'
comments: https://news.ycombinator.com/item?id=49523092
why_read: This post introduces a proof-of-concept system called Lanes for coordinating
  multiple Claude Code agents through a shared append-only file. Readers will learn
  a novel method for multi-agent communication and parallel task execution within
  AI development environments.
authors:
- adam-s
---

Orchestrating multi-agent systems efficiently and cost-effectively is a critical challenge. The 'Lanes' project introduces a clever pattern for Claude Code agents that exploits the 0.1x cache-read pricing.

By having multiple agents watch a shared, append-only file (like `tail -f`), they can coordinate tasks. One agent acts as an orchestrator, splitting work and verifying results, while others act as workers, reading tasks and writing their output to the shared file.

This simple, yet highly novel, approach significantly reduces token costs for inter-agent communication because cached reads are so cheap. It is a brilliant example of designing LLM infrastructure to leverage pricing models for efficiency. This pattern is directly applicable if you are building complex agentic AI systems and need to manage costs and coordination effectively.
