---
title: Repository indexing fails for AI coding because it's an investigation
source: hn
url: https://thegit.ai/blog/why-we-abandoned-repository-indexing
date: '2026-08-28'
tags:
- ai-coding-tools
- catchup
- context-discovery
- hn
- repository-indexing
- semantic-retrieval
- software-investigation
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49476449'
comments: https://news.ycombinator.com/item?id=49476449
why_read: Read this to understand why pre-indexed repository maps are insufficient
  for AI coding tools. You will learn that effective AI code assistance requires on-the-fly
  investigation and discovery, not just one-shot retrieval.
authors:
- waximabbax
---

Repository indexing, a common technique for AI coding agents, might actually be doing more harm than good. The team at TheGitAI discovered that trying to pre-build a "perfect map" of a codebase often leads to agents getting bogged down with irrelevant information.

Instead of static indexing, their agent now uses a dynamic discovery approach. It searches, reads, runs code, and observes outputs as it works, mimicking how a human engineer debugs. This "investigation" model provides context as needed, making the agent far more effective.

This insight highlights that semantic similarity in retrieval does not always equate to true relevance for a task. It is a powerful reminder that more data is not always better; smarter data acquisition is key.

Rethink your agent's context strategy and let it discover the clues.
