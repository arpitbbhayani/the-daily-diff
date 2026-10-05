---
title: Aleph Alpha releases Kolibri as a sovereign open-weight model
source: news
url: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/
date: '2026-10-03'
tags:
- catchup
- data-sovereignty
- hn
- long-context
- mixture-of-experts
- model-training-pipeline
- open-weight-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49942706'
comments: https://news.ycombinator.com/item?id=49942706
why_read: Read this to understand how Aleph Alpha built Kolibri, a 78B mixture-of-experts
  model designed for sovereign and regulated environments. You will learn about their
  automated training pipeline and domain specialization approach.
authors:
- Aleph Alpha Research
image: /infographics/02-hn-49942706.jpg
---

Sparse Mixture-of-Experts architectures continue to deliver impressive inference efficiency. Aleph Alpha has released Kolibri, an open-weight English-German MoE Transformer packing 78 billion total parameters while activating only 3 billion parameters per token. It supports a context window of up to 1 million tokens under an Apache 2.0 license.

The engineering leverage comes from their automated training pipeline. The infrastructure managed data ingestion, automated ablation runs, pre-training, and evaluation with built-in fault tolerance that recovered automatically from hardware and network dropouts without manual intervention.

For teams building localized or sovereign agentic pipelines, having access to low-latency 3B active parameter routing at long context lengths provides a compelling deployment alternative.
