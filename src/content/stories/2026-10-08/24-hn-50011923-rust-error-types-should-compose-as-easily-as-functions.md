---
title: Rust error types should compose as easily as functions
source: hn
url: https://mcmah309.github.io/posts/the-missing-piece-in-rust-error-handling/
date: '2026-10-08'
tags:
- anyhow
- catchup
- error-handling
- hn
- rust
- thiserror
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50011923'
comments: https://news.ycombinator.com/item?id=50011923
why_read: Read this to understand the fundamental friction between precision and convenience
  in Rust error types. You will explore the architectural trade-offs between nested
  enums and type-erased error handling.
authors:
- Dillon McMahon
---

Rust error handling often forces an uncomfortable trade-off. You must either write boilerplate enums using crates like thiserror to preserve precision, or collapse everything into an opaque container like anyhow and lose fine-grained type guarantees.

When your system spans file reads, network calls, and database initialization, nesting error enums rapidly explodes in complexity. You end up with deeply nested matching logic or sprawling crate-wide error enums that falsely advertise failures a specific function cannot even return.

The eros library introduces structural error sets to make error types compose as naturally as the functions returning them. Instead of manually declaring an enum variant for every dependency, functions define subsets of errors that unify automatically across call boundaries.

This composable approach brings the precision of static types together with the ergonomics of ad-hoc error propagation. It removes a persistent friction point in Rust backend service architecture without sacrificing explicit control flow.
