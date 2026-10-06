---
title: Hacking the Go compiler to efficiently map IPv4 addresses to IPv6
source: hn
url: https://vincent.bernat.ch/en/blog/2026-go-netip-addrto6
date: '2026-10-05'
tags:
- catchup
- compiler-optimization
- go-compiler
- hn
- ipv4-mapped-ipv6
- netip-addr
section: engineering
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49962431'
comments: https://news.ycombinator.com/item?id=49962431
why_read: Learn how Go's netip package internally represents IP addresses and explore
  compiler-level optimization techniques to speed up address mapping.
authors:
- signa11
image: /infographics/10-hn-49962431.jpg
---

In Go, chaining standard library calls to map IPv4 to IPv6 addresses can unexpectedly run eight times slower than raw pointer arithmetic.

Vincent Bernat broke down why the Go compiler fails to optimize this sequence and showed how modifying the compiler SSA backend generates optimal machine instructions. Digging into assembly output reveals exactly where heap escapes and unnecessary intermediate allocations degrade hot-path networking code.

Understanding compiler SSA rules remains one of the best tools for diagnosing hidden performance regressions in high-throughput backend services.
