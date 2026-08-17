---
title: Visualize Go Allocator and GC Activity Live
source: github
url: https://github.com/MichaelMure/gogc98
date: '2026-08-15'
tags:
- catchup
- flight-recorder
- garbage-collection
- github
- go-allocator
- runtime-tracing
- visualization
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49309370'
comments: https://news.ycombinator.com/item?id=49309370
why_read: Read this to understand how gogc98 visualizes Go's allocator and garbage
  collector by leveraging runtime tracing and flight recorder snapshots. You will
  learn how this tool provides a live model of the Go heap, making complex memory
  management visible and understandable.
authors:
- MichaelMure
---

Seeing your Go program's memory allocation and garbage collection in real-time is a game-changer for performance optimization. Gogc98, a new open-source tool, brings the nostalgic feel of a Windows 98 defragmenter to your Go heap.

It works by leveraging Go's existing runtime tracing capabilities via the GODEBUG environment variable and the flight recorder. Gogc98 acts as a bridge, polling trace snapshots and decoding allocation, free, and GC events to render a live, interactive model of the heap in a browser.

This is not just a fancy animation; it provides direct, actionable insights. You can identify memory leaks, understand fragmentation, and pinpoint inefficient allocation patterns that impact latency and throughput. A visual representation often surfaces issues that raw trace logs might obscure.

For any Go engineer serious about profiling and optimizing their services, this tool offers a uniquely intuitive way to observe the often-invisible dance between your code and the Go runtime. Get a clearer picture of your memory footprint.
