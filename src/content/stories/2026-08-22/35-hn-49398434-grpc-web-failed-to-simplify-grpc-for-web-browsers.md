---
title: gRPC-Web failed to simplify gRPC for web browsers
source: hn
url: https://kmcd.dev/posts/grpc-web-should-have-fixed-grpc/
date: '2026-08-22'
tags:
- browser-api-limitations
- catchup
- grpc
- grpc-web
- hn
- http/2
- protocol-buffers
- proxies
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49398434'
comments: https://news.ycombinator.com/item?id=49398434
why_read: Readers will understand the challenges gRPC faced with web browser compatibility
  and why gRPC-Web's solution, requiring proxies, added complexity rather than simplifying
  the protocol.
authors:
- '1317'
---

gRPC is a fantastic tool for backend service communication, but its integration with web browsers has always been clunky. This article argues that gRPC-Web, intended as a bridge, actually highlighted a deeper architectural flaw in gRPC itself.

The core issue lies in gRPC's tight coupling to HTTP/2 features like response trailers, which standard browser APIs do not expose. gRPC-Web's solution was an awkward wire format adjustment and a required proxy, adding friction instead of simplification.

For senior engineers, this is a vital lesson in API design: do not let the hardest engineering cases define the common case. RPC frameworks should strive for simplicity and broad compatibility, particularly when bridging backend power with frontend accessibility.
