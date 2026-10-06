---
title: Building fast cheap browser agents using typed classification models
source: hn
url: https://ironbee.ai/blog/how-we-built-the-fastest-cheapest-browser-agent-with-jev
date: '2026-10-05'
tags:
- browser-agents
- catchup
- classification-models
- hn
- system-testing
- web-automation
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49965022'
comments: https://news.ycombinator.com/item?id=49965022
why_read: Learn how replacing full LLMs with fast typed classification models dramatically
  reduces latency and cost in browser automation. It demonstrates how to achieve accurate
  decision-making and automated error detection without hand-coded assertions.
authors:
- sozal
---

Most developers default to using multi-modal LLMs for browser automation, but running generative loops on full screenshots introduces high latency and brittle failure modes. A standard checkout flow can take dozens of seconds and cost cents per run.

Replacing the generative model with a typed classifier that chooses actions from structured DOM state changes the equation entirely. In a production checkout test, an agent executed nine discrete actions in 6.7 seconds while costing just $0.00054 in model compute.

The key architectural shift is constraining the agent to choose between candidate discrete actions and emit confidence probabilities at 300 millisecond latencies. It does not generate text or process heavy image tokens during the hot loop.

Generative LLMs excel at planning and ambiguous recovery, but high-throughput web automation belongs in structured classification engines.
