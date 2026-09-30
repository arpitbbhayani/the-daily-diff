---
title: Coding harnesses matter more than models for physics simulation
source: hn
url: https://juliahub.com/blog/why-the-best-ai-models-fail-at-physics
date: '2026-09-29'
tags:
- agentic-loops
- catchup
- claude-code
- coding-harnesses
- dyad-agent
- hn
- physics-simulation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49896868'
comments: https://news.ycombinator.com/item?id=49896868
why_read: Read this to understand why the execution harness and tool loop matter more
  than underlying model strength when applying AI agents to physical modeling tasks.
authors:
- abhimanyuaryan
---

When AI agents fail at complex reasoning tasks like physical simulation and scientific modeling, the natural reaction is to upgrade to a larger model. However, recent benchmarks from JuliaHub reveal that the execution harness matters far more than the underlying foundation model.

In controlled evaluations across four sealed physics problems, swapping frontier models inside a static harness produced a modest score variance of 0.162 on a normalized zero-to-one scale. In contrast, keeping the frontier model constant while replacing stock Claude Code with the specialized Dyad harness increased the score spread to 0.366, more than doubling the performance differential.

The harness defines the iterative feedback loop: tool invocation sequences, documentation retrieval strategies, and how validation errors get exposed back to the context window. General-purpose coding assistants often hide intermediate numerical state or fail to verify physical invariants against reference trajectories, causing the model to hallucinate working solutions.

Investing in domain-specific validation harnesses yields far higher returns than waiting for next-generation frontier weights.
