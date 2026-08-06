---
title: TormentNexus an AI control plane for LLM agents
source: hn
url: https://tormentnexus.site
date: '2026-08-04'
tags:
- ai-control-plane
- catchup
- code-execution
- hn
- infinite-memory
- llm-agents
- multi-agent-system
- self-hosted
- tool-orchestration
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49173549'
comments: https://news.ycombinator.com/item?id=49173549
why_read: This text introduces TormentNexus, an open-source AI control plane that
  provides infinite memory, tool orchestration, and autonomous code execution for
  LLM agents running locally. Readers will learn about its key features and capabilities
  for managing AI agents.
authors:
- TormentNexusAI
---

Building production-grade AI agents requires more than just calling an API; it needs a robust control plane. TormentNexus is an open-source, local-first Go project that gives your LLM agents infinite persistent memory and sophisticated tool orchestration.

It features a 4-layer MCP tool router that leverages semantic search and BM25 ranking for optimal tool selection, significantly improving context efficiency. This means your agents are not drowning in unnecessary schema data.

The system supports multi-agent swarms with Planner/Implementer/Tester/Critic roles and provides full filesystem access and browser automation. This is a powerful, practical blueprint for scaling out advanced agentic capabilities.
