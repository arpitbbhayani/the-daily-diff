---
title: Popular fast hash functions fail under adversarial inputs
source: hn
url: https://thomasahle.com/blog/adversarial-examples-for-hashes/
date: '2026-10-02'
tags:
- adversarial-examples
- catchup
- collision-resistance
- hash-functions
- hn
- smhasher
- universal-hashing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49931812'
comments: https://news.ycombinator.com/item?id=49931812
why_read: Understand how widely used fast hash functions perform significantly worse
  against adversarial inputs and why formal proofs matter for hash collision guarantees.
authors:
- birdculture
---

High-throughput non-cryptographic hash functions like xxHash and komihash can process data at upwards of 60 GB/s. However, trading mathematical guarantees for raw speed creates severe vulnerabilities to algorithmic complexity and denial-of-service attacks in backend systems.

A systematic analysis of popular hashing algorithms across the SMhasher suite revealed that many widely used functions degrade severely under adversarial inputs. Several algorithms exhibited collision probabilities dropping more than 20 bits below their theoretical expectations, invalidating their universality claims.

When hash tables in routing layers, in-memory caches, or database indexes encounter adversarial inputs, O(1) lookups degrade into O(n) worst-case bucket searches. If an attacker can systematically generate collisions, CPU utilization spikes and throughput collapses across distributed nodes.

Backend engineers should carefully evaluate whether throughput gains justify using unproven hash functions in internet-facing infrastructure. For untrusted input streams, choosing hashes with formally verified b-bit universal guarantees is necessary to protect against catastrophic hash flooding.
