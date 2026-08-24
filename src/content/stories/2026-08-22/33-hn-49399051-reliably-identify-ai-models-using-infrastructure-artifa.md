---
title: Reliably identify AI models using infrastructure artifacts, not prompts
source: hn
url: https://openrating.io/blog/current-state-of-ai-model-fingerprinting
date: '2026-08-22'
tags:
- ai-model-fingerprinting
- catchup
- hn
- infrastructure-artifacts
- prompt-identification
- serving-stack
- tokenizer-vocabularies
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49399051'
comments: https://news.ycombinator.com/item?id=49399051
why_read: This text explains why prompt-based AI model identification is unreliable
  and introduces a method to deterministically fingerprint AI models. Readers will
  learn a robust approach to identify models by inspecting their underlying infrastructure
  artifacts.
authors:
- m00dy
---

Trying to identify the actual LLM behind an API? Stop trusting prompt responses; models can easily lie. This post reveals how to fingerprint AI models using 'infrastructure artifacts' that are much harder to fake.

It dives into analyzing tokenizer vocabularies, examining BPE merge behaviors, CJK segmentation, and even how emojis are tokenized. These low-level details, along with hidden inference engine characteristics, are rigid and unique to each model's serving stack.

This is incredibly practical for anyone evaluating third-party LLM providers or building robust AI systems. You will learn to bypass persona and tone to uncover the true model powering an endpoint.
