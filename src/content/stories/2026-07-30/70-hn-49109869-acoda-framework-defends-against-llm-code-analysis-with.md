---
authors:
- Hongzhou Rao
- Zikan Dong
- Yanjie Zhao
- Haodong Li
- Haoyu Wang
comments: https://news.ycombinator.com/item?id=49109869
date: '2026-07-30'
depth_score: 8
hn_id: '49109869'
image: /infographics/70-hn-49109869.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- adversarial-attacks
- catchup
- code-obfuscation
- hn
- intellectual-property
- large-language-models
title: Acoda framework defends against LLM code analysis with obfuscation
url: https://arxiv.org/abs/2606.11755
utility_score: 7
why_read: Learn how Acoda, a genetic algorithm-based framework, obfuscates code to
  defend against LLM-based analysis. Understand its effectiveness in preventing LLMs
  from interpreting source code.
---

Are your LLMs getting too good at code analysis? This paper reveals a novel adversarial code obfuscation framework, Acoda, designed to combat LLM-based understanding and prevent intellectual property leakage.

Acoda leverages a genetic algorithm and eight semantics-preserving obfuscation methods to strategically confuse LLMs. The results are striking: it achieves an attack success rate of up to 70% against seven state-of-the-art LLMs, including GPT-4o, DeepSeek, and Llama.

This is not just academic; it has direct implications for securing proprietary code when LLMs are increasingly used for tasks like vulnerability detection and code explanation. Understanding these adversarial techniques is crucial for anyone building or relying on LLM-powered code analysis tools. It highlights a critical, emerging defense vector in the age of AI-powered software engineering.