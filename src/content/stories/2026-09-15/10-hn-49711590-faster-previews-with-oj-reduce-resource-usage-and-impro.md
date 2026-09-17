---
title: Faster previews with OJ reduce resource usage and improve cold starts
source: hn
url: https://lovable.dev/blog/faster-previews-oj
date: '2026-09-15'
tags:
- catchup
- cold-starts
- hn
- oj
- performance
- previews
- resource-optimization
- rust
- vite
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49711590'
comments: https://news.ycombinator.com/item?id=49711590
why_read: This post explains why Lovable is transitioning from Vite to OJ for its
  preview system. Readers will learn how a Rust-native solution addresses the challenges
  of running numerous developer sandboxes at scale, improving cold start times and
  reducing resource footprint while maintaining compatibility.
authors:
- vikeri
---

Running thousands of developer sandboxes daily exposed a critical flaw in using standard tools like Vite: its JavaScript runtime footprint became a huge memory and cold start bottleneck. Vite is excellent for single-developer use, but not for massive, distributed environments.

Lovable's solution, "OJ" (Orange Juice), is a complete rewrite of Vite in Rust. By going end-to-end Rust for file watching, websockets, and bundling, with a small Node.js sidecar only when JavaScript plugins are truly needed, they achieved a remarkable 10x reduction in memory usage.

This demonstrates that for infrastructure at scale, even widely adopted tools sometimes require a fundamental architectural shift to native languages like Rust to meet stringent resource and performance targets. It is a powerful lesson in choosing the right tool and language for critical infrastructure.
