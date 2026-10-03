---
title: Infinite scroll terminal multiplexer orchestrating agents for macOS
source: github
url: https://github.com/hongnoul/gwae
date: '2026-09-23'
tags:
- agent-orchestrator
- catchup
- github
- infinite-scroll
- macos
- osc-133
- terminal-multiplexer
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49813028'
comments: https://news.ycombinator.com/item?id=49813028
why_read: Explore a terminal multiplexer designed specifically to orchestrate and
  monitor multi-pane agent workflows on macOS with live status tracking.
authors:
- hongnoul
---

Running multiple local AI coding agents simultaneously quickly turns standard terminal windows into an unmanageable mess. Standard multiplexers like tmux work well for human workflows, but they lack awareness of agent execution states.

Gwae introduces an infinite-scroll terminal multiplexer and agent orchestrator designed specifically for autonomous agent fleets. Built on top of standard OSC 133 semantic shell escapes, it provides a heads-up minimap that highlights Running, Idle, and Failed agent processes.

The tool includes keyboard shortcuts to jump straight to idle panes with failed runs prioritized, alongside directory-spawning pickers and swappable agent harnesses. This setup reduces the cognitive friction of context switching across parallel automated tasks.

Treating agent terminals as managed processes rather than passive shells makes large multi-agent local workflows significantly easier to supervise.
