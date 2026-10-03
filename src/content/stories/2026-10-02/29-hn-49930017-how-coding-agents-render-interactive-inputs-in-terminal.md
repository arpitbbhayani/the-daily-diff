---
title: How coding agents render interactive inputs in terminals
source: hn
url: https://nohzafk.github.io/posts/2026-09-28-how-coding-agents-draw-the-input-box/
date: '2026-10-02'
tags:
- alternate-screen
- catchup
- cli-interfaces
- hn
- main-screen-buffer
- scrollback-buffer
- terminal-emulators
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49930017'
comments: https://news.ycombinator.com/item?id=49930017
why_read: Learn the trade-offs between main and alternate screen buffers when building
  interactive terminal user interfaces that preserve native scrollback and selection.
authors:
- Fudgel
---

Building a CLI for a coding agent introduces an unexpected terminal rendering dilemma: alternate screen versus main screen buffers. Full-screen terminal user interfaces take over the entire alternate buffer, which simplifies redrawing but breaks native terminal scrollback, mouse text selection, and shell search.

To preserve scrollback, modern coding agents such as Claude Code, Gemini CLI, and Codex CLI operate directly inside the main buffer. They pin the active input box to the bottom of the viewport using ANSI scroll margins and custom differential rendering engines, emitting selective cursor movements rather than redrawing the whole screen.

This architecture lets finished agent output stream naturally into shell history while keeping prompt editing flicker-free. Handling terminal escape sequences and raw termios modes manually is difficult, but maintaining native copy-paste and search workflows is essential for developer ergonomics.

Terminal emulation remains one of the most subtle UI boundaries in modern developer tooling.
