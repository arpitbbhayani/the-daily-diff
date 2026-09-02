---
title: Deduplicating files in uv wheel cache saves storage with minimal slowdown
source: github
url: https://github.com/astral-sh/uv/pull/21327
date: '2026-08-31'
tags:
- catchup
- file-deduplication
- github
- hardlinking
- performance-impact
- storage-optimization
- wheel-cache
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49506142'
comments: https://news.ycombinator.com/item?id=49506142
why_read: Read this to understand how file-level deduplication can optimize package
  caches like uv, learning about its mechanism and the trade-offs between storage
  savings and installation speed.
authors:
- charliermarsh
---

Optimizing package managers for speed and space is a dark art, but `uv` just made a brilliant move. Its latest update introduces file-level deduplication in the wheel cache.

Instead of just deduplicating entire wheels, `uv` now stores individual files under their BLAKE3 hash and hardlinks them back. This cuts cache size by approximately 10 percent, freeing up significant disk space.

The best part? This massive win in storage efficiency comes with a negligible performance hit: less than a 4 percent slowdown for cold installs, and no impact on warm installs. It is a fantastic example of a well-engineered trade-off.
