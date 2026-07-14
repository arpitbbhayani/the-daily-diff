---
title: One-Bit Broadcasts Preserve Computational Power in Anonymous Dynamic Networks
source: arxiv
url: http://arxiv.org/abs/2607.08358v1
date: '2026-07-09'
tags:
- anonymous-dynamic-networks
- arxiv
- catchup
- computational-power
- cs.DC
- deterministic-computation
- global-computation
- lower-bounds
- one-bit-broadcast
- stabilizing-algorithm
arxiv_id: '2607.08358'
categories: cs.DC
why_read: This paper reveals that surprisingly rich global computation is possible
  in anonymous dynamic networks, even when communication is restricted to single-bit
  broadcasts. Readers will understand novel algorithms that extract complex information
  under extreme communication constraints and the theoretical limits of such systems.
authors:
- Thibaut Blanc
- Giuseppe Antonio Di Luna
- Giovanni Viglietta
---

Imagine a distributed network where agents are anonymous, the topology is dynamic, and each agent can only broadcast *one bit* per round. Can anything complex be computed?

This paper shows that, surprisingly, rich global computation is possible. With a unique leader, any computable function of the input multiset can be solved in O(n^3 log^2 n) rounds.

The algorithms achieve this by extracting global linear equations from local one-bit aggregate observations, even without prior knowledge of network size. They essentially match the state of the art for the much stronger congested model.

This work demonstrates that the computational power of congested networks is preserved even when messages are compressed to a single bit.
