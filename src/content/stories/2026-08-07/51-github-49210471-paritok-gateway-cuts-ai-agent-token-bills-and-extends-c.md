---
title: Paritok gateway cuts AI agent token bills and extends context
source: github
url: https://github.com/Paritok-official/paritok-4b-v1
date: '2026-08-07'
tags:
- ai-coding-agents
- catchup
- context-window-extension
- github
- llm-proxy
- non-destructive-compression
- token-cost-reduction
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49210471'
comments: https://news.ycombinator.com/item?id=49210471
why_read: This describes Paritok, a non-destructive compression gateway that reduces
  AI agent token costs and extends context windows, enabling more turns in sessions.
  It's a drop-in solution for various agents.
authors:
- Jasssss
---

Is your AI coding agent getting expensive and losing context in long sessions? You are not alone. A new open-source project, Paritok, offers a non-destructive compression gateway that tackles this problem directly.

This gateway sits between your agent and the LLM, intelligently stripping schema bloat, compressing tool results and file reads, and summarizing stale history. The impact is significant: it cuts token bills by 25 percent on turn one and up to 85 percent in longer sessions, allowing roughly three times more turns within the same context window.

This is a game-changer for agent developers. It is a drop-in solution for popular agents like Claude Code, Cursor, and OpenHands, proving that smarter context management can dramatically improve both cost-efficiency and agent intelligence.
