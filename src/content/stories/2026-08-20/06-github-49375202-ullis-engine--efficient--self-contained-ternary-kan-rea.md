---
title: 'Ullis Engine: Efficient, Self-Contained Ternary KAN Reasoning in Rust'
source: github
url: https://github.com/Vladislav-Kalinkin/ullis
date: '2026-08-20'
tags:
- catchup
- edge-ai
- github
- inference-optimization
- kolmogorov-arnold-networks
- low-memory-ai
- metal-api
- quantized-neural-networks
- rust-programming
- ternary-kan
- ullis-engine
- unified-memory
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49375202'
comments: https://news.ycombinator.com/item?id=49375202
why_read: This text introduces the Ullis Engine, a novel, highly efficient ternary
  Kolmogorov-Arnold Network (KAN) implementation in Rust. Readers will learn about
  its unique architecture, zero-Python runtime, and impressive low-memory, high-performance
  characteristics on unified memory systems like Apple M1.
authors:
- Vladislav Kalinkin
---

Forget heavy Python runtimes for advanced AI. Ullis introduces a Rust-based engine for local training and inference of ternary Mixture-of-Bumps Kolmogorov–Arnold Networks (KANs), boasting an incredible <15 MB RSS for deep inference on an 8 GB Mac M1.

This is a game-changer for efficient AI agents and embedded systems. The design ensures the working set stays flat and employs ephemeral garbage collection for "thinking" tokens, enabling powerful reasoning with minimal memory footprint.

This project demonstrates what is possible when systems-level engineering meets novel AI architectures, proving that advanced AI reasoning does not have to come with massive resource demands.
