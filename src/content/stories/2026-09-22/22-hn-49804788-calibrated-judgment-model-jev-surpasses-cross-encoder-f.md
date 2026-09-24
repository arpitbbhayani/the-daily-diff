---
title: Calibrated judgment model Jev surpasses cross-encoder for agent memory selection
source: hn
url: https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/
date: '2026-09-22'
tags:
- ai-agent
- catchup
- cross-encoder
- evaluation-metrics
- hn
- jev
- memory-selection
- production-system
- reranking
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49804788'
comments: https://news.ycombinator.com/item?id=49804788
why_read: This post provides a detailed production comparison between Jev, a calibrated
  judgment model, and a cross-encoder reranker for agent memory selection. Readers
  will learn how Jev significantly improved precision, recall, and appropriate silence
  at no additional cost or latency.
authors:
- Morteza Milani
---

Running AI agents in production means every decision point is a cost and a quality lever. Unblocked shared how they swapped a cross-encoder with a custom 'calibrated judgment model' called Jev for their agent's memory selection, and the results are compelling.

They did not trust their own logs. Instead, they built a robust evaluation dataset of 12,927 labeled question/note pairs, judged blindly. Jev significantly outperformed the cross-encoder on precision, recall, and crucially, knowing when to stay silent when no relevant information existed. All at the same cost.

One surprising finding was that prompt tuning had minimal impact compared to simply sweeping the confidence threshold. This highlights a critical lesson for applied AI: the scaffolding and evaluation mechanics around the model often matter more than minor prompt tweaks. If you are building agentic systems, this deep dive into real-world evaluation and optimization is essential. You learn from actual production data.

This is not just about a new model, it is about engineering rigor in applied AI.
