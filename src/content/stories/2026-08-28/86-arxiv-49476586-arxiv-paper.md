---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49476586
date: '2026-08-28'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
arxiv_id: '49476586'
categories: ''
why_read: You will learn about a critical statistical pitfall in evaluating LLM judges
  or any system using bounded rating scales, helping you design more robust and accurate
  AI experiments and avoid misleading conclusions.
---

Many evaluations of LLM judges rely on a statistical technique called Difference-in-Differences (DiD), often applied to bounded rating scales. This paper reveals a critical flaw: this method can actually manufacture an effect, leading to spurious conclusions about LLM performance or bias.

The problem arises because each term of the double difference is "censored" by its own share on the bounded scale. This means the observed statistic conflates differential preference with differential attenuation. A severity shift common to both responses can create an interaction, especially when distances from the bounds are unequal.

This is not a minor detail. The authors demonstrate this failure within a pre-registered audit of an LLM judge, showing how a nominally significant interaction was largely reproduced from just the observed severity shift and scale floor. This highlights that "more data" or "more complex models" will not fix fundamental methodological flaws in your evaluation.

Understanding this pitfall is essential for anyone designing or interpreting LLM benchmarks.
