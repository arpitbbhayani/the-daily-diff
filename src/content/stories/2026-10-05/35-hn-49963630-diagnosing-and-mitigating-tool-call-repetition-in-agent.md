---
title: Diagnosing and mitigating tool-call repetition in agentic models
source: hn
url: https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition
date: '2026-10-05'
tags:
- agentic-systems
- catchup
- hn
- reinforcement-learning
- tool-call-repetition
- tool-use
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49963630'
comments: https://news.ycombinator.com/item?id=49963630
why_read: Learn why reinforcement learning models fall into repetitive tool-calling
  loops and how to analyze agent failure modes.
authors:
- truth_seeker
---

Optimizing agentic LLMs purely for correctness creates a subtle reinforcement learning blind spot where models fall into infinite tool-repetition loops.

During evaluation across harnesses such as OpenCode and MiMo Desktop, models frequently issue semantically identical tool invocations without making forward progress. In benchmark setups, repetition rates exceeded one percent in smaller models when RL reward signals rewarded final output accuracy while ignoring execution efficiency.

To fix this, teams must decouple parallel tool invocation from redundant execution loops. When reward functions penalize unnecessary round-trips without crippling multi-query exploration, agents remain efficient under complex tasks.

Optimizing for task completion alone will eventually teach your agents to burn tokens pointlessly.
