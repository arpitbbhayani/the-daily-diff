---
title: Benchmarking as a System-Design Tool for Evolving Information Systems
source: arxiv
url: http://arxiv.org/abs/2607.07175v1
date: '2026-07-08'
tags:
- arxiv
- benchmarking
- catchup
- cs.DB
- data-representation
- data-transformation
- heterogeneous-information-systems
- query-performance
- schema-evolution
arxiv_id: '2607.07175'
categories: cs.DB
why_read: This paper introduces TransforMMer, a framework that redefines benchmarking
  as a system-design tool. You will learn how data representation and schema evolution
  in heterogeneous information systems significantly influence query performance.
authors:
- "J\xE1chym B\xE1rt\xEDk"
- "Al\u017Eb\u011Bta \u0160r\u016Ftkov\xE1"
- "Irena Holubov\xE1"
---

Benchmarking is often seen as a post-implementation comparison tool, but this paper redefines it as a systematic design instrument for heterogeneous information systems.
The TransforMMer framework helps you evaluate architectural and representation-level decisions from the ground up, generating comparable dataset variants across relational, document, and graph systems.
They show how structural redesign steps like embedding or hybrid partitioning profoundly affect query costs. Performance differences emerge from the interaction between workload and representation design, not just the database engine itself.
This is a game-changer for architects, connecting conceptual data modeling directly with empirical system evaluation for truly optimized and scalable systems.
