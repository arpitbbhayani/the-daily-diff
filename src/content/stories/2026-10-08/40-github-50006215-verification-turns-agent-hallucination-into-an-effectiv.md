---
title: Verification turns agent hallucination into an effective search strategy
source: github
url: https://github.com/machunter/llmll
date: '2026-10-08'
tags:
- ai-agents
- catchup
- contract-driven-development
- formal-verification
- github
- smt-solver
- typed-holes
- z3
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50006215'
comments: https://news.ycombinator.com/item?id=50006215
why_read: Learn how pairing LLM code generation with formal contracts and SMT solvers
  converts hallucination from a reliability flaw into a viable search strategy. This
  project illustrates a practical architecture for provably correct agent-driven software
  development.
authors:
- machunter
---

Most AI coding workflows treat model hallucination as an outright failure mode. LLMLL inverts this dynamic by using formal contracts to turn hallucination into a bounded search strategy.

In this setup, programs define explicit functional contracts, leaving typed holes for an LLM agent to complete. Instead of relying on prompt coaxing or fuzzy test assertions, the compiler passes the generated candidate body straight to the Z3 SMT solver. The solver mathematically proves whether the generated body satisfies the contract before permitting a merge.

This decouples agent collaboration from fragile conversational state. Multiple agents coordinate through explicit contracts rather than chatter. If an agent hallucinates a wild implementation that satisfies the logical specification, the compiler accepts it; if the logic fails, Z3 refutes it instantly.

Formal methods give agentic code generation the deterministic boundary that standard test suites simply cannot guarantee.
