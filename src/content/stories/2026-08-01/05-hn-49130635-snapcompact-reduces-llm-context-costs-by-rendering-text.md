---
authors:
- mji
comments: https://news.ycombinator.com/item?id=49130635
date: '2026-08-01'
depth_score: 8
hn_id: '49130635'
image: /infographics/05-hn-49130635.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- cost-reduction
- hn
- image-encoding
- llm-benchmarking
- llm-context-window
- snapcompact
- token-efficiency
title: Snapcompact reduces LLM context costs by rendering text as images
url: https://stencil.so/blog/snapcompact
utility_score: 9
why_read: This explains how to significantly reduce costs and expand context windows
  for large language models by converting text to images, offering a practical solution
  for efficiency.
---

Using images to compress text for LLMs sounds like a bizarre hack, but it is proving to be a game-changer for token costs and context limits. Snapcompact renders large text contexts into dense pixel-font bitmaps, then feeds those images to multi-modal LLMs.

The results are astonishing. Benchmarks show a third of the input price while maintaining F1 parity, effectively extending your context window by nearly four times. It turns out "a picture is worth a thousand words" is literally true for some LLMs.

This technique challenges conventional wisdom about how LLMs consume information. If you are building AI agents or applications, this is not just a clever trick; it is a practical, production-ready blueprint for cutting infrastructure costs and pushing the boundaries of what your models can process.