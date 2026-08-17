---
title: Autonomous software development with LLMs is improbable
source: hn
url: https://codemanship.wordpress.com/2026/08/12/ai-software-development-what-does-the-data-say/
date: '2026-08-15'
tags:
- agentic-ai
- attention-dilution
- catchup
- context-limits
- hn
- llms
- software-development
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49310392'
comments: https://news.ycombinator.com/item?id=49310392
why_read: This text offers a concise overview of significant limitations in using
  LLMs for autonomous software development, particularly regarding context size and
  the reliability of information processing. Readers will learn why truly autonomous
  LLM agents are currently considered science fiction.
authors:
- jesterpm
---

The hype around autonomous AI agents in software development often overshadows the stark realities of their current limitations. Data suggests that truly autonomous, long-horizon agentic software development using LLMs remains largely science fiction, far from practical implementation.

Crucially, the effective context limits of even frontier LLMs are orders of magnitude smaller than advertised. Engineers often face issues where model outputs become unreliable beyond a surprisingly limited context window, exacerbated by lossy "compression" mechanisms used by vendors.

LLMs struggle to distinguish between recent and outdated information, with inherent "dominant priors" from training sometimes overriding new context. Furthermore, "attention dilution" makes large contexts less effective, and even repository-level markdown files can introduce noise, degrading performance.

This critical analysis, backed by data, is essential for setting realistic expectations and effectively integrating LLMs into your engineering workflows.
