---
title: Pipelining local language model inference between Mac and iPhone
source: github
url: https://github.com/StayLameBro/backburner
date: '2026-10-03'
tags:
- catchup
- context-window
- distributed-inference
- github
- gpu-offloading
- llama-cpp
- pipelined-inference
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49941620'
comments: https://news.ycombinator.com/item?id=49941620
why_read: Learn how to offload layer computation and attention caching to a tethered
  iPhone over USB-C, achieving faster prompt prefill and expanded context windows
  for local 27B models.
authors:
- StayLameBro
---

Running large language models locally on consumer hardware usually hits hard memory and compute ceilings. Backburner introduces a practical solution by offloading inference layers from a Mac to a connected iPhone over a standard 10 Gb/s USB-C cable.

During prompt evaluation, the system splits model computation across devices. The Mac executes layers 1 through 40 while the iPhone GPU handles layers 41 through 64 in a pipelined fashion. This architecture delivers a 29 to 44 percent speedup during prefill for contexts between 16k and 48k tokens.

Memory management is also extended past standard local limits. The Mac retains the recent context while the iPhone stores older attention keys and values, running attention passes across its GPU and Neural Engine to support up to 140k tokens.

Distributing inference across local peripheral devices offers a compelling blueprint for squeezing maximum performance out of heterogeneous consumer hardware.
