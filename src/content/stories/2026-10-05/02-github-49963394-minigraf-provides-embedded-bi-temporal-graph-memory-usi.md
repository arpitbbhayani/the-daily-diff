---
title: Minigraf provides embedded bi-temporal graph memory using Datalog
source: github
url: https://github.com/project-minigraf/minigraf
date: '2026-10-05'
tags:
- ai-agents
- bitemporal-data
- catchup
- datalog
- embedded-database
- github
- graph-database
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49963394'
comments: https://news.ycombinator.com/item?id=49963394
why_read: Learn how Minigraf implements an embedded graph database featuring bi-temporal
  time travel and Datalog queries. It is a lightweight solution for managing relational
  state across AI agents, mobile devices, and browser environments.
authors:
- adityamukho
image: /infographics/02-github-49963394.jpg
---

Most agent memory systems rely on crude vector stores or flat key-value pairs, discarding structural relationships and historical provenance. Minigraf introduces a compact alternative: a single-file, embedded bi-temporal graph engine written in Rust with first-class Datalog support.

By tracking both transaction time (when facts were recorded) and valid time (when facts were true in reality), the engine enables precise time-travel queries across complex graph topologies. It bypasses the need for heavy external database servers while retaining recursive graph traversal and analytic window functions.

Compiling directly into native binaries or WebAssembly, it brings structured semantic memory down to edge devices, browsers, and local agent harnesses without network latency.

Treating agent memory as an immutable, queryable temporal graph provides the deterministic lineage that generative pipelines sorely lack.
