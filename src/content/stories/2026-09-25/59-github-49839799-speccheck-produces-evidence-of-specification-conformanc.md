---
title: speccheck produces evidence of specification conformance
source: github
url: https://github.com/rioffe/speccheck
date: '2026-09-25'
tags:
- catchup
- code-testing
- evidence-backed-status
- github
- junit-results
- llm-judge
- specification-conformance
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49839799'
comments: https://news.ycombinator.com/item?id=49839799
why_read: Readers will learn about a tool that automatically verifies software against
  its specifications. It provides concrete evidence for each requirement, enhancing
  trust in agent-built systems.
authors:
- rioffe
---

Speccheck introduces a compelling new approach to software quality assurance. This tool directly links requirements within a `SPEC.md` to actual code and test results, reporting a clear, evidence-backed status for every specified ID.

What truly stands out is the "downgrade-only LLM judge." This innovative feature uses a large language model to assess conformance, but only when a human has already established the specification is met. The LLM then acts as a guardrail, ensuring no regressions.

This shifts the burden from manual specification verification to automated evidence gathering, significantly enhancing developer productivity and system reliability. It is a smart integration of AI into core engineering workflows, moving beyond simple code generation to intelligent quality control.
