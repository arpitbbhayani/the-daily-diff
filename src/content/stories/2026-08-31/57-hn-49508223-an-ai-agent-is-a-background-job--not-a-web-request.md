---
authors:
- nitishagar
comments: https://news.ycombinator.com/item?id=49508223
date: '2026-08-31'
depth_score: 8
hn_id: '49508223'
image: /infographics/57-hn-49508223.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-agent
- background-jobs
- catchup
- hn
- web-requests
title: An AI agent is a background job, not a web request
url: https://nitishagar.medium.com/an-agent-is-a-job-not-an-api-7673b837bd11
utility_score: 9
why_read: This text provides a crucial distinction for understanding AI agents. Readers
  will learn how to conceptualize AI agents as background processes rather than synchronous
  web interactions, which is essential for proper system design.
---

An AI agent is a background job, not a web request. This seemingly simple statement reveals a profound architectural insight for anyone building production-grade AI systems. Treating agents like stateless API calls is a recipe for disaster.

The reality is that agents are inherently long-running, stateful processes that require resilience against failures, retries, and asynchronous execution. Thinking of them as background jobs that can manage their state, resume from checkpoints, and operate independently of immediate client connections unlocks far more robust and scalable designs.

This shift in perspective forces you to consider idempotency, message queues, and durable storage from the outset, leading to systems that are not just smarter, but truly reliable.

Build your agents like jobs, not just requests.