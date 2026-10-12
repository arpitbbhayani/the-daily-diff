---
title: Orchestrating autonomous agents to decompile a first-person shooter
source: hn
url: https://momo5502.com/posts/2026-10-09-game-decompilation/
date: '2026-10-11'
tags:
- agent-harnesses
- ai-orchestration
- c++
- catchup
- decompilation
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50039092'
comments: https://news.ycombinator.com/item?id=50039092
why_read: Read this to understand how to structure infrastructure and harnesses when
  running autonomous AI agents across large-scale software reconstruction tasks.
authors:
- Maurice
image: /infographics/01-hn-50039092.jpg
---

Orchestrating autonomous agents over hundreds of billions of tokens reveals practical bottlenecks that short benchmarks never expose. In a massive experiment using over 500 billion tokens to decompile an entire first-person shooter into readable C++, the primary challenge was not model intelligence, but infrastructure design and harness resilience.

Long-running autonomous agents frequently degrade when burdened with noisy tool output and runaway context growth. The team found that model choice between top-tier reasoning engines mattered far less than the execution harness, tooling boundaries, and automated verification loops.

To keep agents productive over weeks of continuous execution, you must treat your harness as a strict compiler pipeline. Providing deterministic feedback mechanisms, isolated subtasks, and bounded execution environments prevents compounding drift and hallucinatory refactoring loops.

Scale shifts the agent engineering problem entirely from prompt tuning to deterministic system harnesses.
