---
title: Program status protocol standardizes state reporting across terminals
source: hn
url: https://mitchellh.com/writing/program-status-osc7501
date: '2026-10-06'
tags:
- catchup
- cli-tooling
- ghostty
- hn
- osc-7501
- program-status-protocol
- terminal-escape-sequences
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49984159'
comments: https://news.ycombinator.com/item?id=49984159
why_read: Learn why existing terminal notification heuristics fall short and how the
  OSC 7501 specification enables CLI programs and coding agents to communicate their
  execution state natively.
authors:
- Mitchell Hashimoto
image: /infographics/11-hn-49984159.jpg
---

Terminal emulators have relied on fragile heuristics like stdout silence detection or process tree polling to determine when a command finishes. Mitchell Hashimoto has proposed OSC 7501, an explicit terminal escape sequence designed to communicate exact program lifecycle status.

The protocol allows any CLI application or coding agent to emit formatted escape codes signaling whether it is active, idle, waiting for user input, or failing. For instance, a tool like Terraform or an agent runner can broadcast that it is blocked on user confirmation alongside base64-encoded context. The host terminal can then route this event into native desktop alerts, notification inboxes, or tab indicators.

As autonomous agents take over longer multi-step workflows, replacing heuristic stdout inspection with explicit status protocols is a critical step forward for developer tooling.
