---
title: AI Agents Successfully Decompile Modern Warfare 2 Source Code
source: hn
url: https://momo5502.com/posts/2026-08-17-mw2-decompilation/
date: '2026-08-25'
tags:
- ai-agents
- catchup
- claude-ai
- code-decompilation
- hn
- multi-agent-systems
- reverse-engineering
- software-engineering
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49431593'
comments: https://news.ycombinator.com/item?id=49431593
why_read: 'This post details an ambitious project where AI agents autonomously decompiled
  a significant portion of Call of Duty: Modern Warfare 2. Readers will learn about
  the practical application of multi-agent AI systems for complex reverse engineering
  tasks and their operational setup.'
authors:
- Maurice
---

Imagine AI agents tackling a problem as complex as decompiling a video game. This project successfully used a swarm of Claude Max agents to reverse engineer Call of Duty: Modern Warfare 2 (2009) into C++, achieving 34 percent of functions decompiled across 7,000 commits in a month.

The setup is a masterclass in agent orchestration: three worker agents commit to a shared branch, an overseer agent reviews every push, and they communicate via Discord. Crucially, they interact with professional tools like Ghidra and IDA Pro.

This demonstrates not just the potential of AI in specialized engineering tasks, but also practical patterns for designing robust, collaborative multi-agent systems that go beyond simple chat interactions.
