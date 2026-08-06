---
title: IPv6 Unique Local Addresses lead to intermittent network flapping
source: hn
url: https://mabels.github.io/mseg-tester/blog/fd00-is-not-your-192-168-short.html
date: '2026-08-04'
tags:
- catchup
- hn
- home-networking
- ipv4
- ipv6
- nat66
- network-flapping
- routing
- unique-local-addresses
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49171489'
comments: https://news.ycombinator.com/item?id=49171489
why_read: This article details a specific issue with IPv6 Unique Local Addresses (ULA)
  combined with NAT66 in a home network setup. Readers will learn why ULAs might cause
  intermittent network connectivity and are not direct equivalents to private IPv4
  addresses.
authors:
- fastandfearless
---

If you think `fd00::/8` is just the IPv6 equivalent of `192.168.x.x` for private networks, you are walking into a trap that will cause insidious network issues. This article brilliantly breaks down why that assumption is fundamentally flawed.

Unlike IPv4 private IPs, IPv6 Unique Local Addresses (ULAs) still have a "global scope" bit set, making them routable by default without specific policy. Furthermore, when used with NAT66 for dual-homed networks, the ULA can be deprecated by Router Advertisements from a valid global prefix, causing intermittent connectivity issues.

This is not just academic; it is a practical pitfall for anyone designing or managing IPv6 networks, especially in complex distributed systems or multi-uplink scenarios. Understanding this distinction is crucial for robust network architecture.

Do not let your IPv4 intuition lead you astray in IPv6.
