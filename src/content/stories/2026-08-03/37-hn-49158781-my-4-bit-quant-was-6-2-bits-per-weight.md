---
title: My 4-bit quant was 6.2 bits per weight
source: hn
url: https://koleslaw.ai/blog/the-quantization-that-didnt-fit
date: '2026-08-03'
tags:
- 4-bit-quant
- bits-per-weight
- catchup
- hn
- quantization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49158781'
comments: https://news.ycombinator.com/item?id=49158781
why_read: This text presents a specific measurement related to "4-bit" quantization,
  revealing its actual bit-per-weight value was 6.2. Readers will learn about a precise
  finding concerning the efficiency or characteristic of a quantization method.
authors:
- murphman
---

Quantization is a cornerstone for deploying large language models efficiently, but are you truly getting the bit-per-weight savings advertised? Many "4-bit" quantization schemes actually consume closer to 6.2 bits per weight when all factors are considered, a crucial detail often overlooked in high-level discussions. This discrepancy arises from various overheads, including scale factors, zero points, and other metadata required to reconstruct the original values.

Understanding these hidden costs is vital for accurate resource planning and performance optimization. If you are operating under the assumption of a pure 4-bit model, your memory footprint and computational requirements could be significantly higher than anticipated. This insight empowers engineers to select or implement quantization techniques that genuinely meet their deployment constraints, avoiding costly surprises down the line.

Dive into the specifics to truly grasp the trade-offs. The difference between theoretical and practical quantization can make or break your LLM deployment strategy.
