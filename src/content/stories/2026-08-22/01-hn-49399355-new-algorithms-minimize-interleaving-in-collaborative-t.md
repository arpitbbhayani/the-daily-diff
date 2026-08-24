---
authors:
- Matthew Weidner
- Martin Kleppmann
comments: https://news.ycombinator.com/item?id=49399355
date: '2026-08-22'
depth_score: 9
hn_id: '49399355'
image: /infographics/01-hn-49399355.jpg
interest_score: 9
novelty_score: 9
section: systems
source: hn
tags:
- catchup
- collaborative-text-editing
- crdt
- fugue-algorithms
- hn
- interleaving
- operational-transformation
- replicated-lists
title: New algorithms minimize interleaving in collaborative text editing
url: https://arxiv.org/abs/2305.00583
utility_score: 8
why_read: This paper reveals a critical, long-standing problem of text interleaving
  in collaborative editors using replicated lists, affecting CRDTs and Operational
  Transformation. Readers will learn about the new maximal non-interleaving correctness
  property and two novel algorithms, Fugue and FugueMax, that solve this issue.
---

A long-unnoticed flaw in CRDTs and Operational Transformation, causing text interleaving in collaborative editors during concurrent edits, has finally been addressed.

For decades, when two users inserted text simultaneously at the same position, existing algorithms could inadvertently corrupt the document by interleaving the text passages in a nonsensical way. This subtle issue, often overlooked, directly impacts the integrity and readability of shared documents in applications from Google Docs to Figma.

Researchers introduce 'maximal non-interleaving' as a new correctness property and present two novel CRDT algorithms, Fugue and FugueMax. FugueMax is formally proven to satisfy this property, offering a robust solution. Crucially, these new algorithms also demonstrate performance comparable to state-of-the-art libraries, meaning you do not have to sacrifice speed for data integrity.

This is a fundamental fix for reliable real-time collaboration.