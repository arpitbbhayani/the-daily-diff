---
authors:
- aether-zyads
comments: https://news.ycombinator.com/item?id=49044517
date: '2026-07-25'
depth_score: 8
hn_id: '49044517'
image: /infographics/02-hn-49044517.jpg
interest_score: 9
novelty_score: 9
section: ai
source: github
tags:
- ai-agents
- catchup
- concurrent-editing
- conflict-prevention
- git
- github
- intent-leases
- version-control
title: Heddle offers version control for many simultaneous users with intent leases
url: https://github.com/zyads/loom-vcs
utility_score: 9
why_read: Readers will learn about Heddle, a novel version control system that uses
  intent leases to prevent conflicts when many agents work concurrently on a codebase.
  It highlights a critical limitation of Git in managing parallel, semantically overlapping
  rewrites, particularly in AI-driven development.
---

Using multiple AI coding agents on a single project quickly turns into a version control nightmare. Imagine two agents, Agent A refactoring authentication and Agent B cleaning login flows, both touching the same files without knowing of each other's work.

This exact scenario often leads to costly semantic reconciliation or silent loss of work. Heddle, an open-source project, proposes an elegant solution: a coordination layer built on Git that introduces "intent leases." Agents declare their intent for specific file paths, preventing simultaneous, conflicting rewrites.

This allows for true collaborative AI development where agents are air traffic controlled, not left to collide. It is a fundamental shift in how we might manage multi-agent programming efforts, directly improving productivity and code integrity.