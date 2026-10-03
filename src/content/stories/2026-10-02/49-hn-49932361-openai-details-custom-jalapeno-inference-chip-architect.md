---
title: OpenAI details custom Jalapeno inference chip architecture and efficiency
source: hn
url: https://morethanmoore.substack.com/p/interview-with-richard-ho-openai
date: '2026-10-02'
tags:
- catchup
- custom-silicon
- hbm4
- hn
- hotchips-2026
- inference-accelerator
- jalapeno
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49932361'
comments: https://news.ycombinator.com/item?id=49932361
why_read: Read this interview to understand the architectural design and performance
  characteristics of OpenAI's first custom inference chip, Jalapeno.
authors:
- Dr. Ian Cutress
---

OpenAI has revealed technical details on Jalapeno, their custom inference accelerator co-designed with Broadcom. The chip packs 216 GiB of HBM4 memory delivering 15.4 TB/s bandwidth alongside compute and IO chiplets at 550W sustained power draw.

While hardware vendors split prefill, speculative decode, and full decode across distinct hardware tiers, OpenAI designed a unified part intended for homogeneous datacenter scaling. Clusters scale to 2,048 accelerators hitting 27 EFLOP/s at 4-bit precision.

This homogeneous architecture emphasizes extreme memory bandwidth over specialized ASIC fragmentation, demonstrating that inference efficiency at scale depends heavily on memory hierarchy rather than pure compute specialization.
