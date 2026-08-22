---
authors:
- tonydevweb
comments: https://news.ycombinator.com/item?id=49378450
date: '2026-08-20'
depth_score: 8
hn_id: '49378450'
image: /infographics/18-hn-49378450.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catalogue-produit
- catchup
- diagnostic-produit
- django
- hallucination
- hn
- llm
- marketplace
title: Séparer LLM et catalogue pour un diagnostic produit fiable
url: https://tonydevweb.com/articles/brancher-llm-catalogue-produit.html
utility_score: 9
why_read: This article shares a practical experience of integrating an LLM-based diagnostic
  agent into a marketplace. It details how to address the vocabulary problem and a
  key architecture to prevent LLM hallucinations.
---

Most LLM integrations struggle with hallucinations, especially when connecting to real-world data like a product catalog. Feeding an LLM direct access often leads to invented items or prices. This is a common pitfall in applied AI. 

This article outlines a robust, production-ready pattern: the LLM is exclusively used for symptom diagnosis and normalizing search terms. Actual product lookups remain entirely deterministic, handled by traditional database queries.

This clear architectural separation prevents hallucinations, makes the system significantly more reliable, and allows for efficient caching of LLM outputs to boost performance and reduce API costs. Implemented with Django, PostgreSQL full-text search, and Redis, it offers a pragmatic blueprint.

It is a smart design choice for building resilient, enterprise-grade LLM applications.