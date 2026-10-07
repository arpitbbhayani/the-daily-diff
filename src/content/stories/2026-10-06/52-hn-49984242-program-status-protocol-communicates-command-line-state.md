---
title: Program status protocol communicates command-line state to terminals
source: hn
url: https://www.superlogical.com/rex/docs/build/program-status
date: '2026-10-06'
tags:
- catchup
- cli-tools
- hn
- osc-7501
- process-state
- terminal-emulators
- terminal-escape-sequences
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49984242'
comments: https://news.ycombinator.com/item?id=49984242
why_read: Learn how the OSC 7501 terminal escape sequence allows command-line tools
  to report rich operational state directly to terminal emulators without dictating
  UI presentation.
authors:
- paaloeye
---

Terminal applications often leave users guessing whether a long-running process is active, stalled on input, or finished. Existing escape sequences like OSC 9;4 only signal basic busy states, while desktop notifications lack ongoing state context.

The Program Status Protocol (OSC 7501) addresses this by introducing a standardized terminal escape sequence that exposes precise program lifecycle states. Applications can directly report statuses such as idle, working, blocked on permissions, completed, or failed alongside structured metadata.

By decoupling state reporting from presentation logic, terminal emulators and agentic orchestrators can track multiple background processes reliably without fragile window-title scraping or ad-hoc plugins.

This simple protocol standardizes observability for modern command-line workflows and autonomous coding agents.
