---
title: Sub-agents Architecture for Autofix Agents Is Wrong
source: hn
url: https://polylane.com/blog/sub-agents-are-just-wrong/
date: '2026-09-15'
tags:
- agent-orchestration
- autofix-agent
- catchup
- hn
- issue-resolution
- polylane
- sub-agents
- system-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49715388'
comments: https://news.ycombinator.com/item?id=49715388
why_read: This text details Polylane's transition from a multi-sub-agent architecture
  to a single-agent system for automated issue resolution. Readers will learn the
  challenges and inefficiencies of complex agent orchestration and the benefits of
  a simpler, unified approach.
authors:
- momojo
---

The conventional wisdom for building LLM agents often points towards sub-agents and complex orchestration. However, one team discovered that this popular approach was 'just wrong' for their production autofix agent, leading to high costs and reasoning difficulties.

They found that consolidating multiple sub-agents into a single, more capable agent drastically cut down token usage and simplified the entire workflow. This challenges the notion that breaking problems into smaller agentic tasks is always optimal; sometimes, a more holistic prompt and a larger context window for one agent is superior.

This is a crucial insight for anyone designing or scaling agentic AI systems. Do not blindly adopt multi-agent frameworks; focus on effective context engineering and evaluate if a single, powerful agent can outperform a complex ensemble.
