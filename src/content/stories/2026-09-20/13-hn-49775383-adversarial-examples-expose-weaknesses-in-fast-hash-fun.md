---
title: Adversarial Examples Expose Weaknesses in Fast Hash Functions
source: hn
url: https://thomasahle.com/blog/adversarial-examples-for-hashes/
date: '2026-09-20'
tags:
- adversarial-examples
- catchup
- fast-hashing
- hash-collisions
- hash-functions
- hn
- universal-hashing
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49775383'
comments: https://news.ycombinator.com/item?id=49775383
why_read: Understand how adversarial examples can expose severe vulnerabilities in
  popular fast hash functions, leading to performance degradation and security concerns.
  Learn about the concept of universal hashing and empirical testing methods.
authors:
- thomasahle
---

An AI just exposed critical flaws in some of the fastest and most popular hash functions, demonstrating seed-independent collisions that significantly degrade their expected performance. This is not just a theoretical finding; it impacts real-world data integrity and system resilience.

The study used Claude Fable to analyze hash functions like komihash, HighwayHash, and aHash. It found many performed at least "20 bits below expectation" in terms of collision resistance, and even identified mistakes in some published mathematical proofs.

This is a stark reminder that even well-established primitives can have hidden vulnerabilities, and it highlights a genuinely novel application for AI in uncovering such issues. It is a powerful example of applied AI pushing the boundaries of traditional cryptanalysis.

This research will make you rethink assumptions about fundamental algorithm robustness.
