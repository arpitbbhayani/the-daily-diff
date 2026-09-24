---
title: npunlock enables custom C kernels on Intel Core Ultra NPUs
source: github
url: https://github.com/hsfzxjy/npunlock
date: '2026-09-22'
tags:
- c-programming
- catchup
- custom-kernels
- github
- graph-programming
- intel-npu
- meteor-lake
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49800513'
comments: https://news.ycombinator.com/item?id=49800513
why_read: This project offers a solution for developing custom C kernels on Intel
  Core Ultra NPUs, bypassing the default graph-level programming. Readers will learn
  how to unlock lower-level control for NPU development beyond the public stack.
authors:
- hsfzxjy
---

Intel's NPUs usually offer only graph-level programming, leaving low-level optimization inaccessible. 'Npunlock' changes that, empowering engineers to write and execute custom C kernels directly on Intel Core Ultra NPUs.

This project reconstructs the missing path, verified on Meteor Lake/NPU3720, allowing for granular control over the hardware. Imagine writing an FP32 GELU example in C and embedding it directly into an NPU graph for execution.

This is a significant breakthrough for anyone working on LLM infrastructure or applied AI where pushing hardware to its limits is critical. It opens up new avenues for performance optimization by bypassing higher-level abstractions and getting closer to the metal.
