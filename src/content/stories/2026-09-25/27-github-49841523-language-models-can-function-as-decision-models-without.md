---
title: Language models can function as decision models without specific training
source: github
url: https://github.com/ntlm1686/Your-language-model-is-already-a-decision-model/tree/master
date: '2026-09-25'
tags:
- benchmarking
- catchup
- decision-models
- fine-tuning
- github
- jev
- language-models
- next-token-probabilities
- qwen
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49841523'
comments: https://news.ycombinator.com/item?id=49841523
why_read: This text demonstrates how large language models can inherently serve as
  decision models by utilizing next-token probabilities, eliminating the need for
  decision-specific training. Readers will gain insight into empirical comparisons
  across various benchmarks between Qwen3.5-9B and Jev, showcasing their performance
  without additional fine-tuning.
authors:
- ntlm1686
---

A fascinating insight from new research: your language model is already a capable decision model, right out of the box. Engineers can leverage LLMs for agentic behavior simply by interpreting their next-token probabilities as action selection probabilities.

The remarkable finding is that this works without any decision-specific training, fine-tuning, or a dedicated decision head. This dramatically simplifies the architecture and deployment of AI agents.

This approach achieved results comparable to specialized models like Jev across several benchmarks, including WebShop tasks. It means you can unlock advanced agent capabilities from existing foundation models, drastically cutting down development time and computational overhead.
