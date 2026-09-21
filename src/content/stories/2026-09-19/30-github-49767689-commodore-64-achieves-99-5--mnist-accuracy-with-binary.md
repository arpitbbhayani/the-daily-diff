---
title: Commodore 64 achieves 99.5% MNIST accuracy with binary neural networks
source: github
url: https://github.com/jarnoh/mnist64
date: '2026-09-19'
tags:
- 6502-cpu
- 8-bit-computing
- binary-neural-networks
- catchup
- commodore-64
- github
- mnist
- resource-constrained-ai
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49767689'
comments: https://news.ycombinator.com/item?id=49767689
why_read: This text reveals how 99.5% accurate handwritten digit recognition is possible
  on a Commodore 64. Readers will learn about the practical application of binary
  neural networks and extreme optimization for vintage 8-bit hardware.
authors:
- Jarno Heikkinen
---

It is truly astounding what is possible with deep low-level optimization. A Binary Neural Network (BNN) achieved 99.5% accuracy on MNIST, running at interactive speeds on a *stock Commodore 64*.

This project replaced traditional multiply-accumulate (MAC) operations with XNOR and popcount to leverage the 6502 CPU, which lacks a multiply instruction. This is not a simple port; it is an incredible feat of algorithm-architecture co-design for extremely constrained environments.

If you are working on edge AI, embedded systems, or just appreciate fundamental computer science, this demonstrates how to achieve substantial AI capability with minimal resources. It is a masterclass in efficiency, proving that thoughtful architectural trade-offs can yield powerful results even on ancient silicon.
