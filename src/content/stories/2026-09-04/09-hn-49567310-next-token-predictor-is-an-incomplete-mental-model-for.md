---
title: Next-token predictor is an incomplete mental model for LLMs
source: hn
url: https://gmcgoldr.github.io/2026/09/04/llm-next-token-predictors.html
date: '2026-09-04'
tags:
- catchup
- hn
- llms
- mental-model
- next-token-predictor
- post-training
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49567310'
comments: https://news.ycombinator.com/item?id=49567310
why_read: This post clarifies why viewing LLMs solely as next-token predictors is
  an incomplete mental model. Readers will learn about the role of post-training and
  RLVR in shaping modern LLM behavior.
authors:
- Garrin
---

Thinking of LLMs as mere "next-token predictors" is a fundamental error, especially when building serious AI agents. While technically true during inference, this model profoundly misunderstands how these systems actually learn and operate after reinforcement learning with verifiable rewards (RLVR).

Pre-training teaches pattern completion, but RLVR shifts the paradigm. Models learn to achieve specific, goal-oriented outcomes, not just statistically likely sequences. This means they are optimizing for a desired end-state, implying a level of "understanding" far beyond simple prediction.

For any senior engineer working with applied AI or designing agentic systems, grasping this distinction is critical. It informs everything from prompt engineering to system architecture, allowing you to leverage LLMs more effectively by recognizing their true operational complexity.
