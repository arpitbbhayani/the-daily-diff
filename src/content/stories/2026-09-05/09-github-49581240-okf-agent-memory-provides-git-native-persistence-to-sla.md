---
title: OKF Agent Memory provides Git-native persistence to slash AI token bloat
source: github
url: https://github.com/okf-memory/okf-agent-memory
date: '2026-09-05'
tags:
- ai-agents
- catchup
- git-native
- github
- okf-v0.2
- persistent-memory
- token-bloat
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49581240'
comments: https://news.ycombinator.com/item?id=49581240
why_read: Read this to learn about a Git-native persistent memory solution for AI
  agents. It details how the Open Knowledge Format (OKF) v0.2 can drastically reduce
  token bloat and enable durable context for AI models.
authors:
- okf_memory
---

The biggest headache with AI agents is often their lack of persistent memory and ever-growing context windows. This new OKF Agent Memory project offers a refreshingly practical, Git-native solution to this problem, designed specifically for AI coding agents.

It implements Google's Open Knowledge Format (OKF) v0.2, storing agent knowledge as plain Markdown files in your repository. This approach provides sub-300µs in-memory BM25 search, slashes token bloat by 80 percent, and does so with zero external databases or dependencies.

This is a game-changer for building robust, long-running AI agents. It bridges the gap between ad-hoc notes and complex vector databases, providing a clear, transparent, and version-controlled memory layer that every senior engineer working with agents should explore.
