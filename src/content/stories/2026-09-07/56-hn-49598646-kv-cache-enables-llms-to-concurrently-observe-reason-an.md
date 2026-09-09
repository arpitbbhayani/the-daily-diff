---
title: KV cache enables LLMs to concurrently observe reason and act
source: hn
url: https://research.yandex.com/blog/the-kv-cache-as-an-agent-runtime
date: '2026-09-07'
tags:
- agent-runtime
- catchup
- concurrent-processing
- hn
- inference-time
- interactivity
- kv-cache
- llms
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49598646'
comments: https://news.ycombinator.com/item?id=49598646
why_read: This text explains how manipulating the KV cache allows pretrained LLMs
  to achieve concurrent observation, reasoning, and action without additional training.
  Readers will understand a novel approach to building more interactive AI systems.
authors:
- aaraujo002
---

One of the major hurdles for truly interactive AI agents is making LLMs observe, reason, and act concurrently without constant restarts or massive retraining. This research proposes a groundbreaking solution: using the KV cache itself as an agent runtime.

By carefully sharing and scheduling KV-cache states, pretrained LLMs can maintain context, revise trajectories, and emit partial actions as new information arrives. This enables real-time interaction in dynamic environments like games or robots.

This approach avoids changing model weights or complex post-training, presenting a highly practical and novel path to building more responsive and intelligent agentic systems. It is a paradigm shift for LLM infrastructure.
