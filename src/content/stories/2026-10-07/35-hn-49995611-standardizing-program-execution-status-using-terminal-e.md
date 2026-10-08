---
title: Standardizing program execution status using terminal escape sequences
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
hn_id: '49995611'
comments: https://news.ycombinator.com/item?id=49995611
why_read: Read this to understand why traditional terminal notification mechanisms
  fall short and how the proposed OSC 7501 protocol allows long-running programs to
  signal execution status natively.
authors:
- Mitchell Hashimoto
---

Terminal emulators have historically relied on crude heuristics like process polling or stdout silence to guess whether a long-running command has finished.

Mitchell Hashimoto has proposed OSC 7501, a standardized terminal escape sequence that lets programs explicitly announce their operational state. Under this protocol, commands like Terraform or autonomous coding agents can send a structured escape sequence declaring whether they are working, idle, failed, or blocked waiting for permissions.

This design cleanly decouples execution from user presentation. Instead of fragile regex parsing or relying on desktop notification hooks, the terminal can natively display status indicators, sound alerts, or route interaction requests into a structured queue.

Standardizing state signaling at the terminal protocol layer removes guesswork for developer tooling and background agent runners.
