---
title: Optimizing IPv4 to IPv6 address mapping in Go
source: hn
url: https://vincent.bernat.ch/en/blog/2026-go-netip-addrto6
date: '2026-10-04'
tags:
- catchup
- compiler-optimization
- go-compiler
- hn
- ipv4-mapped-ipv6
- netip
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49954375'
comments: https://news.ycombinator.com/item?id=49954375
why_read: Learn how netip.Addr internally encodes IP addresses and discover compiler-level
  techniques to eliminate performance overhead when mapping IPv4 to IPv6.
authors:
- database64128
image: /infographics/06-hn-49954375.jpg
---

Converting an IPv4 address to an IPv4-mapped IPv6 address using standard Go netip idioms is surprisingly slow. Chaining netip.AddrFrom16 with ip.As16 introduces function overhead that runs roughly eight times slower than a dedicated internal method.

Because netip.Addr stores IP addresses as a 128-bit value paired with an interned detail handle, an optimized conversion only needs bit shifts and direct field population. Diving into the Go compiler SSA rewrite rules and unsafe memory layouts reveals how to optimize this transformation to zero runtime overhead.

Micro-optimizing standard type conversions can prevent avoidable CPU cycles across high-throughput network proxies.
