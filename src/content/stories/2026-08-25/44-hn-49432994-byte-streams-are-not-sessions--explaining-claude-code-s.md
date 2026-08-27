---
authors:
- Mendy Aouizerat
comments: https://news.ycombinator.com/item?id=49432994
date: '2026-08-25'
depth_score: 9
hn_id: '49432994'
image: /infographics/44-hn-49432994.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- claude-code
- hn
- pseudo-terminal
- remote-access
- session-management
- state-management
- terminal-ui
title: Byte streams are not sessions, explaining Claude Code's garbling
url: https://getxtend.com/blog/terminal-state-you-cant-replay.html
utility_score: 8
why_read: This article explains the subtle reasons why remote terminal sessions can
  break when device orientation changes, revealing that a byte stream alone does not
  constitute a full session. Readers will learn about the critical hidden state required
  for stable remote interaction and limitations of existing solutions.
---

Ever wondered why your remote terminal sessions go haywire when you rotate your phone? This article dissects the core problem: a byte stream is not a session. Crucial terminal state – like width, modes, and transcript head – lives outside the byte stream and is rarely preserved.

This goes far beyond a simple rendering bug. The author details the intricacies of pseudo-terminal (PTY) state management and why existing solutions often fail to achieve true session replay. It is a fundamental challenge for anyone building robust remote development environments or even LLM agent interfaces that rely on interactive shell sessions.

Understanding these deep technical nuances of terminal emulation is vital for reliable system design and developer tooling. This piece offers a masterclass in an often-overlooked area of systems engineering.