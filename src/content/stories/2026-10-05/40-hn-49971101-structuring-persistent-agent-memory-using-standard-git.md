---
title: Structuring persistent agent memory using standard Git repositories
source: hn
url: https://cognition.com/agent-memory-repo
date: '2026-10-05'
tags:
- agent-memory
- agent-swarms
- catchup
- context-management
- dreaming-agent
- git
- hn
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49971101'
comments: https://news.ycombinator.com/item?id=49971101
why_read: Learn how to maintain persistent AI agent memory across sessions and swarms
  using Git repositories. It explains how to organize note hierarchies and use background
  dreaming processes to synthesize knowledge.
authors:
- Cognition
---

Cognition shared their architecture for persistent AI agent memory, and the core idea is surprisingly simple: use standard Git repositories.

Instead of maintaining complex dynamic vector stores or proprietary graph databases, each agent operates on a cloned repository of Markdown files, SQL queries, and scripts. A minimal entry file loads on session boot with links to deeper context, while changes are committed and pushed after every tool execution.

To handle bloat and conflicting knowledge, a dedicated background agent called dreaming runs periodically. It inspects session histories, clusters recurring patterns into persistent memory, resolves contradictions, and prunes stale references.

Treating agent state as a version-controlled file tree solves synchronization across swarms while keeping audit trails completely human-readable.

Simple primitives often beat complex distributed database setups for long-term agent state.
