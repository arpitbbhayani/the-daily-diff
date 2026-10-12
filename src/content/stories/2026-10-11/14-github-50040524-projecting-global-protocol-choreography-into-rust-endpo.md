---
title: Projecting global protocol choreography into rust endpoint roles
source: github
url: https://github.com/hibanaworks/hibana-quic
date: '2026-10-11'
tags:
- catchup
- choreography
- github
- http-3
- no-std
- quic
- rust
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50040524'
comments: https://news.ycombinator.com/item?id=50040524
why_read: Read this to understand how hibana-quic implements executable choreography
  in no_std Rust to strictly enforce protocol order and state transitions across network
  endpoints.
authors:
- hibanaworks
---

Implementing complex state machines for stateful protocols like QUIC is notoriously bug-prone because coordinating parallel actions across different roles often leads to hidden deadlocks and desynchronization.

Hibana-QUIC takes an unconventional approach by implementing QUIC and HTTP/3 in Rust through choreographic programming. Instead of writing endpoint logic independently, developers declare the global interaction order across roles using choreographic primitives. The compiler then projects this global sequence into per-role state machines, guaranteeing protocol fidelity by construction.

Equally remarkable are the runtime constraints. The entire library operates in no_std mode, strictly forbids unsafe code, and completely avoids heap allocations by refusing to link the alloc crate. Connection endpoints borrow memory arenas and stream slots directly from callers, bounding state execution cleanly.

This design shows how formal protocol choreography and strict systems constraints can combine to make network infrastructure both provably structured and exceptionally predictable under resource pressure.
