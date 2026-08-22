---
authors:
- CaydenChik
comments: https://news.ycombinator.com/item?id=49371211
date: '2026-08-20'
depth_score: 7
hn_id: '49371211'
image: /infographics/69-github-49371211.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-agents
- catchup
- destructive-commands
- file-recovery
- git-untracked-files
- github
- shell-commands
- undo
title: Doover provides undo for AI agent shell commands
url: https://github.com/CaydenChik/doover
utility_score: 9
why_read: This describes Doover, a tool that protects against destructive AI agent
  commands by taking snapshots and providing a full undo mechanism. You will learn
  how to prevent irreversible mistakes when AI agents execute shell commands.
---

AI agents operating in your shell are powerful, but one `rm -rf` mistake can be catastrophic. What if you could hit undo, even for files Git never tracked?

'Do-over' is a new tool that snapshots your files before an AI agent executes destructive bash commands like `rm -rf`, `git reset`, or `rsync`. This creates a robust undo mechanism, making agent experimentation much safer.

This is essential for anyone building or deploying AI agents that interact with the filesystem, offering a critical safety net that goes beyond traditional version control. It is a smart piece of applied AI engineering.