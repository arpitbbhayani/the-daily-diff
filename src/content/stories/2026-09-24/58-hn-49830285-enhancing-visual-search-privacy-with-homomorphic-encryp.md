---
title: Enhancing visual search privacy with homomorphic encryption and machine learning
source: hn
url: https://machinelearning.apple.com/research/homomorphic-encryption
date: '2026-09-24'
tags:
- catchup
- hn
- homomorphic-encryption
- machine-learning
- on-device-processing
- private-nearest-neighbor-search
- visual-search
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49830285'
comments: https://news.ycombinator.com/item?id=49830285
why_read: Learn how homomorphic encryption enables secure server-side lookups for
  on-device visual search without exposing user queries. You will understand how to
  balance cryptographic privacy guarantees with production latency requirements.
authors:
- coconutrandom
---

Running vector search over sensitive user data presents a massive architectural challenge. If you send plaintext query embeddings to a remote server, you violate zero-knowledge privacy guarantees. If you evaluate everything on-device, you run into severe storage and compute limits.

Apple solved this trade-off by combining homomorphic encryption with private nearest neighbor search for visual lookups. The client encrypts its query vector before sending it to the backend. The server evaluates mathematical distance metrics directly over ciphertext and returns encrypted nearest neighbor candidates.

Because the server never possesses the decryption key, it processes lookups without ever learning what the user is searching for. Making this viable required extensive algebraic optimizations and SIMD-friendly vector layouts to overcome the latency penalties traditionally associated with fully homomorphic computation.

Privacy-preserving retrieval is moving out of pure theory and into high-throughput production infrastructure.
