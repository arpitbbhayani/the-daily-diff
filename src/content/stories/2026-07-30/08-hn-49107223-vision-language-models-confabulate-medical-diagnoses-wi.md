---
authors:
- Siddharth Vohra
comments: https://news.ycombinator.com/item?id=49107223
date: '2026-07-30'
depth_score: 8
hn_id: '49107223'
image: /infographics/08-hn-49107223.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- ai-bias
- catchup
- confabulation
- hn
- medical-diagnosis
- model-auditing
- patient-demographics
- vision-language-models
title: Vision-language models confabulate medical diagnoses without images based on
  demographics
url: https://arxiv.org/abs/2607.26886
utility_score: 9
why_read: This paper reveals how vision-language models can systematically confabulate
  medical diagnoses based on patient demographics, even when no image is provided.
  Readers will learn about critical failure modes in VLMs and the necessity of auditing
  structured outputs for trustworthy clinical deployment.
---

Modern Vision-Language Models (VLMs) like Claude, GPT, and Gemini exhibit a startling and dangerous behavior: they confabulate medical diagnoses based solely on demographic data, even when no image is provided. This is not random noise; it is systematically biased.

For instance, a 65-year-old white man asking about a skin mole might consistently receive a "Melanoma" diagnosis from Claude, while a young Black woman querying about a chest X-ray might get "Sarcoidosis" from GPT-5.4, explicitly reasoned by demographics.

This research highlights that traditional prose-only audits are insufficient. Developers need to directly audit the structured output channels of these models, especially in sensitive applications. This is a critical lesson for anyone building or deploying AI in production: model integrity goes beyond accuracy; it involves understanding and mitigating intrinsic biases and confabulation.