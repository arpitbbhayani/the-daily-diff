---
title: Open-weight models are hard to run despite licenses, needing pooled hardware
source: hn
url: https://deskofjim.com/blog/compute/
date: '2026-09-03'
tags:
- catchup
- compute-club
- distributed-compute
- hardware-pooling
- hn
- open-models
- privacy
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49552222'
comments: https://news.ycombinator.com/item?id=49552222
why_read: This article explains why it is difficult to run open-weight AI models even
  with a license. It introduces the New York Compute Club's approach to pooling hardware
  and ensuring privacy for shared compute resources.
authors:
- jamesbaker1
---

The 'not your keys, not your coins' ethos applies directly to open-weight LLMs: if you do not control the compute, you do not truly control the model. Many engineers face a massive barrier running licensed models simply due to lack of hardware access.

This piece unpacks that critical gap between legal rights and practical capability. It then introduces a fascinating solution: a "Compute Club" designed for shared infrastructure. The core innovation is a privacy-preserving trust model where jobs are encrypted with libsodium, ensuring the coordinator routes tasks without ever seeing the actual code or data.

This is a brilliant example of applying distributed systems and security principles to a modern AI infrastructure problem. You will learn how to think about decentralized compute, trust boundaries, and the architectural nuances required to empower broader access to powerful AI.
