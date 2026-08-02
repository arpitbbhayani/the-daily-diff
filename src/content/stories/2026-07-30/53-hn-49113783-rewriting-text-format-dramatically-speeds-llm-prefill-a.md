---
authors:
- targetbridge
comments: https://news.ycombinator.com/item?id=49113783
date: '2026-07-30'
depth_score: 8
hn_id: '49113783'
image: /infographics/53-hn-49113783.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- cpu-inference
- hn
- llama-cpp
- llm-prefill
- performance-optimization
- text-formatting
title: Rewriting text format dramatically speeds LLM prefill and improves accuracy
url: https://swellweb.github.io/reame/bytes/
utility_score: 9
why_read: This article demonstrates how simply reformatting input text can drastically
  improve LLM prefill speed and accuracy on CPU, outperforming engine optimizations
  or coarser quantizations. Readers will learn a counter-intuitive approach to optimize
  LLM performance by focusing on input data representation.
---

Optimizing LLM inference on CPU usually involves digging into the engine, but a recent finding shows the real bottleneck might be your prompt's format. Restructuring a prompt into a simple "fact sheet" layout, with label: value pairs, was measured to be 6.5 times faster for prefill and, surprisingly, led to *higher* accuracy.

This counter-intuitive result demonstrates that fewer tokens do not necessarily mean less information or worse answers. The LLM was not getting smarter with more raw text; it was getting more signal from the structured, compressed input. This is a game-changer for those running LLMs on resource-constrained hardware.

The lesson here is clear: context engineering is critical. Prioritizing structured, concise input over verbose prose can unlock significant performance gains and even improve the quality of responses.