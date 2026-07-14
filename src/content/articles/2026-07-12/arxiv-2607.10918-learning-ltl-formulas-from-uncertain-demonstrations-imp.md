---
title: Learning LTL Formulas from Uncertain Demonstrations Improves Specification
  Recovery
source: arxiv
url: http://arxiv.org/abs/2607.10918v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- eess.SY
- hamming-distance
- ltl
- pseudo-boolean-optimization
- system-demonstrations
- temporal-logic
- uncertainty
arxiv_id: '2607.10918'
categories: cs.AI, eess.SY
why_read: This paper introduces a framework for learning Linear Temporal Logic (LTL)
  specifications from uncertain system demonstrations, addressing limitations of existing
  approaches that assume perfect data. Readers will understand a novel method to improve
  the accuracy of learned specifications, particularly crucial for safety-critical
  systems with noisy real-world data.
authors:
- Parastou Fahim
- Constantino Lagoa
- "R\xF4mulo Meira-G'oes"
---

Ensuring robustness and predictability in complex systems often relies on formal specifications. But what if your system demonstrations are uncertain or incomplete?

This paper introduces a powerful framework for learning Linear Temporal Logic (LTL) specifications directly from demonstrations, even in the presence of real-world data uncertainty. It models uncertainty via Hamming distance, providing a robust way to extract reliable rules.

The problem is elegantly reduced to an equivalent Pseudo-Boolean Optimization, making it amenable to existing solvers. This approach is critical for safety-critical domains where accuracy and reliability are non-negotiable.

By recovering specifications that closely align with ground-truth formulas under uncertainty, this work offers a path to better formal verification and controller synthesis. It is a vital tool for engineers building dependable AI-driven or automated systems.
