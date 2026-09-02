---
title: Is the New Go JSON API Twice as Fast or Slower
source: hn
url: https://lemire.me/blog/2026/08/29/the-new-go-json-api-twice-as-fast-or-1-5x-slower/
date: '2026-08-31'
tags:
- catchup
- go-json-api
- hn
- performance-comparison
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49508943'
comments: https://news.ycombinator.com/item?id=49508943
why_read: This article analyzes the performance claims of the new Go JSON API, revealing
  whether it is truly faster or surprisingly slower. Readers will gain insight into
  its real-world performance implications.
authors:
- Daniel Lemire
---

The new Go JSON API (`json/v2`) is not a universal speed-up. Benchmarking reveals that while it delivers up to 2x faster performance in some parsing scenarios, it can actually be 1.5x slower in others, specifically when dealing with smaller inputs where setup overhead dominates.

This nuanced performance profile stems from its reliance on `io.Reader` and its optimized approach for larger data streams. The takeaway is critical for any senior engineer: new does not always mean unequivocally better, and understanding the implementation's trade-offs is crucial.

Dive into the benchmarks to see exactly where to expect gains and where to stick with the old `encoding/json` or consider alternatives. Your Go application's performance depends on knowing these specifics.
