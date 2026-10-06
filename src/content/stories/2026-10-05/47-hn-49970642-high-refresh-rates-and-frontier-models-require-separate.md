---
title: High refresh rates and frontier models require separate cognitive clocks
source: hn
url: https://thebeach.dev/posts/thinking-fast-and-slow/
date: '2026-10-05'
tags:
- agent-architecture
- ai-agents
- catchup
- continuous-cognition
- frontier-models
- hn
- system-1-and-system-2
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49970642'
comments: https://news.ycombinator.com/item?id=49970642
why_read: This piece explains why frontier language models cannot handle high-frequency
  continuous perception and argues for architecting AI agents around fast and slow
  dual-system clocks.
authors:
- jamiebeach
---

Most AI agent architectures are built around a request-response loop that assumes cognition happens in discrete, low-frequency bursts. That paradigm breaks down when building agents that must continuously process real-time audio, video, or operating system state.

Frontier language models are structurally and economically ill-suited to participate in high-refresh-rate perception loops. Polling a frontier model every second wastes tokens and degrades responsiveness. Drawing inspiration from robotics and cognitive science, agent systems need a strict architectural split between System 1 and System 2.

System 1 operates on a fast clock, using small local models or deterministic heuristics to filter continuous background noise and handle rapid reactive tasks. System 2 remains idle until System 1 detects an anomaly or an explicit goal, waking the expensive reasoning model only for deep deliberation.

Decoupling high-frequency perception from low-frequency reasoning is essential for viable continuous autonomous agents.
