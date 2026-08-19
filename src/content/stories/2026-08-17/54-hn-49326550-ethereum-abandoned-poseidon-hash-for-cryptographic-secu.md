---
title: Ethereum abandoned Poseidon hash for cryptographic security reasons
source: hn
url: https://twitter.com/ProjectZKM/status/2088320035970330676
date: '2026-08-17'
tags:
- catchup
- cryptographic-security
- ethereum
- hash-function
- hn
- poseidon
- post-quantum-roadmap
- snark
- stark
- zkevm
- zkvm
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49326550'
comments: https://news.ycombinator.com/item?id=49326550
why_read: This text explains Ethereum's significant pivot away from the Poseidon hash
  function, despite its widespread adoption in zkVMs and zkEVMs. Readers will learn
  the technical reasons behind this decision, including the trade-offs between CPU-friendly
  and SNARK-friendly hashes, and its implications for the security of the post-quantum
  roadmap.
authors:
- _alphageek
---

This is a deep dive into the guts of why large-scale distributed systems make critical cryptographic choices. Ethereum is pivoting away from Poseidon, a widely used SNARK-friendly hash function, and the reasons go beyond simple performance.

Poseidon was specifically designed for zero-knowledge proofs, transforming computations into polynomial constraint systems. This made it vastly more efficient for SNARKs than traditional hashes like SHA-256, which are brutal over prime fields and cost tens of thousands of R1CS constraints.

The problem is not that Poseidon is broken, but that staking the entire post-quantum security of a blockchain on a relatively young 2019 primitive presents an unacceptable risk for a system of Ethereum's scale. The shift is about long-term cryptographic agility and reducing single points of failure in the security model.

This is a masterclass in risk assessment at the core protocol level.
