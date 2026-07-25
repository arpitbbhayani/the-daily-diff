---
authors:
- greatgib
comments: https://news.ycombinator.com/item?id=48998606
date: '2026-07-21'
hn_id: '48998606'
image: /infographics/27-hn-48998606.jpg
interest_score: 8
section: ai
source: hn
tags:
- agentic-tasks
- api-migration
- catchup
- gemini-3.5-flash-lite
- gemini-3.6-flash
- gemini-models
- high-throughput
- hn
- multimodal-tasks
- token-pricing
title: Gemini 3.6 Flash and 3.5 Flash-Lite models are production ready
url: https://ai.google.dev/gemini-api/docs/latest-model
why_read: This document explains the features, pricing, and migration steps for the
  new Gemini 3.6 Flash and 3.5 Flash-Lite models. Readers will learn how to leverage
  these production-ready models for various AI applications.
---

Heads up for anyone working with Google's Gemini models: the latest 3.6 Flash and 3.5 Flash-Lite models have deprecated and now ignore `temperature`, `top_p`, and `top_k` parameters. This is a significant shift in how you control model output.

This change implies Google is moving towards internal control over output variance, possibly to enhance performance on complex agentic and multimodal tasks as stated in their docs. It means that previous strategies for tuning model creativity or determinism via these parameters will no longer apply.

Engineers building with Gemini for applied AI and agentic systems must adjust their prompting and interaction strategies accordingly. Understanding how to guide these models effectively without explicit sampling controls will be crucial for maintaining output quality and predictability.