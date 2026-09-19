---
title: Infinite-Parameter LLMs Adapt Weights from Live Data
source: hn
url: https://arxiv.org/abs/2609.18842
date: '2026-09-17'
tags:
- catchup
- hn
- hypernetwork
- infinite-parameter-llm
- live-data-adaptation
- mixture-of-experts
- online-learning
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49743483'
comments: https://news.ycombinator.com/item?id=49743483
why_read: This paper introduces Infinite-Parameter LLMs, a novel architecture that
  enables language models to learn and adapt their weights from live interaction data.
  Readers will understand how this approach overcomes the limitations of static pretraining
  and current prompt-based methods.
authors:
- Jinli Hu
- Ross M. Clarke
- Yichuan Zhang
- "Jos\xE9 Miguel Hern\xE1ndez-Lobato"
---

Traditional LLMs are frozen after pre-training, only adapting to live data through prompt engineering. But what if they could truly learn from every interaction? This new paper introduces the 'Infinite-Parameter LLM' architecture, a fascinating step towards that goal.

Instead of static weights, this model uses a compact hypernetwork to generate low-rank modulations of a base network, dynamically adapting its feed-forward weights from live data. It also carries a Bayesian belief over the generator's latent code, updating it online for continuous adaptation.

This approach moves beyond simply stuffing context into prompts, allowing the model to intrinsically update its knowledge and behavior in real-time. It is a paradigm shift for applied AI, especially for building genuinely adaptive agents that learn from experience. Imagine LLMs that truly evolve with every user interaction. This is a big leap forward in making AI systems more dynamic and context-aware.
