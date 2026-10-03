---
title: Selective context expansion preserves accuracy in compressed visual text
source: hn
url: https://huggingface.co/papers/2605.07019
date: '2026-09-23'
tags:
- catchup
- document-understanding
- hn
- selective-expansion
- vision-language-models
- visual-text-compression
- visual-tokens
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49822186'
comments: https://news.ycombinator.com/item?id=49822186
why_read: Read this paper to understand how selective visual expansion enables vision-language
  models to process heavily compressed text images without losing critical task accuracy.
authors:
- Roy Xie
- Dan Friedman
- Donghan Yu
- Bowen Pan
- Christopher Fifty
- Jang-Hyun Kim
- Xianzhi Du
- Zhe Gan
- Vivek Rathod
- Bhuwan Dhingra
image: /infographics/10-hn-49822186.jpg
---

Vision-language models can process text rendered as images to bypass long token sequences, but visual compression usually destroys text legibility at low resolutions.

LensVLM introduces a selective context expansion framework that treats rendered documents as compressed images and employs learned expansion tools to zoom into relevant regions on demand.

Operating on top of a 9B parameter base model, this selective scanning mechanism matches full-text accuracy upper bounds while achieving a 4.3x effective compression ratio. It maintains strong performance across document question-answering and code understanding benchmarks up to a 10.1x compression ratio.

Treating context management as a dynamic resolution trade-off offers a practical path toward reducing token ingestion costs in high-volume document pipelines.
