---
title: Local SQLite writes synchronize with central Postgres using CRDTs
source: hn
url: https://www.sqlite.ai/postgres
date: '2026-09-28'
tags:
- catchup
- crdt-merge
- hn
- local-first
- offline-first
- postgresql
- sqlite
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49878168'
comments: https://news.ycombinator.com/item?id=49878168
why_read: Read this to understand how local-first architecture pairs on-device SQLite
  with PostgreSQL to eliminate latency and support offline operation using CRDT replication.
authors:
- marcobambini
---

Local-first architectures often struggle with bridging client-side embedded databases and relational backends. SQLite Sync introduces a replication extension that pairs on-device SQLite instances with central PostgreSQL servers using CRDT-based synchronization.

Instead of routing every single read and write over high-latency network calls, clients execute operations immediately against an embedded local SQLite engine. Accumulated changes are asynchronously synced to PostgreSQL in the background, with CRDTs deterministically resolving any multi-device conflicts that occur during offline intervals.

This pattern eliminates user-facing network latency while keeping standard PostgreSQL workflows, tooling, and integrity intact at the central persistence layer.

Decoupling immediate UI mutation from centralized transactional persistence is becoming the standard blueprint for high-performance responsive applications.
