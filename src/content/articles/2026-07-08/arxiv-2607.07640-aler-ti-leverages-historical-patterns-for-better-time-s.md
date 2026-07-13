---
title: ALER-TI Leverages Historical Patterns for Better Time Series Imputation
source: arxiv
url: http://arxiv.org/abs/2607.07640v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.LG
- historical-patterns
- latent-embedding-alignment
- model-agnostic
- retrieval-augmentation
- time-series-imputation
arxiv_id: '2607.07640'
categories: cs.LG, cs.AI
why_read: This paper introduces ALER-TI, a novel, retrieval-augmented framework for
  time series imputation that leverages historical patterns. Readers will learn how
  its Latent Embedding Alignment method helps reconstruct missing values more reliably
  by supplementing limited local context.
authors:
- Xuan-Thong Truong
- Trung-Kien Le
- Tung Kieu
- Thi-Thu Nguyen
- Nhat-Hai Nguyen
---

Time series imputation is notoriously hard, especially with non-stationary data or infrequent patterns that local context cannot capture. ALER-TI introduces a powerful retrieval-augmented framework that uses "Latent Embedding Alignment" to overcome this. It aligns corrupted queries with complete historical candidates in the latent space, allowing for efficient retrieval and significantly better missing-value reconstruction. This model-agnostic approach consistently improves baselines on six real-world datasets, offering a robust solution for enhancing data quality in applied AI.
