---
authors:
- mineev
comments: https://news.ycombinator.com/item?id=49115116
date: '2026-07-30'
depth_score: 8
hn_id: '49115116'
image: /infographics/120-hn-49115116-opentelemetry-traces-llm-agents-using-genai-semantic-co.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- distributed-tracing
- genai-semantic-conventions
- hn
- llm-agents
- observability
- open-telemetry
title: OpenTelemetry Traces LLM Agents Using GenAI Semantic Conventions
url: https://blog.triplecloud.tech/posts/instrument-llm-agent-opentelemetry
utility_score: 9
why_read: This guide demonstrates how to instrument LLM agents for tracing using OpenTelemetry's
  GenAI semantic conventions. Readers will learn to gain deep visibility into LLM
  operations like token usage and model calls, standardizing observability for their
  production LLM stacks.
---

Instrumenting LLM agents in production often feels like wrestling a black box. Traditional tracing shows a slow HTTP request, but it reveals nothing about which model was called, token counts, or tool interactions. This is a critical gap for debugging and cost management.

This guide shows how OpenTelemetry, using the new GenAI semantic conventions, standardizes LLM operations. You can auto-instrument or add manual spans to track models, token usage, costs, and multi-turn conversations, making LLM agents first-class citizens in your observability stack.

The real power comes from the industry-wide adoption of these conventions by major vendors. Instrument once, and your data remains vendor-agnostic and truly yours, providing unparalleled visibility into your applied AI systems.