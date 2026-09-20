---
title: Provider-Side Token Inflation Attacks increase LLM costs and are auditable
source: hn
url: https://arxiv.org/abs/2609.20370
date: '2026-09-18'
tags:
- black-box-audit
- catchup
- hn
- llm-services
- provider-side-attack
- stopping-behavior
- token-inflation
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49751033'
comments: https://news.ycombinator.com/item?id=49751033
why_read: This paper reveals how LLM providers can covertly inflate token output to
  increase user costs and defines this as a Provider-Side Token Inflation Attack.
  Readers will learn about the feasibility of such attacks and a novel, lightweight
  audit method to detect them in black-box LLM services.
authors:
- Leilei Chen
- Lan Zhang
- Chen Tang
- Pengcheng Sun
- Jiewei Lai
- Yixiao Huang
- Zhaopeng Zhang
- Xinpeng Shen
---

Are you paying more for your LLM API calls than you should be? A new paper uncovers "Provider-Side Token Inflation Attacks" (PTIA), where LLM services covertly lengthen model outputs, increasing your token count and thus your bill, all while maintaining the task's utility.

These attacks can inflate output length by over 10 times. The researchers observed a "saturation" effect where an initial attack sharply lowers the end-of-sequence token probability, and used this insight to develop a lightweight, single-probe audit method.

This black-box audit allows users to detect PTIA without a trusted local model or historical data, providing a practical way to ensure you are only paying for the necessary compute and output from your LLM providers.
