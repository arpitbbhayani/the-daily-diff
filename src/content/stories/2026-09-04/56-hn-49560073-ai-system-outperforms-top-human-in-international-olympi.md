---
title: AI system outperforms top human in International Olympiad in Informatics
source: hn
url: https://arxiv.org/abs/2609.02849
date: '2026-09-04'
tags:
- catchup
- competitive-programming
- gen-correct
- hn
- human-level-ai
- large-language-models
- reinforcement-learning
- supervised-fine-tuning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49560073'
comments: https://news.ycombinator.com/item?id=49560073
why_read: This paper showcases an AI system that achieves gold-medal performance and
  outperforms top human contestants in competitive programming. Readers will learn
  about the specialized pipeline and strategies like GenCorrect that enable large
  language models to excel in complex coding challenges.
authors:
- Aleksander Ficek
- Sean Narenthiran
- Mehrzad Samadi
- Somshubra Majumdar
- Boris Ginsburg
---

The quest for AI that can truly code at an expert level just took a huge leap. Researchers have developed an end-to-end pipeline that enables LLMs to achieve gold-medal performance in international coding competitions like IOI, even outscoring the top human contestant.

This is not just about raw model size. The paper outlines a comprehensive post-training strategy involving large-scale problem curation, synthetic reasoning traces, supervised fine-tuning, and reinforcement learning. Crucially, they introduce "GenCorrect," a feedback-driven test-time compute strategy that iteratively generates, evaluates, and refines solutions.

For senior engineers building applied AI systems or coding agents, this work offers concrete insights into pushing LLM capabilities for complex problem-solving. It demonstrates that strategic pipeline design and sophisticated test-time reasoning can unlock unprecedented performance, moving beyond just better base models to smarter application of existing models.
