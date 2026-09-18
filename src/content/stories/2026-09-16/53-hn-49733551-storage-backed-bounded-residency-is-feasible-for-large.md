---
title: Storage-backed bounded residency is feasible for large sparse MoE inference
source: hn
url: https://zenodo.org/records/22755791
date: '2026-09-16'
tags:
- bounded-residency
- cache-locality
- catchup
- energy-efficiency
- hn
- mixture-of-experts
- single-node-inference
- sparse-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49733551'
comments: https://news.ycombinator.com/item?id=49733551
why_read: This paper provides a detailed characterization of data-path, cache locality,
  and energy consumption for single-node trillion-parameter Mixture-of-Experts inference.
  Readers will learn how storage-backed bounded residency can enable efficient deployment
  of large sparse models when full residency is not possible.
authors:
- Nigel Hutchinson
---

Running massive Mixture-of-Experts (MoE) models like Kimi K2.5 (375GB) on consumer-grade hardware (128GB Ryzen AI MAX+ 395 PC) sounds impossible, but new research demonstrates a viable engineering path. This paper characterizes "storage-backed bounded expert residency" to make it happen.

The study details how data-path, cache locality, and energy consumption behave under these constraints. It shows that by intelligently caching expert data, they reduced expert-store traffic by 7.7 percent and avoided over 70GiB of traffic, alongside a 5 percent improvement in mean expert-delivery wait and better energy efficiency.

This provides highly practical insights for engineers grappling with deploying huge AI models where full residency is not feasible. It is a powerful example of systems engineering enabling the deployment of frontier AI models in cost-effective environments.

Hardware limits are not always model limits.
