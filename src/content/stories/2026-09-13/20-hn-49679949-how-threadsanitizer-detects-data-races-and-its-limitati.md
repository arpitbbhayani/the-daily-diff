---
title: How ThreadSanitizer detects data races and its limitations
source: hn
url: https://theconsensus.dev/p/2026/09/06/data-races-and-the-limits-of-threadsanitizer-in-c-and-go.html
date: '2026-09-13'
tags:
- catchup
- concurrency
- data-race
- hn
- race-detection
- threadsanitizer
- vector-clocks
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49679949'
comments: https://news.ycombinator.com/item?id=49679949
why_read: Read this to understand what a data race is and how race detectors like
  ThreadSanitizer work. You will gain insight into the mechanisms of race detection,
  including algorithms like FastTrack, and learn about the inherent limitations of
  these tools.
authors:
- Phil Eaton
---

Data races are insidious bugs in concurrent systems. This deep dive into ThreadSanitizer (TSan) in C and Go explains not just what data races are, but how a race detector like TSan actually works under the hood and its practical limitations.

The article dissects the evolution of TSan's algorithms, including insights from FastTrack, and even provides an idealized interpreter for multi-threaded C code to illustrate the concepts. This is critical knowledge for any engineer building high-performance, concurrent applications.

Understanding TSan's capabilities and its boundaries is not just academic; it directly informs how you approach testing, debugging, and ultimately, ensuring the correctness and reliability of your concurrent codebases.
