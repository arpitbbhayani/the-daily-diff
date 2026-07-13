---
title: Latent Personality Alignment offers robust LLM safety from harm-agnostic data
source: arxiv
url: http://arxiv.org/abs/2607.07918v1
date: '2026-07-08'
tags:
- adversarial-attacks
- arxiv
- catchup
- cs.AI
- cs.CL
- cs.CR
- cs.LG
- jailbreak-attacks
- large-language-models
- latent-personality-alignment
- llm-safety
- psychometric-personality
- robustness
arxiv_id: '2607.07918'
categories: cs.LG, cs.AI, cs.CL, cs.CR
why_read: This paper introduces Latent Personality Alignment, a novel and efficient
  method to robustly defend large language models against adversarial and jailbreak
  attacks. You will learn how using harm-agnostic personality statements can achieve
  high safety without compromising utility or requiring extensive harmful training
  data.
authors:
- Mohamed Amine Merzouk
- Nolan Smyth
- Damiano Fornasiere
- Linh Le
- David Williams-King
- Adam Oberman
---

Current LLM safety methods are frequently vulnerable to adversarial attacks, demanding better defenses. This paper introduces Latent Personality Alignment (LPA), a highly efficient and robust approach.

LPA replaces explicit harm refusal training with adversarial training on just 66 harm-agnostic statements drawn from psychometric personality literature. The core idea is that stabilizing personality-anchored representations implicitly constrains the subspace exploited by jailbreak attacks.

The results are striking: LPA achieves near-zero attack success rates on HarmBench across five jailbreak methods, *without* ever seeing harmful content during training and *without* performance loss on standard benchmarks. The training itself is lightweight, completing in minutes on a single GPU using 75 times fewer examples than standard methods.

This is a monumental step forward for robust LLM safety, demonstrating that deep, implicit alignment can be achieved with remarkable efficiency and generalization.
