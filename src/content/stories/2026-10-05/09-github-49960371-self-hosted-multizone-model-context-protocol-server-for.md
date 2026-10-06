---
title: Self-hosted multizone model context protocol server for Kubernetes
source: github
url: https://github.com/bkraad47/ramen
date: '2026-10-05'
tags:
- catchup
- github
- grpc
- kubernetes
- model-context-protocol
- oauth-2-1
- python
- rust
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49960371'
comments: https://news.ycombinator.com/item?id=49960371
why_read: Explore an enterprise-grade architecture for turning Python tools into canary-deployed
  Rust and Python Model Context Protocol workers on Kubernetes.
authors:
- bkraad47
image: /infographics/09-github-49960371.jpg
---

Scaling Model Context Protocol (MCP) servers in production often exposes gaps in security, rate-limiting, and fault isolation.

Ramen addresses these limitations by introducing a high-availability, multi-zone architecture on Kubernetes. It pairs high-throughput Rust edge nodes handling Streamable HTTP with internal gRPC routing to isolated Python execution workers, complete with canary rollouts and OAuth 2.1 authentication.

Separating the ingress protocol layer from runtime tool execution is quickly becoming the standard blueprint for robust agent infrastructure.
