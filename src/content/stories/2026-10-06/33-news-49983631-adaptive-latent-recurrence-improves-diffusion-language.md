---
title: Adaptive latent recurrence improves diffusion language model generation
source: news
url: https://alo-dlm.github.io/
date: '2026-10-06'
tags:
- adaptive-computation
- catchup
- diffusion-language-models
- latent-recurrence
- news
- parallel-decoding
- token-difficulty
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49983631'
comments: https://news.ycombinator.com/item?id=49983631
why_read: Read this to understand how dynamically allocating computational depth per
  token closes the quality gap between diffusion language models and autoregressive
  models.
authors:
- Liancheng Fang
- Zhuowei Li
- Youngeun Kim
- Tianchen Zhao
- Rajat Koner
- Jiaye Wu
- Linghan Xu
- Xuanbai Chen
- Xiang Xu
- Zheng Zhang
- Jakub Zablocki
- Nishant Sankaran
- Yifan Xing
---

Diffusion language models have long promised massive throughput gains by predicting tokens in parallel, but their quality has consistently lagged behind autoregressive transformers. The primary bottleneck is uniform compute: standard diffusion models spend identical computation on easily predicted tokens and difficult reasoning tokens.

ALoDLM addresses this by introducing token-adaptive latent recurrence. Instead of running a fixed-depth denoising pass across every position, the model refines representations in latent space dynamically based on token difficulty. High-confidence tokens commit early and feed back as discrete context, while harder tokens loop through recurrent passes for further refinement.

On benchmarks like GSM8K, this architectural shift allows an 8B diffusion model to hit 612 tokens per second in single-stream generation, compared to 229 tokens per second for vLLM running a standard autoregressive baseline, without degrading output quality.

Allocating compute where token uncertainty is highest turns out to be the missing link for practical non-autoregressive generation.
