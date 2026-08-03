---
authors:
- Dylan Ayrey
comments: https://news.ycombinator.com/item?id=49136955
date: '2026-08-01'
depth_score: 7
hn_id: '49136955'
image: /infographics/10-hn-49136955.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-training-data
- catchup
- data-security
- exposed-credentials
- hn
- hugging-face
- personally-identifiable-information
- supply-chain-risk
title: HuggingFace training data contains live, unique credentials
url: https://trufflesecurity.com/blog/scanning-7-6-petabytes-of-ai-training-data-for-secrets
utility_score: 8
why_read: This post reveals the shocking extent of secret leakage in HuggingFace AI
  training data, showcasing the discovery of hundreds of thousands of live credentials.
  Readers will understand the significant data security and supply chain risks posed
  by this widespread problem.
---

A massive empirical study has revealed a profound security vulnerability hiding in plain sight: AI training data. Truffle Security scanned 7.6 petabytes of public datasets on Hugging Face and discovered over 221,000 live, unique credentials.

This is not a minor leak. The findings include keys with access to 393 GB of Personally Identifiable Information, potentially affecting 3.7% of the global population. Beyond PII, cloud storage buckets, hosted databases, and even tokens enabling code pushes into widely installed software were exposed.

This report underscores a critical, often overlooked, aspect of LLM infrastructure and AI supply chain security. If you are building or deploying AI systems, understanding the provenance and security posture of your training data is paramount. The problem is far more widespread than many realize.