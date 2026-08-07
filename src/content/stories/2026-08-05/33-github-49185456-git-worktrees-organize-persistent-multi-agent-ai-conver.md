---
title: Git Worktrees Organize Persistent Multi-Agent AI Conversations
source: github
url: https://github.com/PiemonteF/t
date: '2026-08-05'
tags:
- ai-agents
- catchup
- conversation-management
- git-worktrees
- github
- task-management
- terminal-tool
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49185456'
comments: https://news.ycombinator.com/item?id=49185456
why_read: Read this to learn about 't', a command-line tool that revolutionizes how
  developers manage task-specific git worktrees by linking them to durable, multi-agent
  AI conversations, preventing context loss and streamlining workflow.
authors:
- PiemonteF
---

Managing context for your AI coding agents can quickly become a nightmare, especially when juggling multiple tasks and git worktrees. This new CLI tool, `t`, tackles that head-on by making your agent conversations truly durable and task-centric.

Imagine starting a new feature or bug fix: `t new "fix vault sync"` creates a dedicated worktree and branch. Now, any LLM agent you invoke within that worktree (like `t claude` or `t codex`) automatically links its conversation context to that specific task. Even if you delete the worktree months later, the conversation history for that task remains.

This is not just about logging; it is about seamless context recovery. It integrates with your existing terminal setup without imposing new pane management, ensuring it stays out of your way. For any engineer collaborating with AI on code, this means saying goodbye to lost context and hello to more productive, persistent agent interactions.

This simple yet powerful approach changes how you think about integrating AI into your daily development flow.
