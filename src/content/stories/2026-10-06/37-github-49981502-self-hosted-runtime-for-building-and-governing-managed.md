---
title: Self-hosted runtime for building and governing managed agents
source: github
url: https://github.com/orca-ae/orca-agent-engine
date: '2026-10-06'
tags:
- agent-runtime
- anthropic-api
- catchup
- github
- managed-agents
- self-hosted-ai
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49981502'
comments: https://news.ycombinator.com/item?id=49981502
why_read: Learn how to self-host an Anthropic-compatible managed agent runtime within
  your own infrastructure. It details the architecture for handling agents, sessions,
  streaming events, and secure credential storage.
authors:
- sijieg
---

Running agent harnesses against managed cloud APIs often forces a tough choice between developer ergonomics and infrastructure control. Handing over sensitive credentials, session state, and persistent memory to proprietary backends introduces significant compliance and governance headaches.

Orca Agent Engine offers a clean alternative by providing an open source, self-hosted control plane compatible with Anthropic managed agents specification. It implements the necessary REST and SSE primitives so standard client SDKs work seamlessly just by swapping the target base URL.

By decoupling the agent registry, session orchestration, and execution environments into modular self-hosted services, teams can run isolated agent workloads directly on their own private infrastructure.

This architecture lets backend teams enforce strict credential isolation and state auditability without rewriting their core orchestration code.
