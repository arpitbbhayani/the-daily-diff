---
title: Capture Rails telemetry as one wide event per request
source: github
url: https://github.com/adammiribyan/wide_events
date: '2026-08-04'
tags:
- catchup
- github
- high-cardinality-events
- observability
- opentelometry
- rails-telemetry
- software-agents
- wide-events
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49168262'
comments: https://news.ycombinator.com/item?id=49168262
why_read: This text introduces Wide Events, a system for collecting comprehensive
  Rails telemetry as single, high-cardinality events per request. Readers will learn
  how this approach enables both human analysis and automated querying by software
  agents for robust production verification.
authors:
- adammiribyan
---

Observability for AI agents? A new Rails telemetry gem, Wide Events, introduces a fascinating paradigm shift: collecting granular, high-cardinality events per request directly into your own database, explicitly for agent consumption.

Imagine an AI agent instrumenting a new feature, deploying it, and then autonomously verifying its behavior in production by querying structured telemetry. This moves observability beyond human dashboards to programmatic verification, using tools like ClickHouse for efficient storage.

This is not just about logging; it is about building feedback loops where your AI systems can understand their own impact and identify issues. It is a critical step towards truly autonomous and verifiable agent deployments.
