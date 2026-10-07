---
title: ADHDev orchestrates distributed coding agents across git worktrees
source: github
url: https://github.com/vilmire/adhdev
date: '2026-10-06'
tags:
- ai-coding-agents
- catchup
- developer-tools
- git-worktrees
- github
- task-orchestration
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49978129'
comments: https://news.ycombinator.com/item?id=49978129
why_read: Learn how to coordinate and monitor multiple autonomous coding agents in
  isolated worktrees through a unified self-hosted dashboard.
authors:
- vilmire
---

Running autonomous AI coding agents in production quickly hits a bottleneck when multiple agents attempt to modify the same repository simultaneously. ADHDev tackles this coordination problem by decoupling task scheduling from local execution using an isolated worktree architecture.

Instead of letting agents write directly to shared branches, each background task executes in an independent git worktree. A centralized coordination pipeline runs verification test suites on completed tasks and handles rebasing onto main only when validations pass cleanly.

Treating AI coding agents as distributed background workers with strict CI gates is the key to scaling agentic development without merge conflicts.
