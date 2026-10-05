---
title: Tokio race condition causes subtle data loss in ttrpc-rust
source: hn
url: https://notes.shvbsle.in/ttrpc-data-loss/
date: '2026-10-04'
tags:
- catchup
- containerd
- hn
- race-condition
- rust
- tokio
- ttrpc
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49951655'
comments: https://news.ycombinator.com/item?id=49951655
why_read: Learn how an asynchronous concurrency race in ttrpc-rust caused truncated
  log streams in container runtimes. It provides practical insights into debugging
  low-level RPC framing and runtime internals.
authors:
- dropbox_miner
---

Writing a low-overhead RPC layer in Rust seems straightforward until asynchronous task scheduling races with connection termination. In containerd, ttrpc is used as a lightweight alternative to gRPC for communication between runtimes and shims on the same host, stripping HTTP/2 and TLS overhead down to a simple ten-byte header and protobuf payload over a shared connection.

When porting components to Rust, an intermittent bug caused log streams to drop the final output frame under high load. The issue traced back to a Tokio race condition inside the ttrpc-rust transport implementation, where the connection teardown logic discarded in-flight response buffers before flushing them to the socket.

Low-level protocol implementations must explicitly handle graceful socket shutdown semantics rather than relying on runtime task cancellation to clean up buffers. When developing high-throughput container infrastructure, silent data loss often masquerades as application logic errors when it is actually an unhandled transport-layer edge case.
