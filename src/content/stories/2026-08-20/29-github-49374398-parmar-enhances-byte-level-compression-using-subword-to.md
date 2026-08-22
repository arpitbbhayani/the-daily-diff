---
title: Parmar enhances byte-level compression using subword tokenization
source: github
url: https://github.com/shallowbyte/parmar
date: '2026-08-20'
tags:
- byte-level-compression
- catchup
- compression-performance
- github
- lzma2
- subword-tokenization
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49374398'
comments: https://news.ycombinator.com/item?id=49374398
why_read: Learn how parmar, a subword-tokenization pre-filter, significantly boosts
  byte-level compression efficiency for formats like LZMA2. Understand its reported
  performance gains and the context of its development as a robust, tested project.
authors:
- shallowbyte
---

Achieving better compression often means trade-offs between ratio and speed. This project, Parmar, introduces a clever approach by using subword tokenization as a pre-filter for standard byte-level compressors like LZMA2.

The results are compelling: it boosts compression by 7-9.6% over raw bytes and, surprisingly, makes the process faster. This is not just an incremental tweak; it is a smart combination of techniques from natural language processing applied to fundamental system design.

If your systems handle large text corpora, understanding this method could lead to significant optimizations in data storage and transmission efficiency. It demonstrates how interdisciplinary ideas can yield substantial engineering improvements.
