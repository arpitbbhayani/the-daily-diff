---
title: Generative modeling of adversarial suffixes enables universal jailbreaking
  across models
source: hn
url: https://arxiv.org/abs/2404.07921
date: '2026-09-29'
tags:
- adversarial-suffixes
- catchup
- greedy-coordinate-gradient
- hn
- jailbreaking
- llm-safety
- transferable-attacks
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49898157'
comments: https://news.ycombinator.com/item?id=49898157
why_read: Read this to understand how generative models can capture the distribution
  of adversarial suffixes from intermediate optimization steps to rapidly jailbreak
  open- and closed-source language models.
authors:
- Zeyi Liao
- Huan Sun
---

Standard discrete optimization attacks against LLMs focus entirely on finding a single suffix with the lowest possible loss. This approach discards intermediate adversarial tokens that were already potent enough to bypass alignment guardrails.

AmpleGCG captures the underlying distribution of successful adversarial suffixes collected during optimization. It trains a dedicated generative model that produces hundreds of functional jailbreaks in seconds rather than running costly per-query token searches.

The resulting generative attack demonstrates near 100 percent transferability across open weights like Llama-2 and closed models like GPT-3.5. For teams building red-teaming harnesses and evaluating defensive prompts, relying on static suffix filters or simple perplexity checks will fail against parameterized suffix generators.
