---
title: "Achieving 11\u201316x faster LLM inference in macOS VMs on Apple Silicon"
source: github
url: https://github.com/trycua/cua/blob/main/blog/gpu-passthrough-macos-vms.md
date: '2026-08-11'
tags:
- apple-silicon
- catchup
- github
- gpu-optimization
- llama-cpp
- llm-inference
- macos-virtualization
- metal-api
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49259339'
comments: https://news.ycombinator.com/item?id=49259339
why_read: Readers will learn how a specialized compatibility layer dramatically improves
  LLM inference speed in macOS virtual machines running on Apple Silicon. This provides
  a deep understanding of optimizing virtualized GPU performance for applications
  like llama.cpp.
authors:
- Francesco Bonacci
- Johnny Franks
---

Getting serious LLM inference speed on Apple Silicon can be tricky, especially within macOS virtual machines. But one team found a brilliant way to unlock 11-16x faster performance with `llama.cpp`.

The key insight was realizing that macOS guest VMs, via Apple's Virtualization.framework, report conservative Metal capability profiles. This prevented `llama.cpp` from selecting its most optimized GPU kernels, leading to much slower execution.

Their solution involved building a small, process-scoped compatibility layer. This layer intercepts and changes the reported capability answers for the `llama.cpp` process within the VM. It effectively tricks `llama.cpp` into believing it has more advanced Metal capabilities, allowing it to select and utilize highly optimized kernels.

This is not just a benchmark improvement; it is a practical, low-level engineering hack that makes local LLM development significantly more efficient for Apple Silicon users. It showcases how understanding the nuances of virtualization and graphics APIs can lead to profound performance gains.

For any engineer optimizing LLM workflows on Apple hardware, this method provides a valuable lesson in deep system-level tuning.
