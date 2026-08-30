---
title: KHMS a file-based long-term memory for LLM agents
source: github
url: https://github.com/kostey/khms-memory
date: '2026-08-28'
tags:
- catchup
- git-repository
- github
- immutable-cards
- khms
- llm-agents
- long-term-memory
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49478170'
comments: https://news.ycombinator.com/item?id=49478170
why_read: Understand a practical, file-based long-term memory system for LLM agents.
  Learn about its core design principles, including immutable knowledge cards and
  a robust governance pipeline.
authors:
- kostey
---

Building effective long-term memory for LLM agents is one of the toughest challenges in agentic AI. Most solutions rely on vector databases, but what if you could use something simpler and more auditable?

Introducing KHMS, a "know-how management system" that leverages plain markdown files in a Git repository. Each piece of knowledge is an immutable card with YAML frontmatter, allowing corrections through new, superseding cards rather than edits.

This system includes a hook-driven recall mechanism to push relevant cards into the agent's session and a propose-review-approve pipeline for human oversight. It is an agent's self-installable, auditable memory that operates like a personal knowledge base.

This innovative, production-tested design offers a highly practical and transparent approach to agent memory, enhancing reliability and control.
