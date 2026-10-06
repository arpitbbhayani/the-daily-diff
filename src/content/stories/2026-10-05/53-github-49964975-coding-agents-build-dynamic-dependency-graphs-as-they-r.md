---
title: Coding agents build dynamic dependency graphs as they run
source: github
url: https://github.com/teal-sea/ostoyae
date: '2026-10-05'
tags:
- catchup
- coding-agents
- dependency-resolution
- dynamic-dag
- git-worktree
- github
- job-runner
section: ai
is_news: false
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49964975'
comments: https://news.ycombinator.com/item?id=49964975
why_read: Understand how Ostoyae orchestrates coding agents by dynamically spawning
  prerequisite tasks in a directed acyclic graph whenever agents hit missing dependencies.
authors:
- teal-sea
---

Most coding agent workflows fail when they hit an unexpected missing prerequisite because rigid task pipelines cannot adapt on the fly. Ostoyae tackles this by running agents across a dynamic directed acyclic graph that grows organically as execution unfolds.

Each subtask executes inside its own isolated git worktree. When an agent gets blocked due to a missing component, interface, or dependency, it emits a structured roadblock event. The runner intercepts this event, synthesizes a new dependency node, wires an edge back to the blocked task, and spawns an agent to build the missing piece before resuming.

This mirrors how human software engineers actually work by discovering requirements incrementally rather than predicting every prerequisite up front.
