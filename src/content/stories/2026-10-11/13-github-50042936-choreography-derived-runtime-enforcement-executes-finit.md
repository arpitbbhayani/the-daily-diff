---
title: Choreography-derived runtime enforcement executes finite multiparty protocols
  in Rust
source: github
url: https://github.com/hibanaworks/hibana
date: '2026-10-11'
tags:
- catchup
- choreographic-programming
- github
- multiparty-protocols
- no-std
- runtime-enforcement
- rust
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50042936'
comments: https://news.ycombinator.com/item?id=50042936
why_read: Read this to understand how Hibana enforces multiparty communication protocols
  at runtime without exploding endpoint types. You will learn how global choreographies
  can be projected into compact, allocation-free state machines in Rust.
authors:
- hibanaworks
---

Writing multi-party distributed protocols usually means maintaining separate state machines for every node and praying that your messages never drift out of sync. Hibana brings choreographic programming to Rust by turning a single global protocol specification into projected runtime state machines for each endpoint.

Unlike traditional implementations that blow up compile times with complex session types, Hibana uses compact runtime descriptors. It operates unconditionally under no_std with zero heap allocations, allowing up to 256 roles to communicate over any transport implementation.

Every send, receive, and routing decision must validate against the projected local program before state progress commits. If an endpoint attempts to execute steps out of order or repeat a message, the runtime kernel rejects the transition immediately.

Choreographic execution eliminates protocol mismatches at the source by deriving node behaviors directly from shared system design.
