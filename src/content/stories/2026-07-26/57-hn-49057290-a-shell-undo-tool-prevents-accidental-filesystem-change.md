---
authors:
- JBiserkov
comments: https://news.ycombinator.com/item?id=49057290
date: '2026-07-26'
depth_score: 8
hn_id: '49057290'
image: /infographics/57-hn-49057290.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- catchup
- command-line-tool
- data-recovery
- filesystem-history
- hn
- ld-preload
- shell-hook
- system-calls
title: A shell undo tool prevents accidental filesystem changes
url: https://undo.edaywalid.com/
utility_score: 9
why_read: This text explains a clever mechanism for reverting shell commands, offering
  robust protection against accidental filesystem changes. Readers will learn how
  a tool uses shell hooks and LD_PRELOAD to intercept and reverse destructive operations.
---

Imagine never accidentally deleting critical files with `rm -rf` again. This `undo` utility for your shell (zsh, bash, fish) fundamentally changes how you interact with destructive commands.

It achieves this by hooking into `libc` calls via `LD_PRELOAD`. When you delete a file, for example, it is first hardlinked to a session store before the `unlinkat` call proceeds. This means no data is copied, no matter the size, making it incredibly efficient.

The tool journals all relevant filesystem changes, allowing you to selectively revert any command, not just the last one. This is a powerful safety net built on a deep understanding of system internals, directly enhancing your productivity and peace of mind.