---
title: AI agents remember project conventions with simple Markdown
source: hn
url: https://laravel.com/blog/semantic-memory-or-just-markdown
date: '2026-09-05'
tags:
- ai-coding-agents
- catchup
- context-management
- hn
- laravel
- markdown
- project-conventions
- semantic-search
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49573675'
comments: https://news.ycombinator.com/item?id=49573675
why_read: Learn why AI coding agents struggle with implicit project conventions and
  discover a surprisingly simple, markdown-based solution for durable memory.
authors:
- pushpak1300
---

Most agent frameworks fail not because the underlying model is weak, but because the harness feeds it the wrong context at the wrong time. A team running production coding agents found that trimming tool output to the last 200 lines cut token usage by 40 percent and, surprisingly, improved task success rate.

The agent was not getting smarter with more context, it was getting distracted by it. This mirrors a lesson every senior engineer already knows from logging: more data does not mean better signal.

The fix here was not a bigger model, it was better context engineering. This pragmatic approach to providing project-specific conventions to agents via structured markdown, rather than complex semantic search, is a highly actionable insight for improving developer productivity with AI.
