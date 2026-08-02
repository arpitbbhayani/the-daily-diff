---
authors:
- alchaplinsky
comments: https://news.ycombinator.com/item?id=49110389
date: '2026-07-30'
depth_score: 8
hn_id: '49110389'
image: /infographics/37-hn-49110389.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- coding-agents
- git-hooks
- git-worktrees
- hn
- isolation
- shared-state
title: Git worktrees are not an isolation boundary for coding agents
url: https://fletch.sh/blog/git-worktrees-vs-clones-for-ai-agents/
utility_score: 9
why_read: This post explains why Git worktrees do not provide the isolation often
  assumed, detailing what state is shared and what is truly per-worktree. Readers
  will understand the security and functional implications of using worktrees, particularly
  in automated environments.
---

If you are using Git worktrees to isolate your AI coding agents, you have a problem. Many tools assume worktrees provide true isolation, but they are fundamentally not a security boundary.

A worktree's .git file points back to a shared .git directory, meaning agents can install hooks that execute on your machine or manipulate the main repository's configuration. This is not a bug; it is how Git works.

For true isolation when working with agentic workflows, you need full repository clones. This piece deep dives into Git's internals, highlighting why worktrees fall short and what concrete steps you must take to secure your agent deployments.