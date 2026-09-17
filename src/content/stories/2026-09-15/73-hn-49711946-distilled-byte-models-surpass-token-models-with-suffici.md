---
authors:
- Kalyani Marathe
- Artidoro Pagnoni
- Tomasz Limisiewicz
- Margaret Li
- Mike Lewis
- Luke Zettlemoyer
- Srinivasan Iyer
comments: https://news.ycombinator.com/item?id=49711946
date: '2026-09-15'
depth_score: 8
hn_id: '49711946'
image: /infographics/73-hn-49711946.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- byte-models
- catchup
- distillation
- hn
- scaling-laws
- token-models
- transformer-models
title: Distilled byte models surpass token models with sufficient compute
url: https://arxiv.org/abs/2609.12303
utility_score: 7
why_read: This paper presents a large-scale study on the scaling trends of distilled
  byte and token models, demonstrating that byte models ultimately achieve higher
  performance ceilings with more compute. Readers will learn about novel methods for
  converting token logits to byte logits and the comparative advantages of byte models
  in high-compute regimes.
---

Are you hitting a "token ceiling" with your language models? New research on distilling smaller, stronger byte models suggests we might be underestimating their potential.

This arXiv paper introduces methods like "Marginalize-It" and "End-Of-Token" to efficiently convert token logits to byte logits. Their large-scale study reveals that while byte models start slower, they eventually surpass token models with more compute, achieving higher downstream task performance.

Crucially, these byte models also exhibit greater data efficiency, matching token model performance with less data. This challenges conventional wisdom and offers a promising path for building more performant and efficient LLMs.