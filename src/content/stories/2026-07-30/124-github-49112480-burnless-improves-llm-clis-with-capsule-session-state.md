---
authors:
- Rudekwydra
comments: https://news.ycombinator.com/item?id=49112480
date: '2026-07-30'
depth_score: 8
hn_id: '49112480'
image: /infographics/124-github-49112480-burnless-improves-llm-clis-with-capsule-session-state.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- caching
- catchup
- github
- llm-clis
- memory-management
- performance-optimization
- session-state
title: Burnless improves LLM CLIs with capsule session state
url: https://github.com/Rudekwydra/burnless
utility_score: 9
why_read: Read this to learn how 'Burnless' significantly improves LLM CLI performance
  and efficiency by leveraging capsule session state and rolling memory to avoid full
  transcript replay.
---

Building efficient LLM-powered applications often hits a wall with context management and token costs. Many approaches just re-send entire transcripts, leading to ballooning expenses and performance issues. This is not sustainable for complex agents. 

Burnless introduces an LLM orchestration layer that makes context a *protocol*. It is not just about caching, but about architecting 'capsule-based session state' and 'prefix-cache reuse' to provide relevant context efficiently. This design yields token savings as a natural outcome, rather than being the primary goal, with reported reductions of over 90 percent versus no-cache scenarios. 

This project offers a robust framework for building more stateful, performant, and cost-effective AI agents and CLIs. You will learn how to move beyond basic prompt engineering to fundamentally improve how your LLM applications handle memory and state across turns. It represents a significant architectural step forward for LLM context management.