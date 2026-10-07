---
title: Splitting agent coordination and computation between Gleam and Zig
source: hn
url: https://pentad.ai/blog/why-our-agent-os-runs-on-gleam-and-zig/
date: '2026-10-06'
tags:
- agent-infrastructure
- beam-otp
- catchup
- gleam
- hn
- runtime-interop
- zig
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49982763'
comments: https://news.ycombinator.com/item?id=49982763
why_read: Learn why decoupling coordination on BEAM and high-throughput computation
  in Zig creates more resilient agent systems. It explains the mechanics of building
  a compiler-generated boundary between divergent runtimes.
authors:
- Pentad Labs
---

Building infrastructure for autonomous agents requires handling two completely opposing workloads: resilient session orchestration and high-performance kernel computation. Trying to force a single language runtime like Python or Rust to handle both sides often creates fragile glue code or memory overhead.

An agent session looks remarkably like an Erlang actor. It is long-lived, stateful, and constantly bombarded by network drops, rate limits, and non-deterministic model failures. Placing the coordination layer on Gleam and BEAM/OTP allows supervision trees to isolate crashes and restore state from clean checkpoints without manual error-handling boilerplate.

Meanwhile, vector retrieval and raw tensor math demand tight memory layouts and predictable execution. Offloading those workloads into Zig keeps the data plane fast while preserving determinism. A custom compiler generates the strict boundary between BEAM ports and Zig memory buffers, avoiding hand-rolled Foreign Function Interface bugs.

Matching runtime semantics to specific failure domains yields far more resilient systems than standard monolithic stacks.
