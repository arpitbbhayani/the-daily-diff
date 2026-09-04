---
authors:
- Kevin McDonald
comments: https://news.ycombinator.com/item?id=49536002
date: '2026-09-02'
depth_score: 8
hn_id: '49536002'
image: /infographics/45-hn-49536002.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- connect-protocol
- grpc-web
- hn
- http-trailers
- protobuf
- web-standards
title: gRPC-Web's deviation from web standards caused its failure
url: https://buf.build/blog/grpc-web-failed-the-web
utility_score: 8
why_read: This article explains the fundamental design flaw of gRPC-Web, specifically
  its failure to adopt existing web standards. Readers will learn why a new protocol
  like Connect is necessary to achieve gRPC-like functionality more effectively within
  browser environments.
---

Many teams adopted gRPC-Web for its schema-first, type-safe model, hoping to bring gRPC to the browser. However, a deep dive reveals that gRPC-Web fundamentally 'failed the web' by creating a custom protocol that browsers do not natively understand, requiring proxy layers.

The core issue lies with browser limitations, specifically the inability to expose HTTP trailers to JavaScript. gRPC-Web's solution was to move these trailers into the response body, making it incompatible with standard web tooling and protocols.

This piece offers a compelling argument for 'Connect' as the true gRPC-Web successor. Connect retains the Protobuf contract and generated clients but uses standard web mechanisms, addressing the inherent design flaws of gRPC-Web and making for a more robust and web-friendly communication layer.