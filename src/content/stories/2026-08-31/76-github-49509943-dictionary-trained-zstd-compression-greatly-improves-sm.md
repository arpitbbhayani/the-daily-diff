---
title: Dictionary-trained zstd compression greatly improves small microservice JSON
  payloads
source: github
url: https://github.com/Rishikesh-glitch/z-egress
date: '2026-08-31'
tags:
- catchup
- data-compression-dictionary
- envoy-proxy
- github
- json-payloads
- microservice-traffic
- zstd-compression
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49509943'
comments: https://news.ycombinator.com/item?id=49509943
why_read: Read this to understand how dictionary-trained zstd compression significantly
  enhances data compression for small microservice JSON payloads. It highlights the
  substantial performance gains over standard methods and identifies the specific
  conditions where this approach is most effective.
authors:
- Rishikesh-glitch
---

Are your microservices sending small JSON payloads? Envoy's ZSTD filter might be silently leaving 77 percent of your bytes on the wire. For payloads under 2KB, its compression barely hits 23 percent.

The reason is simple: generic ZSTD lacks the necessary history for effective LZ matching on small, repetitive messages. However, training a ZSTD dictionary on your typical microservice traffic can push compression rates up to 80 percent, a massive win for egress costs and latency.

This is not just theory; the benchmark comparison against Envoy's levels 1, 3, 9, and 19 clearly shows the dictionary-trained approach's superiority. This is a highly actionable optimization for anyone running high-volume microservice architectures. Do not let inefficient compression cost you.
