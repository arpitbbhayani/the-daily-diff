---
title: Accelerating LLMs as System One classifiers with tiered goals
source: hn
url: https://www.seangoedecke.com/two-techniques-for-working-with-system-one-models/
date: '2026-09-18'
tags:
- batching
- catchup
- classification
- hn
- llms
- system-one-models
- tiered-goals
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49755005'
comments: https://news.ycombinator.com/item?id=49755005
why_read: This article demonstrates how to transform any LLM into a fast System One
  classifier using batched, structured-output prompts. Readers will learn practical
  programming techniques like tiered goals and tournament choice sampling for building
  performant applications.
authors:
- tariqshams
---

Harnessing LLMs for rapid, complex decision-making in agentic systems often feels like a bottleneck. This article introduces a powerful concept: "System One" models, which are engineered to output structured decisions at speed rather than lengthy prose, dramatically accelerating agent performance.

The core idea involves batching multiple single-token output prompts, turning any LLM into a highly efficient classifier. For example, using this approach, Qwen3-8B was able to play Doom with significantly faster reactions and more frequent decisions compared to traditional tool-calling methods.

Two key techniques are highlighted for optimizing these systems: establishing "tiered goals" to break down complex tasks, and employing "tournament choice sampling" for more robust decision selection. These methods offer a blueprint for engineers aiming to build highly responsive AI agents.

This approach provides a pragmatic pathway to achieving impressive gains in agent responsiveness and control. If you are struggling with LLM latency in your agent designs, these techniques could fundamentally change your approach to prompt engineering and model interaction.

Make your agents think faster, not just longer.
