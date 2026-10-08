---
title: A new escape sequence lets programs report execution status
source: hn
url: https://mitchellh.com/writing/program-status-osc7501
date: '2026-10-07'
tags:
- catchup
- escape-sequences
- hn
- osc-7501
- process-monitoring
- terminal-emulators
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49988763'
comments: https://news.ycombinator.com/item?id=49988763
why_read: Read this to understand how the OSC 7501 specification enables CLI programs
  to natively report their execution state to terminals. It explains why current notification
  heuristics fall short and outlines a standardized protocol for long-running workflows.
authors:
- Mitchell Hashimoto
---

Terminals still struggle with a fundamental problem: they have no clean way of knowing whether a running command is working, idle, waiting for input, or broken. Developers regularly run long builds or coding agents, switch windows, and rely on hacky heuristics like silent output timers or window titles to guess status.

Mitchell Hashimoto proposed OSC 7501, a dedicated terminal escape sequence protocol that standardizes program state reporting. Through a lightweight payload, CLI tools can directly inform the host terminal about their execution phase, notifications, and blockers. A tool like Terraform or an autonomous coding agent can emit an escape sequence declaring that it is blocked waiting for user confirmation alongside the exact prompt message.

This mechanism replaces fragile process polling with a deterministic communication channel. Terminals can translate these signals into system notifications, status icons, or automated workflows without touching standard input or output streams.

Fixing the interface between command line tools and terminal emulators is long overdue.
