---
authors:
- Eldodi
comments: https://news.ycombinator.com/item?id=49088058
date: '2026-07-28'
depth_score: 8
hn_id: '49088058'
image: /infographics/21-hn-49088058.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- agentic-workflows
- caching
- catchup
- header-based-routing
- hn
- model-context-protocol
- multi-round-trip-requests
- reliability
- request-response
- scalability
- stateless-protocol
title: Model Context Protocol moves to stateless core for scalability
url: https://blog.modelcontextprotocol.io/posts/2026-07-28/
utility_score: 8
why_read: This announcement details the new 2026-07-28 Model Context Protocol specification,
  highlighting its transformation to a stateless core for improved reliability and
  scalability. Readers will learn about new features such as Multi Round-Trip Requests
  (MRTR), header-based routing, and cacheable list results.
---

Building scalable AI agents is notoriously hard, often bottlenecked by underlying communication protocols. The Model Context Protocol (MCP) just released a major update, shifting from a stateful, bidirectional design to a purely stateless request/response core.

This move dramatically improves reliability and scalability. Think header-based routing, where any request can land on any instance behind a plain round-robin load balancer. Server-to-client interactions, like sampling or elicitation, are now handled by Multi Round-Trip Requests, completely removing the need for persistently open bidirectional streams.

This is a masterclass in applying distributed system principles to the unique challenges of agentic AI. It provides concrete examples of how careful protocol design can unlock significant performance and architectural robustness for your LLM infrastructure.