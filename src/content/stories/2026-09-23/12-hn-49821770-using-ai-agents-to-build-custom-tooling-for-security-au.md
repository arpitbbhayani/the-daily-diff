---
title: Using AI agents to build custom tooling for security audits
source: hn
url: https://blog.trailofbits.com/2026/09/18/auditing-in-the-age-of-good-enough-ai/
date: '2026-09-23'
tags:
- ai-agents
- catchup
- decompiler
- formal-verification
- hn
- lean
- miden-vm
- static-analysis
- zero-knowledge-vm
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49821770'
comments: https://news.ycombinator.com/item?id=49821770
why_read: Learn how security researchers use AI agents to generate custom tooling,
  decompilers, and formal Lean models to audit low-level cryptographic systems.
authors:
- wslh
image: /infographics/12-hn-49821770.jpg
---

Most AI security discussions focus entirely on automated code reviews, but pointing an agent harness directly at a codebase often yields shallow results. Trail of Bits demonstrated a far more impactful approach while auditing the Miden zero-knowledge VM, which uses a proprietary assembly language with virtually no ecosystem tooling.

Instead of asking agents to find bugs directly, they used agentic pipelines to build developer infrastructure from scratch. Over several months, agents synthesized a language server, a decompiler, a static analysis engine, and a formal Lean model of the virtual machine executor.

This workflow produced 95 machine-checked correctness proofs and surfaced critical vulnerabilities, including an unvalidated prover input that allowed forging Falcon signatures to drain user funds. AI agents provide the highest leverage when building the verification scaffolding rather than guessing at bugs.

Building tools with agents produces rigorous, provable engineering outcomes that raw model outputs cannot match.
