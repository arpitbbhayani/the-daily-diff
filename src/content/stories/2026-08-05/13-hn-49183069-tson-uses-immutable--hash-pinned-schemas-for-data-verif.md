---
title: TSON uses immutable, hash-pinned schemas for data verification
source: hn
url: https://tson.io/
date: '2026-08-05'
tags:
- catchup
- data-validation
- hash-pinning
- hn
- immutable-schema
- json-superset
- tson
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49183069'
comments: https://news.ycombinator.com/item?id=49183069
why_read: This introduces TSON, an innovative schema system featuring immutable, hash-pinned
  schemas. Readers will learn how TSON enhances data integrity through its unique
  design where schemas are also data.
authors:
- andrewjneumann
---

Data integrity and schema evolution are perennial challenges in distributed systems. TSON (Typed Schema Object Notation) introduces a compelling solution by being a JSON superset with immutable, hash-pinned schemas.

What makes this truly robust is that the schema definitions are themselves data, and a single hash verifies the entire chain of schema definitions. This provides a powerful mechanism for ensuring data is always valid against its expected structure, crucial for reliability.

If you have ever struggled with JSON schema versioning or ensuring strict data contracts across services, TSON offers a deeply considered alternative worth exploring for building resilient systems.
