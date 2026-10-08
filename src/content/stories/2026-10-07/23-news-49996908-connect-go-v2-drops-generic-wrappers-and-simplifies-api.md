---
title: Connect-go v2 drops generic wrappers and simplifies apis
source: news
url: https://buf.build/blog/connect-go-v2
date: '2026-10-07'
tags:
- api-design
- catchup
- connect-go
- generics
- grpc-go
- news
- rpc
section: systems
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49996908'
comments: https://news.ycombinator.com/item?id=49996908
why_read: Read this to understand the architectural lessons behind simplifying connect-go's
  API, including why moving away from complex generic request wrappers creates a more
  idiomatic Go experience.
authors:
- Team Buf
---

Wrapping RPC messages in generic container types often degrades developer experience more than it helps.

The team behind Connect-go learned this after four years in production and completely eliminated generic wrappers in v2. The original design wrapped unary requests in generic types to expose transport metadata without touching context. In practice, most handlers do not need raw metadata, but every single developer had to unwrap payloads through extra method calls.

This generic layer broke interoperability with the broader Go RPC ecosystem. Standard services expect plain method signatures matching context and request pointers. By dropping the generic wrapper and aligning directly with canonical gRPC method shapes, the framework simplifies migrations while detaching the core engine from net/http.

Advanced type system tricks rarely justify breaking ergonomic conventions in high-throughput services.
