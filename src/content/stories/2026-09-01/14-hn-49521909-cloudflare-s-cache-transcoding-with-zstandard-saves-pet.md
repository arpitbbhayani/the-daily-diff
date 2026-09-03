---
authors:
- torutofu
comments: https://news.ycombinator.com/item?id=49521909
date: '2026-09-01'
depth_score: 8
hn_id: '49521909'
image: /infographics/14-hn-49521909.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- bandwidth-optimization
- cache-transcoding
- catchup
- hn
- lossless-compression
- pingora
- storage-optimization
- zstandard
title: Cloudflare's cache transcoding with Zstandard saves petabytes of storage
url: https://blog.cloudflare.com/cache-transcoding/
utility_score: 9
why_read: This article details how Cloudflare implemented Zstandard compression within
  their Pingora proxy to achieve petabytes of cache storage and significant bandwidth
  savings. Readers will learn about the practical application of data compression
  techniques for large-scale distributed systems and the associated CPU trade-offs.
---

Cloudflare is tackling the soaring costs of memory and storage head-on with an ingenious approach: cache transcoding. By encoding eligible assets with Zstandard inside their Pingora proxy before writing to disk, they are seeing average asset sizes shrink to one-third of their original, uncompressed form.

This design makes a smart trade-off: a minor, one-time increase in CPU cost during encoding pays dividends in petabytes of effective cache capacity and a substantial reduction in data transfer between data centers. The compressed form is maintained throughout the cache lifecycle, only decoded when served to the client.

This solution highlights a crucial lesson in scalable systems: optimizing at the right layer with the right tools can yield massive efficiencies. For engineers dealing with large-scale data storage and network costs, this is a blueprint for how to rethink cache infrastructure and achieve significant savings.

It is a powerful example of resourcefulness meeting system design.