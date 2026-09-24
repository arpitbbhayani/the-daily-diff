---
title: TypeScript server compiled to machine code outperforms Rust's hyper
source: hn
url: https://geastack.com/blog-typescript-server-outran-hyper
date: '2026-09-22'
tags:
- catchup
- hn
- native-compilation
- node-js
- performance-benchmarking
- rust
- typescript
- web-server
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49797267'
comments: https://news.ycombinator.com/item?id=49797267
why_read: This article demonstrates how a TypeScript server compiled to a native binary
  can achieve significantly higher performance than Rust's hyper or Node.js. Readers
  will learn about the impressive performance benchmarks and the method used for native
  compilation of TypeScript.
authors:
- "Arma\u011Fan Amcalar"
---

Imagine a TypeScript server outperforming Rust's Hyper and C++'s Drogon. This is not a drill: new benchmarks claim a `geatsc`-compiled TypeScript server delivers 313,000 requests per second with four workers. This represents a 14 percent lead over Hyper and a substantial 39 percent lead over Axum, all while consuming just 3.7 MB of memory and boasting a 6 ms cold start.

This revelation significantly challenges conventional wisdom regarding server performance and language selection for high-throughput systems. A standard `node:http` server, written in TypeScript, is compiled into a native binary that operates entirely without Node.js or a JavaScript engine. This indicates a novel path for achieving bare-metal efficiency from a language traditionally associated with higher-level application development.

For senior engineers who meticulously balance raw performance with developer velocity, this presents an incredibly compelling new architectural option. It strongly suggests that TypeScript, when paired with the right compilation strategies, can emerge as a formidable contender for building extremely high-throughput, low-latency backend services. This development could fundamentally reshape how we strategize modern system architecture and language stack decisions.
