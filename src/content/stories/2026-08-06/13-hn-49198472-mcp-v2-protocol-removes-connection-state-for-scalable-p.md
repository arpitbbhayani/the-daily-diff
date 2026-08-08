---
title: MCP v2 protocol removes connection state for scalable production servers
source: hn
url: https://manufact.com/blog/mcp-use-v2
date: '2026-08-06'
tags:
- catchup
- distributed-systems
- hn
- mcp-protocol
- production-scalability
- protocol-evolution
- stateless-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49198472'
comments: https://news.ycombinator.com/item?id=49198472
why_read: This article explains the critical architectural shift in the MCP protocol
  to a stateless design. Readers will learn how this change addresses scalability
  issues in production environments and improves remote server deployment.
authors:
- Enrico Toniato
---

A major protocol redesign is reshaping how AI agents communicate with systems like ChatGPT Apps and Claude Connectors. The new 2026-07-28 Multi-Client Protocol (MCP) specification moves to a completely stateless model, discarding the old `initialize` handshake and `Mcp-Session-Id`.

This fundamental change means any request can now reach any server instance, drastically simplifying distributed system design for AI agent interactions and enhancing scalability. The article breaks down why the previous stateful approach became a bottleneck in production environments.

This is a critical development for anyone building or integrating AI agents, offering insights into building more robust and horizontally scalable AI infrastructure. Understanding this shift is essential for future-proofing your agentic systems.
