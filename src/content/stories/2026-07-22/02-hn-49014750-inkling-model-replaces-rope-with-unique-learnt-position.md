---
authors:
- smaddrellmander
comments: https://news.ycombinator.com/item?id=49014750
date: '2026-07-22'
depth_score: 9
hn_id: '49014750'
image: /infographics/02-hn-49014750.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- attention-bias
- bitter-lesson
- catchup
- hn
- inkling
- positional-encoding
- rope
title: Inkling model replaces RoPE with unique learnt positional encoding
url: https://idlemachines.co.uk/essays/inkling
utility_score: 8
why_read: This essay explains how the Inkling model replaces traditional RoPE positional
  encodings with a learnt local attention bias. Readers will understand a fundamental
  shift in handling positional information in large language models and its connection
  to the 'Bitter Lesson'.
---

Thinking Machines' Inkling model made a bold move by ditching Rotary Positional Embeddings (RoPE) for something entirely different. They are leveraging a combination of learnt local attention bias and a positionless far field, and the implications are profound.

This is not just another minor tweak; it represents a fundamental shift in how positional information is incorporated into transformer architectures. It challenges the conventional wisdom about how LLMs should handle sequence order, particularly for very long contexts.

Engineers working with or building advanced LLMs will find this a critical read. It offers a new perspective on optimizing for context length and understanding the intricate balance between learned patterns and explicit positional signals in large models.