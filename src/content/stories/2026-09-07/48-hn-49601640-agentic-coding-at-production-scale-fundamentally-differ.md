---
authors:
- maknee
comments: https://news.ycombinator.com/item?id=49601640
date: '2026-09-07'
depth_score: 8
hn_id: '49601640'
image: /infographics/48-hn-49601640.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agentic-coding
- catchup
- github-copilot
- hn
- llm-serving
- production-scale
- resource-management
- stateful-systems
title: Agentic Coding at Production Scale Fundamentally Differs from Chatbots
url: https://kstark007.github.io/blog/agentic-coding-in-the-wild/
utility_score: 8
why_read: This text characterizes GitHub Copilot's agentic coding at production scale
  and explains how it fundamentally differs from conventional LLM chatbot workloads
  in terms of interaction, state, and resource usage. Readers will learn about the
  operational complexities and challenges unique to agentic AI systems.
---

Agentic coding in the wild looks nothing like typical stateless LLM inference. Production telemetry from GitHub Copilot reveals an astonishing workload pattern where a single user interaction can trigger dozens of chained LLM and tool calls, persisting state across minutes-long sessions.

This breaks assumptions made by current LLM serving systems, which are optimized for short, independent requests. The study shows prompt prefixes grow monotonically, resource patterns alternate between GPU and CPU/IO, and dependencies are tight and sequential.

If you are building LLM infrastructure or agentic systems, this is crucial: it shows we need entirely new architectures for scheduling, caching, and resource management to support agentic workloads efficiently and effectively.