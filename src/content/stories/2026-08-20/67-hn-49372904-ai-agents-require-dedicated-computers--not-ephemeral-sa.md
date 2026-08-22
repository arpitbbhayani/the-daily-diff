---
title: AI agents require dedicated computers, not ephemeral sandboxes
source: hn
url: https://fly.io/computers-compared/
date: '2026-08-20'
tags:
- agent-infrastructure
- ai-agents
- catchup
- ephemeral-environments
- fly-io
- hn
- platform-comparison
- sandboxing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49372904'
comments: https://news.ycombinator.com/item?id=49372904
why_read: This post explains why dedicated computers are necessary for AI agents,
  contrasting Fly.io's perspective with other industry approaches. Readers will learn
  the essential requirements for an agent's computer and understand different engineering
  philosophies in this space.
authors:
- jacobwg
---

The foundational architecture for running AI agents is undergoing a critical shift. Fly.io argues forcefully against ephemeral, serverless sandboxes, advocating instead for "computers for agents" – persistent, addressable, and stateful environments.

This paradigm ensures agents can maintain state, keep files, and execute long-running processes reliably, just like traditional applications. This move is not just a marketing term; it is about providing the stability and capabilities agents genuinely require to be effective and autonomous.

Understanding these architectural trade-offs is paramount for anyone designing LLM infrastructure. Choosing the right execution environment can dramatically impact agent performance, cost, and ultimately, success.
