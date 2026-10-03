---
title: Why managing HTTP Vary headers prevents cache fragmentation
source: hn
url: https://blog.cloudflare.com/vary-support/
date: '2026-09-23'
tags:
- cache-fragmentation
- cache-rules
- catchup
- content-negotiation
- hn
- http-caching
- http-vary
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49823195'
comments: https://news.ycombinator.com/item?id=49823195
why_read: Understand the mechanics of the HTTP Vary header and how to normalize request
  variations to prevent cache fragmentation across intermediary proxies.
authors:
- thisisfatih
image: /infographics/07-hn-49823195.jpg
---

The HTTP Vary response header is essential for content negotiation, but it is notoriously difficult to handle at the edge. When an origin specifies Vary on headers like Accept or User-Agent, naive edge caches treat every raw header string as a distinct cache key, fracturing hit rates into thousands of unshared entries.

Cloudflare's new Vary handling separates origin variation signals from edge cache partitioning. Instead of blindly caching on exact string matches, the edge can normalize known negotiation values (such as image format support or compression encodings) before looking up the cached object.

Configuring granular header normalization preserves cache efficiency while ensuring clients receive the exact representation they requested.
