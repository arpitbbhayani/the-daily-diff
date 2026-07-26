---
authors:
- sbulaev
comments: https://news.ycombinator.com/item?id=49039490
date: '2026-07-24'
depth_score: 8
hn_id: '49039490'
image: /infographics/14-hn-49039490.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- autonomous-systems
- bgp
- catchup
- hn
- internet-routing
- origin-attribute
- path-attributes
- traffic-forwarding
title: BGP ORIGIN attribute manipulation impacts Internet traffic forwarding
url: https://blog.cloudflare.com/bgp-origin-attribute/
utility_score: 8
why_read: This text reveals that BGP ORIGIN attributes are frequently manipulated,
  impacting how traffic is forwarded across the Internet. Readers will learn about
  a significant operational discrepancy in BGP behavior.
---

A new Cloudflare study reveals something unsettling about the internet's backbone: roughly 70 percent of BGP paths are manipulating the ORIGIN attribute. This is not how the protocol is designed to work, and it has profound implications for how traffic actually flows across the globe.

The ORIGIN attribute is meant to signal how a route was injected into BGP and should remain unchanged. However, widespread modification means routing decisions are being made based on incorrect information, potentially leading to suboptimal paths, increased latency, or even outages.

For engineers building and maintaining large-scale distributed systems, understanding these hidden realities of the internet is critical. This insight can help in designing more resilient architectures and debugging hard-to-trace network issues, as relying solely on standard BGP assumptions is insufficient.

Dive deep into this crucial finding to truly grasp the complexities of global internet routing.