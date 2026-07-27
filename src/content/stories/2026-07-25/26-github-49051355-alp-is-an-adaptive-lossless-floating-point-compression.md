---
authors:
- Azim Afroozeh
- Leonardo Kuffó
- Peter Boncz
comments: https://news.ycombinator.com/item?id=49051355
date: '2026-07-25'
depth_score: 8
hn_id: '49051355'
image: /infographics/26-hn-49051355.jpg
interest_score: 8
novelty_score: 8
section: databases
source: github
tags:
- catchup
- data-compression
- floating-point-compression
- github
- ieee-754
- lossless-compression
title: ALP is an adaptive lossless floating-point compression algorithm
url: https://github.com/cwida/ALP
utility_score: 8
why_read: Read this to understand a state-of-the-art lossless compression algorithm
  for floating-point data. It explains how ALP exploits common patterns like decimal
  floating-point numbers for efficient encoding.
---

Lossless compression for floating-point numbers usually feels like a dark art, but the new ALP algorithm, presented at SIGMOD 2024, shows how targeted design can yield massive wins.

This is not just another compression scheme; it specifically targets the peculiar patterns in real-world IEEE 754 floating-point values. One of the key insights is how often real-world floats are actually decimal numbers that can be precisely represented. By mapping these into integers and then compressing them, ALP achieves state-of-the-art efficiency. This means smaller datasets on disk and potentially faster I/O.

For any senior engineer dealing with large numerical datasets in databases, analytics, or scientific computing, understanding these internals can unlock significant performance and storage savings. This is a practical deep dive into how data representation choices matter at scale.

This is exactly the kind of clever optimization that drives real-world system improvements.