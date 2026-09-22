---
authors:
- sts153
comments: https://news.ycombinator.com/item?id=49774157
date: '2026-09-20'
depth_score: 8
hn_id: '49774157'
image: /infographics/49-hn-49774157.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- jev
- judgment
- probabilistic-output
- software-integration
- system-one-ai
title: Jev a System One AI for fast judgment inside software
url: https://flaviocopes.com/jev/
utility_score: 9
why_read: This article provides a detailed understanding of Jev, TypeSafe's new System
  One AI model. Readers will learn how Jev offers fast, probabilistic judgments within
  applications, distinguishing it from traditional LLMs and classifiers, and where
  it can be applied in projects.
---

A deep dive into TypeSafe's Jev model reveals it is not another chatbot, but a "System One" AI specifically engineered for rapid, structured decision-making within software applications. Think of it as a "smart if statement" for situations where conditional logic requires nuanced judgment.

Jev accepts data and a list of typed questions, returning probabilistic answers such as yes/no, an option from a predefined list, or a position on a scale. Crucially, these responses are delivered in approximately 100 milliseconds, with input tokens costing a mere $0.042 per million, and output tokens being free.

This model shines where traditional code struggles with subjective conditions and where large language models are overkill. It offers a precise alternative to training narrow classifiers or coaxing structured JSON from general-purpose LLMs, which are often slower and more expensive.

Engineers can leverage Jev to power intelligent agents, automate complex workflow decisions, or build robust guardrails directly into their code, enabling more efficient and responsive AI-driven systems.

Integrate intelligence, not just language.