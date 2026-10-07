---
title: Proprietary models lead in dynamic four-dimensional visual reconstruction benchmark
source: news
url: https://4dcodebench.com/
date: '2026-10-06'
tags:
- 3d-reconstruction
- 4dcodebench
- catchup
- elo-rating
- news
- visual-geometry
- vlm-as-judge
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49983646'
comments: https://news.ycombinator.com/item?id=49983646
why_read: Read this to understand how frontier multimodal models compare on complex
  appearance, geometry, and motion reconstruction tasks. You will learn how reasoning
  compute correlates with reconstruction quality across modern architectures.
authors:
- MichaelNolan
---

Evaluating vision-language models on static code generation captures only part of their spatial reasoning capabilities. 4DCodeBench introduces an empirical benchmark evaluating autonomous agents on dynamic inverse graphics tasks across 200 physical and simulated scenes.

The benchmark measures how effectively models reconstruct appearance, geometry, and temporal motion directly from video input. Using VLM-as-judge pairwise preferences aggregated into Elo ratings, the data reveals that increased token expenditure does not reliably yield higher reconstruction quality across models.

Frontier proprietary reasoning architectures like GPT-6 Astra and Claude Opus currently establish the Pareto frontier, whereas open-weight models struggle with temporal consistency and physical geometry.

Rigorous spatial benchmarks provide clear empirical insight into where vision reasoning models succeed and fail in real-world spatial environments.
