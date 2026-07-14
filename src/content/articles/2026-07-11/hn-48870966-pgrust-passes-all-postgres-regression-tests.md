---
title: pgrust Passes All Postgres Regression Tests
source: hn
url: https://malisper.me/pgrust-passes-100-of-postgresqls-regression-tests/
date: '2026-07-11'
tags:
- ai-assisted-programming
- catchup
- database-compatibility
- database-rewrite
- hn
- isolation-testing
- pgrust
- postgres
- regression-testing
- rust-language
score: 21
hn_id: '48870966'
comments: https://news.ycombinator.com/item?id=48870966
why_read: This article introduces pgrust, a Postgres rewrite in Rust that achieves
  100% compatibility with Postgres regression tests. It highlights a novel approach
  to making Postgres more extensible and easier to modify from within.
authors:
- Malte Skoruppa
- Jason Seibel
author: Malte Skoruppa
---

Imagine rewriting PostgreSQL from scratch in Rust, and then getting it to pass 100% of Postgres's own regression tests. That is what `pgrust` has achieved, signaling a significant leap in database systems development.

This project is not just a language port; it is an effort to make the internal workings of Postgres more approachable and modifiable. For senior engineers, this opens up possibilities for deeper server changes, potentially enabling new optimizations and features that are harder to implement in the original C codebase.

The explicit goal to use AI-assisted programming to explore 'deeper server changes' is particularly intriguing. This could mean AI agents helping to discover new query optimization strategies or storage engine improvements, pushing the boundaries of applied AI in database infrastructure.

Disk compatibility with Postgres 18.3 means this is not a toy project but a serious attempt at a compatible, perhaps more maintainable, alternative. It challenges conventional wisdom about monolithic database systems and their evolution.

This is a deep dive into the future of robust, AI-enhanced database engineering.
