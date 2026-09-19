---
title: Arata a fast quality pseudo-random number generator built on ARX
source: github
url: https://github.com/eternal-io/arata
date: '2026-09-17'
tags:
- arx
- catchup
- domain-separation
- github
- performance
- prng
- pseudo-random-number-generator
- statistical-testing
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49739395'
comments: https://news.ycombinator.com/item?id=49739395
why_read: This project description details Arata, a fast and high-quality pseudo-random
  number generator. Readers will learn about its performance, statistical testing,
  unique features like domain separation, and its ARX-based design.
authors:
- eternal-io
---

Random number generation is a fundamental primitive, and choosing the right PRNG can significantly impact performance and correctness in large-scale systems. The new "Arata" PRNG offers compelling features tailored for modern, parallel applications.

Built on the Addition-Rotation-XOR (ARX) operations, Arata achieves impressive speed and quality, passing rigorous statistical tests. Crucially, its domain separation feature guarantees that RNG instances with different IDs produce non-overlapping sequences, a critical requirement for complex distributed simulations or parallel algorithms.

Engineers building scalable, distributed systems where high-quality, efficient random numbers are essential will find Arata's design principles and performance characteristics highly compelling. It is a robust, non-cryptographic choice for demanding applications.
