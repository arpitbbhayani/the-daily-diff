---
authors:
- mfiguiere
comments: https://news.ycombinator.com/item?id=49087737
date: '2026-07-28'
depth_score: 8
hn_id: '49087737'
image: /infographics/31-hn-49087737.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- api-extensions
- authorization
- catchup
- edge-infrastructure
- hn
- mcp
- protocol-design
- serverless
- stateless-core
title: MCP 2026-07-28 features a stateless core and hardened authorization
url: https://claude.com/blog/bringing-mcp-2026-07-28-to-claude
utility_score: 8
why_read: Read this to understand how the latest Model Context Protocol update introduces
  a stateless core, standardized extensions, and enhanced authorization. It explains
  how these changes improve scalability, flexibility, and security for AI agent integration.
---

Anthropic just shipped a major update to its Model Context Protocol (MCP), moving it to a stateless core. This is not just a version bump; it is a fundamental architectural shift that drastically simplifies how AI agents connect to applications and scales their usage.

The move from a bidirectional stateful protocol to a pure request/response model enables deployment on serverless and edge infrastructure, significantly improving scalability and operational simplicity for engineers building with AI agents. They are also standardizing extensions and hardening OAuth 2.0/OIDC authorization, making enterprise integrations far more robust.

For anyone building or designing LLM infrastructure, understanding these shifts in agent-application protocols is crucial. This is about building reliable, performant, and secure AI agent systems at scale, addressing real-world integration challenges head-on.