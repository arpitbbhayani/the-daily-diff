---
authors:
- Bowen Wang
- Chi Zhang
- Diyou Shen
- Renzo Andri
- Navaneeth Kunhi Purayil
- Luca Benini
comments: https://news.ycombinator.com/item?id=49117065
date: '2026-07-30'
depth_score: 9
hn_id: '49117065'
image: /infographics/10-hn-49117065.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- hn
- indexed-accumulation
- rvv
- sparse-tensor-contractions
- transformer-inference
- vector-processors
- ventaglio
title: Ventaglio unit drives sparse tensor contractions to roofline performance
url: https://arxiv.org/abs/2607.25504
utility_score: 8
why_read: This paper introduces Ventaglio, a new hardware unit and RVV ISA extension,
  that significantly accelerates sparse tensor contractions on vector processors for
  Transformer inference. Readers will understand how Ventaglio achieves roofline performance
  by supporting indexed gather-accumulate-scatter operations.
---

Achieving roofline performance for sparse tensor contractions in Transformer inference on vector processors is incredibly challenging. Existing RVV architectures lack native support, forcing reliance on software-indexed memory operations that fall far short of theoretical limits.

A new paper introduces Ventaglio, a runtime-configurable sparse execution unit with custom RVV ISA extensions. This novel hardware approach enables indexed gather-accumulate-scatter operations, pushing sparse tensor contractions much closer to their roofline.

The results are impressive: Ventaglio accelerates sparse tensor contraction kernels by 6.9-7.4x over optimized RVV baselines, with only a 3.1% area overhead for a tightly-L1 coupled vector processing cluster. This is a game-changer for efficient LLM inference at the hardware level.