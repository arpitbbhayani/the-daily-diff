---
title: A local-first provider-neutral AI agent platform in Go
source: github
url: https://github.com/chetto1983/Aura
date: '2026-10-08'
tags:
- catchup
- github
- go-agent
- mcp-tools
- self-hosted
- temporal-graph-memory
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50010250'
comments: https://news.ycombinator.com/item?id=50010250
why_read: Read this to explore the architecture of a self-hosted AI agent platform
  featuring temporal graph memory and tool integration.
authors:
- chetto1983
image: /infographics/08-github-50010250.jpg
---

Most AI agent frameworks are written in Python and treat memory as a flat vector search over past messages. That approach falls apart when an agent needs to maintain multi-user state over long time horizons, handle scheduled background tasks, and integrate structured tools cleanly.

Aura takes a systems approach by implementing an agent runtime entirely in Go, structuring user memory as a temporal knowledge graph rather than an unstructured vector dump. This allows the agent to maintain distinct contextual boundaries for individual users while preserving temporal relationships between facts over time.

The project ships as a complete self-hosted appliance with native support for the Model Context Protocol (MCP), scheduled tasks, and multi-channel messaging interfaces like Telegram. Running the core engine in Go provides a light operational footprint and deterministic concurrency compared to standard interpreter-based frameworks.

Separating temporal memory models from ephemeral conversational state is a design pattern every engineer building persistent agentic backends should study.
