---
title: Puro-2B enables cost-efficient large language model pretraining
source: hn
url: https://arxiv.org/abs/2608.27370
date: '2026-09-01'
tags:
- catchup
- consumer-gpus
- cost-efficiency
- cost-scaling-law
- curriculum-model-averaging
- hn
- hyperball-optimization
- llm-pretraining
- low-precision-training
- open-source-recipe
- puro-2b
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49521117'
comments: https://news.ycombinator.com/item?id=49521117
why_read: This report presents a novel, cost-efficient open pretraining recipe for
  large language models. Readers will learn how to train capable LLMs from scratch
  on consumer-grade hardware for under $7K and understand the techniques enabling
  this.
authors:
- Kairong Luo
- Jiarui Cui
- Yaorui Yin
- Shengqi Chen
- Yiming Yang
- Linxiang Gao
- Yanmohan Wang
- Mingzhe Zhang
- Kaiyue Wen
- Kaifeng Lyu
- Wenguang Chen
---

Pretraining competitive language models usually demands astronomical budgets, putting it out of reach for most. But this new paper, "Puro-2B," shatters that barrier by introducing a cost-efficient open pretraining recipe.

They trained a 1.5B parameter model, Puro-2B, on consumer-grade RTX 5090 GPUs for less than $6.9K, achieving performance comparable to Qwen2.5-1.5B. This was made possible through a smart combination of hardware selection, FP8 low-precision training, hyperball optimization, and curriculum model averaging.

This work is a blueprint for anyone looking to build performant LLMs on a budget, providing not just the recipe but also a "Puro Cost Scaling Law" to guide future cost-optimized training efforts. It is a significant step towards democratizing LLM development.
