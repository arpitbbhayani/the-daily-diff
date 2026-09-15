---
title: MoBA enhances long-context LLMs with block attention
source: hn
url: https://arxiv.org/abs/2502.13189
date: '2026-09-13'
tags:
- attention-mechanisms
- block-attention
- catchup
- computational-complexity
- hn
- long-context-llms
- mixture-of-experts
- sparse-attention
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49687552'
comments: https://news.ycombinator.com/item?id=49687552
why_read: Read this paper to understand MoBA, an innovative attention mechanism for
  long-context LLMs. It combines Mixture of Experts with block attention to enhance
  efficiency and performance without imposing strong structural biases.
authors:
- Enzhe Lu
- Zhejun Jiang
- Jingyuan Liu
- Yulun Du
- Tao Jiang
- Chao Hong
- Shaowei Liu
- Weiran He
- Enming Yuan
- Yuzhi Wang
- Zhiqi Huang
- Huan Yuan
- Suting Xu
- Xinran Xu
- Guokun Lai
- Yanru Chen
- Huabin Zheng
- Junjie Yan
- Jianlin Su
- Yuxin Wu
- Neo Y. Zhang
- Zhilin Yang
- Xinyu Zhou
- Mingxing Zhang
- Jiezhong Qiu
---

Scaling LLMs to genuinely long contexts often hits a wall due to the quadratic complexity of traditional attention mechanisms. This new arXiv paper introduces MoBA, or Mixture of Block Attention, and it is a game-changer for LLM infrastructure.

MoBA takes the Mixture of Experts (MoE) paradigm and applies it directly to the attention mechanism itself. This allows for a flexible, less-biased structure where the model intelligently decides what to attend to, effectively transitioning between full and sparse attention as needed.

The results are significant: superior performance on long-context tasks and enhanced efficiency. Crucially, this is not just theoretical; MoBA is already deployed to power long-context requests for Kimi, demonstrating its practical utility and impact on applied AI.
