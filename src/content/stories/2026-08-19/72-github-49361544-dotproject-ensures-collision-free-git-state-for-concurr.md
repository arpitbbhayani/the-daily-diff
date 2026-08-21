---
title: Dotproject ensures collision-free Git state for concurrent AI agents
source: github
url: https://github.com/jasonnam/dotproject
date: '2026-08-19'
tags:
- ai-agents
- catchup
- conflict-free
- distributed-systems
- git
- github
- json
- project-state
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49361544'
comments: https://news.ycombinator.com/item?id=49361544
why_read: Read this to understand a novel Git-native approach for managing project
  state among concurrent AI agents. You will learn how to achieve collision-free collaboration
  through write-once files and unique paths.
authors:
- jasonnam
---

Coordinating AI agents in a shared codebase is tough, especially preventing merge conflicts. Dotproject offers a novel solution: a Git-native standard using plain JSON files for agent project state that is inherently collision-free.

The core idea is "write-once" definitions and using ULIDs plus actor IDs for subsequent changes, effectively giving each change a unique path. This means Git merges will never conflict on `.project/` files, simplifying agent workflows and enabling truly concurrent work.

It is a clever system design for managing state in a multi-agent environment, where agents are effectively committing their progress. If you are building agentic workflows, understanding this design could fundamentally change how you approach state synchronization and collaboration.
