---
title: Scaling auto-research loops builds token-efficient agent harnesses
source: hn
url: https://nvlabs.github.io/SoL-Pi/
date: '2026-09-24'
tags:
- agent-harnesses
- auto-research-loops
- catchup
- coding-agents
- hn
- recursive-self-improvement
- token-efficiency
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49834887'
comments: https://news.ycombinator.com/item?id=49834887
why_read: Learn how recursive self-improvement loops can systematically discover reusable
  harness optimizations to dramatically reduce token costs in long-running coding
  agents.
authors:
- adr1an
---

Long-running agent workflows generate massive token waste as trajectories lengthen over multi-day execution loops. NVIDIA Research introduced SoL-Pi, an agent framework designed around recursive self-improvement specifically targeting harness token efficiency.

Instead of tuning prompts manually, the framework deploys meta-agents to observe execution trajectories across sandboxed environments. These observer agents automatically discover and benchmark harness modifications, isolating the exact context pruning and tool-invocation mechanisms that minimize redundant token consumption.

In benchmark tests, this auto-research loop cut operational costs by 8.75 to 13.50 dollars per hour compared to native Claude Code and Codex harnesses. The key insight is that unguided agent trajectories accumulate noise exponentially, degrading model reasoning while burning budget.

Building production agent infrastructure requires treating harness efficiency as an algorithmic search problem rather than a static prompt engineering task.
