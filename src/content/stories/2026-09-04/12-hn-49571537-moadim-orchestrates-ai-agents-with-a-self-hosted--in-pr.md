---
title: Moadim orchestrates AI agents with a self-hosted, in-process loop scheduler
source: hn
url: https://moadim.io/
date: '2026-09-04'
tags:
- ai-agents
- catchup
- hn
- loop-engineering
- moadim
- open-source
- scheduler
- self-hosted
- tmux
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49571537'
comments: https://news.ycombinator.com/item?id=49571537
why_read: This text introduces Moadim, an open-source tool that enables 'loop engineering'
  for AI agents using a local, in-process scheduler. Readers will learn how Moadim
  runs agents in isolated sessions without cloud dependencies, managing their execution
  and restarts.
authors:
- tupe12334
---

Building reliable AI agents requires more than just a smart LLM; you need robust orchestration. Moadim.io is an open-source, self-hosted agent scheduler that tackles this challenge head-on by putting your agents on a loop.

It features isolated execution for each agent via tmux, ensuring that hung runs are killed and sessions are properly reaped. With a portable in-process scheduler, REST and MCP interfaces, and integration with `launchd`/`systemd`, Moadim provides a practical framework for running agents locally and ensuring they survive reboots.

If you are serious about deploying persistent AI agents, this tool offers a highly actionable blueprint for managing their lifecycle and execution. It moves beyond simple prompt execution to true agent system infrastructure.
