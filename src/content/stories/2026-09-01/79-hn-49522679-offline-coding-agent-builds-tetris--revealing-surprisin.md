---
title: Offline coding agent builds Tetris, revealing surprising failure modes
source: hn
url: https://littletheta.com/field-notes/seventy-minutes-of-nothing
date: '2026-09-01'
tags:
- catchup
- coding-agent
- failure-analysis
- hn
- llm-evaluation
- local-llm
- offline-ai
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49522679'
comments: https://news.ycombinator.com/item?id=49522679
why_read: This article details an experiment of building Tetris using an entirely
  offline coding agent, offering insights into unexpected failure modes beyond the
  LLM's intelligence and what actually happens when agents are disconnected from the
  cloud.
authors:
- Nick Hirras
---

Running coding agents locally promises autonomy, but a recent experiment building Tetris offline on an M1 Pro revealed a crucial insight: the biggest bottlenecks were not model intelligence, but context window management.

This detailed report shows that simply unplugging from the cloud exposes how often agents get derailed by hitting context limits. The actual 'expensive failures' had nothing to do with the model being dumb; it was about feeding it the right amount of information at the right time.

Engineers working with local LLMs and agents will find direct, actionable lessons on how to engineer more robust workflows. This is a must-read for anyone serious about deploying practical, self-hosted AI agents.
