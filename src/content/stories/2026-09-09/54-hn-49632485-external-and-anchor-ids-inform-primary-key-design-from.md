---
title: External and Anchor IDs Inform Primary Key Design from Business Requirements
source: hn
url: https://anchorsandlinks.com/posts/primary-keys/
date: '2026-09-09'
tags:
- anchor-ids
- business-requirements
- catchup
- database-design
- external-ids
- hn
- logical-level
- physical-level
- primary-keys
- uniqueness-constraints
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49632485'
comments: https://news.ycombinator.com/item?id=49632485
why_read: Read this to learn a systematic approach to designing database primary keys,
  focusing on business requirements and the distinction between external and anchor
  IDs at logical and physical levels. It offers a fresh perspective beyond traditional
  methods.
authors:
- Alexey Makhotkin
---

Designing primary keys correctly is fundamental to any robust system, yet many engineers default to auto-incrementing integers without fully understanding the implications. This article challenges traditional approaches by introducing external IDs and anchor IDs.

It delves into how to truly decouple the physical primary key from its business meaning, enabling more flexible and resilient database schemas. You will learn to design IDs based on core business requirements first, then map them to physical database constraints.

This perspective changes how you think about unique identifiers, offering practical patterns for handling IDs from external systems and ensuring uniqueness. A must-read for anyone building scalable database systems.
