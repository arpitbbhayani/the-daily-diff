---
title: SURFRAME ensures data provenance with signed, tamper-evident containers
source: hn
url: https://surframe.dev
date: '2026-08-04'
tags:
- audit-trail
- catchup
- data-provenance
- dataset-containers
- digital-signatures
- encrypted-columns
- hn
- tamper-evident
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49168136'
comments: https://news.ycombinator.com/item?id=49168136
why_read: This introduces SURFRAME, a system for securing datasets with signatures
  and audit trails. Readers will learn how to ensure data integrity and track provenance,
  crucial for verifying dataset changes in applications like machine learning pipelines.
authors:
- christ_dev
---

Securing your AI training data is a massive challenge. Most systems today cannot definitively answer: 'Which dataset actually trained this model?'

SURFRAME introduces a compelling solution: signed, tamper-evident dataset containers. Think of it like signed binaries, but for your data. It uses Ed25519 signatures, encrypted columns, and a public transparency log to ensure anyone can verify a dataset's integrity offline, without relying on your infrastructure.

This is not just about checksums; it details *what* changed, *when*, and *who* changed it. For senior engineers dealing with MLOps or data supply chains, this offers a practical blueprint for auditability and trustless verification that can stop compromised data from ever reaching your production models.

Finally, a robust answer to data supply chain integrity.
