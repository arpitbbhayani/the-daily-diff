---
title: Files Over Tools Building Knock Agent with a Virtual File System
source: hn
url: https://knock.app/blog/how-we-built-the-knock-agent-virtual-filesystem-and-bash
date: '2026-07-09'
tags:
- ai-agent
- bash
- catchup
- files-over-tools
- hn
- management-api
- tool-per-type-pattern
- virtual-file-system
score: 31
hn_id: '48845364'
comments: https://news.ycombinator.com/item?id=48845364
why_read: This post details the architectural choices behind the Knock AI Agent, explaining
  why a "files over tools" approach using bash and a virtual file system proved more
  scalable than a traditional "tool-per-type" pattern.
authors:
- cjbell
author: cjbell
---

When building complex AI agents, traditional "tool-per-type" patterns often hit a scalability wall. Knock.app shares a compelling alternative: "files over tools."

Their AI agent, designed for customer messaging, was built using a virtual file system and bash. This architectural choice simplified context management, allowing the agent to reason over a rich, human-readable data landscape.

Instead of defining explicit tools for every API primitive, the agent interacts with files that represent workflows, templates, and audiences. This approach drastically reduces the complexity of agent harness development and improves its reasoning capabilities.

This is a powerful case study in designing scalable and maintainable AI agent systems, offering a fresh perspective on agentic architecture.
