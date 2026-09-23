---
title: Compute Assay defines deliverable compute capacity for GPU markets
source: hn
url: https://computeassay.com/
date: '2026-09-21'
tags:
- catchup
- compute-assay
- compute-futures
- deliverable-capacity
- fungibility
- gpu-hour
- hn
- price-spread
- specification
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49792523'
comments: https://news.ycombinator.com/item?id=49792523
why_read: Read this to understand why the current GPU compute market has significant
  price disparities due to an undefined product. You will learn how Compute Assay
  aims to standardize deliverable capacity and create market transparency.
authors:
- RentAnAgent
---

The GPU-hour is a lie. If you are buying cloud GPUs, a raw price per hour tells you almost nothing about what you are actually getting. The underlying network fabric - like InfiniBand versus oversubscribed Ethernet - dramatically alters performance for specific AI workloads.

This new "Compute Assay" registry reveals an astonishing 3.8x price spread for the same H100-SXM chip across providers. It is not just about cost; it is about whether your large model serving or frontier training will actually be viable. For example, eight H100s on oversubscribed Ethernet might be fine for batch inference, but entirely inadequate for large model serving.

Understanding these differences is paramount. The registry helps you navigate hidden costs and ensure your system design choices align with the actual capabilities of the compute you are purchasing, preventing costly misalignments.

Stop comparing apples to oranges, and start comparing fabrics.
