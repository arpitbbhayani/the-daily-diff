---
title: dgit offers a serverless Git forge with Durable Objects
source: hn
url: https://git.littledivy.com/dgit/about/
date: '2026-08-18'
tags:
- catchup
- cloudflare-workers
- dgit
- distributed-systems
- durable-objects
- git-server
- hn
- r2-bucket
- serverless
- sqlite
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49345541'
comments: https://news.ycombinator.com/item?id=49345541
why_read: This text introduces dgit, a novel Git server built on Cloudflare Workers
  and Durable Objects. Readers will learn about its distributed architecture, how
  it leverages cloud primitives for cost-effectiveness and scalability, and its implementation
  of core Git protocols.
authors:
- undefined_void
---

Building a fully functional Git forge without a traditional server or filesystem sounds like a pipe dream, but this project demonstrates how it is possible using Cloudflare Durable Objects, SQLite, and R2.

Each repository becomes a Durable Object, a single-instance server that speaks the Git smart HTTP protocol. The core innovation lies in implementing Git internals like pkt-line framing, packfile parsing, and delta resolution directly in TypeScript, with SQLite storing object indexes and R2 handling the raw packfile bytes. This architecture allows repositories to shard naturally, ensuring one hot repository cannot impact another.

It is a masterclass in leveraging serverless primitives for stateful, complex applications, showing how to achieve crash safety and high performance with careful design and caching strategies.
