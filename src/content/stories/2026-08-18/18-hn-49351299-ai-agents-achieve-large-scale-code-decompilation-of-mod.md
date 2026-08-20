---
title: AI agents achieve large-scale code decompilation of Modern Warfare 2
source: hn
url: https://momo5502.com/posts/2026-08-17-mw2-decompilation/
date: '2026-08-18'
tags:
- ai-agents
- call-of-duty
- catchup
- claude-max
- decompilation
- distributed-systems
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49351299'
comments: https://news.ycombinator.com/item?id=49351299
why_read: This article provides a fascinating case study of large-scale AI agent deployment
  for complex software engineering. Readers will learn how multiple AI agents can
  be orchestrated to collaboratively decompile a game, detailing the setup and initial
  progress.
authors:
- Maurice
---

Ever wondered what happens when you let AI agents loose on a massive reverse-engineering project? One engineer spent a month with a multi-agent system, powered by Claude Max, attempting to decompile Call of Duty: Modern Warfare 2 (2009).

The setup involved three worker agents tackling different subsystems, overseen by an additional agent reviewing every commit. Communication flowed through Discord, task management via GitHub issues, and CI failures were broadcast back to the agents, creating a sophisticated autonomous engineering loop.

After 200 billion tokens and 7,000 commits, they decompiled about 34 percent of the game's functions, a testament to the potential of orchestrating LLM agents for highly complex and persistent software engineering challenges. This showcases a truly novel application of agentic AI in a practical setting.
