---
title: Offshoot enables Git-like branching for SQLite databases, aiding AI agents
source: github
url: https://github.com/sricola/offshoot
date: '2026-08-16'
tags:
- ai-agents
- catchup
- copy-on-write
- database-forking
- evaluation-harnesses
- git-branching
- github
- sqlite
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49320181'
comments: https://news.ycombinator.com/item?id=49320181
why_read: This project introduces Offshoot, a tool for managing SQLite databases with
  Git-like branching. Readers will learn how copy-on-write forks provide efficient,
  kill-9-durable, per-attempt databases for AI agents and evaluation harnesses, addressing
  limitations of mocks or VM snapshots.
authors:
- sricola
---

Managing mutable database state for AI agent evaluations or complex test environments can be a nightmare. You often end up with slow re-seeding or cumbersome container snapshots. Offshoot offers a game-changing solution.

It provides copy-on-write branching for stock SQLite files, allowing you to create isolated forks with minimal overhead 

just 377 bytes per shared fork of a 100 MB database. This enables fast checkpoints, rollbacks, and kill-9 durable capture.

This is a powerful tool for anyone building AI agents or complex systems that require fast, isolated, and disposable database instances, solving a critical infrastructure bottleneck with elegant file system primitives.
