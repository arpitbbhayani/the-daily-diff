---
authors:
- Mateo Lafalce
comments: https://news.ycombinator.com/item?id=49770066
date: '2026-09-19'
depth_score: 8
hn_id: '49770066'
image: /infographics/27-hn-49770066.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- hn
- local-ai
- lora
- model-training
- pretrained-encoder
- structured-responses
- system-one-model
title: Building a System One Model for Direct Structured Responses
url: https://twitter.com/lafalcemateo/status/2101414901365248059
utility_score: 8
why_read: This text details the creation of a System One model designed to produce
  structured responses efficiently without traditional autoregressive decoding. Readers
  will learn about its architecture, specific training stages, and how it leverages
  primitives for direct output.
---

Building efficient AI models does not always require massive GPU clusters. This engineer successfully developed a local, open-weight 'System One' specialist model for short English text on a consumer-grade RTX 3070, pushing the boundaries of what is possible on limited hardware.

The key insight is moving beyond autoregressive decoding for structured responses. By using a ModernBERT-base encoder with LoRA adapters and a dedicated decision head, the model directly produces probabilities for choices, scores, or truth values, eliminating the need to parse generated text into JSON. This design drastically improves efficiency and predictability.

The training process involved two stages, starting with established datasets like BANKING77 and SST-5, leveraging cross-entropy and ranked probability score loss. This pragmatic approach shows that smart architectural choices and training strategies can yield powerful, specialized AI components suitable for integration into broader AI agent systems.

This is a masterclass in practical applied AI, demonstrating how to achieve significant capabilities without a datacenter.