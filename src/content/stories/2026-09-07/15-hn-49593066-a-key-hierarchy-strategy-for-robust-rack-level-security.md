---
title: A key-hierarchy strategy for robust rack-level security
source: hn
url: https://rfd.shared.oxide.computer/rfd/0301
date: '2026-09-07'
tags:
- catchup
- hn
- key-hierarchy
- rack-level-security
- root-of-trust
- shamir-secret-sharing
- sprockets-sessions
- storage-at-rest
- trust-quorum
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49593066'
comments: https://news.ycombinator.com/item?id=49593066
why_read: This document details a key-hierarchy strategy for achieving robust rack-level
  security. Readers will learn how a Trust Quorum and Shamir Secret Sharing are used
  to protect secrets and storage at rest from physical compromise.
authors:
- Andrew J. Stone
---

Designing truly secure distributed systems means going deep into foundational primitives. Oxide Computer's RFD on rack-level key hierarchy provides an exceptional architectural blueprint.

This document dives into how they leverage hardware Roots of Trust, secure sprockets sessions, and a Trust Quorum built on Shamir secret sharing. It is not just about cryptography; it is about how these components interoperate to provide attestation and protect data at rest across an entire rack.

For any senior engineer grappling with secure system design and distributed secrets management, this is a must-read. You will learn how a sophisticated, multi-layered approach safeguards an entire hardware unit, offering concrete patterns for building trust in complex systems.
