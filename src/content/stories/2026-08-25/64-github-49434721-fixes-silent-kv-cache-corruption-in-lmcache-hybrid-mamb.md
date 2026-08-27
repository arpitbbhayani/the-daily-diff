---
title: Fixes silent KV-cache corruption in LMCache hybrid Mamba GDN models
source: github
url: https://github.com/dl4rce/lmcache-hybrid-gdn-restore-fix
date: '2026-08-25'
tags:
- catchup
- github
- kv-cache-persistence
- lmcache
- mamba-gdn-models
- silent-corruption
- vllm
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49434721'
comments: https://news.ycombinator.com/item?id=49434721
why_read: This document explains a critical fix for silent KV-cache persistence corruption
  in LMCache's hybrid Mamba/GDN models, ensuring data integrity during restarts. Readers
  will learn about the nature of the bug and the specific patch addressing it.
authors:
- dl4rce
---

Imagine your LLM KV-cache reporting a near-perfect 98% hit rate, yet silently returning corrupted data. This critical bug in LMCache, a vLLM KV-cache persistence solution, was causing precisely that for hybrid Mamba/GDN + full-attention models.

The issue was incredibly subtle: LMCache's disk-tier store-restore cycle only persisted about 4% of the full-attention KV cache per chunk, despite reporting high hit rates upon restore. This meant models were effectively inferring with partial, incorrect context, leading to silent degradation.

This repository provides a verified patch and a deep technical narrative explaining the root cause. It highlights the complex interactions between advanced model architectures and caching mechanisms, showing how easily subtle bugs can evade detection in complex AI infrastructure.

For anyone running vLLM with LMCache and hybrid models, understanding and applying this fix is crucial to avoid silent data corruption and ensure the reliability and integrity of your LLM inference pipeline. It is a stark reminder that even high cache hit rates do not always guarantee correct data.
