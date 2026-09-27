---
title: AI agents generate machine-verified Lean four mathematical proofs
source: github
url: https://github.com/Sanexxxx777/ProofForge
date: '2026-09-26'
tags:
- automated-theorem-proving
- catchup
- formal-conjectures
- formal-verification
- github
- lean-4
- mathlib
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49860363'
comments: https://news.ycombinator.com/item?id=49860363
why_read: Learn how an automated multi-agent pipeline decomposes mathematical conjectures
  and formalizes them into rigorously verified Lean 4 proofs. It provides concrete
  examples of automated contributions accepted into Google DeepMind's formal conjectures
  repository.
authors:
- Sanexxxx777
---

LLMs can write plausible mathematical arguments, but verifying whether every logical transition holds remains a major challenge. ProofForge demonstrates an AI-agent architecture that enforces ground-truth correctness by requiring its generated proofs to compile against the Lean 4 kernel.

Rather than attempting end-to-end generation in a single context window, the system decomposes complex mathematical problems into smaller lemmas. Subagents draft proofs for these subgoals using standard axioms, explicitly disallowing unverified escapes such as native_decide. If a step fails typechecking, the compiler error feeds directly back into the agent loop for refinement.

This architecture has already contributed verified proofs and formalizations directly to Google DeepMind's formal-conjectures repository. For teams building autonomous coding or reasoning agents, pairing LLM generation with deterministic compiler checks is the clearest path to eliminating hallucinations in critical pipelines.
