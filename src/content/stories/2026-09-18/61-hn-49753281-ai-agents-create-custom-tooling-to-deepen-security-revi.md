---
title: AI agents create custom tooling to deepen security review quality
source: hn
url: https://blog.trailofbits.com/2026/09/18/auditing-in-the-age-of-good-enough-ai/
date: '2026-09-18'
tags:
- ai-agents
- catchup
- custom-tooling
- formal-verification
- hn
- security-auditing
- zero-knowledge-vms
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49753281'
comments: https://news.ycombinator.com/item?id=49753281
why_read: This post reveals how AI agents can build custom tooling and formal models,
  drastically improving the depth and quality of security reviews beyond basic code
  analysis. Readers will learn about a novel application of AI in security, specifically
  for high-assurance projects with limited existing tools.
authors:
- Trail of Bits
---

Forget basic AI code review; a recent audit of the Miden VM shows a far deeper application of AI agents. Trail of Bits used them to *build* a complete suite of engineering tools from scratch, including an LSP server, a decompiler, a static analysis engine, and even a formal Lean model for a custom assembly language.

This was not about minor bug fixes. These AI-generated tools uncovered critical security issues like an unvalidated prover-supplied input, and generated 95 machine-checked correctness proofs for the Miden core library.

The real takeaway here is a paradigm shift: AI agents are evolving from mere assistants to co-creators of complex development and auditing infrastructure. This showcases a potent new approach to tackling difficult system-level challenges and boosting developer productivity.
