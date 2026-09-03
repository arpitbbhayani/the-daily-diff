---
title: Mac daemon orchestrates multi-agent iOS simulator fleets with deterministic
  state
source: github
url: https://github.com/BariBariGood/manzanas
date: '2026-09-01'
tags:
- catchup
- deterministic-state
- fleet-orchestration
- github
- ios-simulator
- leases
- mac-daemon
- multi-agent
- run-journal
- warm-pools
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49521405'
comments: https://news.ycombinator.com/item?id=49521405
why_read: Read this to understand how a Mac daemon called 'manzanas' orchestrates
  multi-agent iOS simulator fleets, enabling deterministic state, efficient resource
  sharing via leases, and detailed run journals for AI agents and humans.
authors:
- BariBariGood
---

Testing AI coding agents, especially for platforms like iOS, faces a huge hurdle: providing isolated and consistent environments. Manzanas offers a game-changing solution as a Mac daemon orchestrating fleets of iOS simulators, specifically designed for multi-agent workflows.

This project introduces critical concepts like simulator leasing, warm pools for rapid startup, and deterministic state management, which are essential for reliable and reproducible agent testing. It solves the resource contention problem when multiple agents need to interact with a simulated environment simultaneously.

For anyone building or scaling AI agents that need to operate on client platforms, this infrastructure addresses a fundamental bottleneck. It drastically improves developer productivity by streamlining the testing and deployment lifecycle for agentic applications.
