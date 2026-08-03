---
authors:
- amita-seal
comments: https://news.ycombinator.com/item?id=49138536
date: '2026-08-01'
depth_score: 8
hn_id: '49138536'
image: /infographics/37-github-49138536.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- baileys
- catchup
- github
- llm-provider
- meta-ai
- openai-api-compatibility
- whatsapp
- whatsmeow
title: Meta AI via WhatsApp as an OpenAI compatible LLM provider
url: https://github.com/amita-seal/wa-metaai
utility_score: 8
why_read: This text explains how to integrate Meta AI on WhatsApp to function as an
  OpenAI-compatible LLM provider. Readers will learn about the technical challenges
  of bot communication on WhatsApp and why the whatsmeow library is necessary over
  Baileys for this integration.
---

Integrating a specific LLM like Meta AI, especially over a platform like WhatsApp, comes with significant low-level protocol challenges. This project offers a solution: an OpenAI-compatible endpoint that proxies requests to Meta AI via WhatsApp, complete with synthesized tool calling.

The real gem here is the detailed technical breakdown. It explains the specific WhatsApp bot JID requirements, the need for HKDF-derived BotMessageSecrets, and why common libraries like Baileys fail where 'whatsmeow' succeeds due to these nuanced protocol details.

This is essential reading for anyone working on LLM infrastructure or agentic systems that require deep, practical integration with less conventional model endpoints. It illustrates how precise understanding of messaging protocols enables powerful applied AI solutions.