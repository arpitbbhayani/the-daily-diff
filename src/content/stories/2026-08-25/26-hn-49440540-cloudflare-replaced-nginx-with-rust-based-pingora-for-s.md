---
title: Cloudflare Replaced NGINX with Rust-based Pingora for Scale and Efficiency
source: hn
url: https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/
date: '2026-08-25'
tags:
- catchup
- cloudflare
- hn
- http-proxy
- nginx
- performance
- pingora
- resource-efficiency
- rust
- scalability
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49440540'
comments: https://news.ycombinator.com/item?id=49440540
why_read: This article details why Cloudflare built Pingora, a new Rust-based HTTP
  proxy, to replace NGINX. Readers will understand the scaling and feature limitations
  of NGINX for a company like Cloudflare and the benefits of building a custom solution.
authors:
- cloudup
---

Cloudflare's decision to replace NGINX with Pingora, a custom Rust-based HTTP proxy, is a masterclass in system design for extreme scale. They are handling over a trillion requests daily while slashing CPU and memory usage by two-thirds.

This engineering feat highlights the critical point where off-the-shelf solutions, even robust ones like NGINX, hit architectural limits. Cloudflare's blog details how they tackled challenges related to NGINX's worker architecture and specific performance bottlenecks at their massive scale.

Engineers building high-performance distributed systems should read this to understand the practical trade-offs and design considerations that go into building mission-critical infrastructure from scratch.
