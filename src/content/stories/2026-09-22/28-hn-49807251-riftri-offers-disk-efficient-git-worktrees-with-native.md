---
title: Riftri offers disk-efficient Git worktrees with native copy-on-write
source: hn
url: https://twitter.com/KinfishT/status/2102093551601684897
date: '2026-09-22'
tags:
- catchup
- copy-on-write
- disk-efficiency
- filesystem-sharing
- git-worktrees
- hn
- parallel-development
- riftri
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49807251'
comments: https://news.ycombinator.com/item?id=49807251
why_read: Read this to learn about Riftri, a tool that provides lightweight Git worktrees
  by leveraging native filesystem copy-on-write mechanisms. You will understand how
  it significantly reduces disk space usage and checkout costs for parallel development,
  enabling more efficient workflows.
authors:
- KiNFiSH
---

Managing multiple Git worktrees for parallel development or running AI agents can quickly consume disk space. Riftri solves this by introducing native copy-on-write (COW) Git worktrees.

Instead of copying all files for each worktree, Riftri leverages filesystem-level features like APFS clones on macOS, Linux reflinks on Btrfs/XFS, or ReFS block cloning on Windows. This means unchanged files are shared, cutting disk usage dramatically.

Imagine spinning up 10 worktrees and seeing an 87 percent reduction in disk space, from 774 MiB to 101 MiB, all while using standard Git commands. This is a highly practical solution for improving developer productivity and optimizing resource usage for agentic workflows.
