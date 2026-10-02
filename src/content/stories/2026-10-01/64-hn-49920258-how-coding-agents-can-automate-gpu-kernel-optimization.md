---
title: How coding agents can automate GPU kernel optimization
source: hn
url: https://mlc.ai/agentic-gpu-programming-for-mlsys/index.html
date: '2026-10-01'
tags:
- catchup
- coding-agents
- compiler-harness
- gpu-kernels
- hn
- mlsys
- performance-profiling
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49920258'
comments: https://news.ycombinator.com/item?id=49920258
why_read: Read this to understand how compiler harnesses and autonomous coding agents
  can be combined to write, benchmark, and optimize high-performance GPU kernels for
  machine learning systems.
authors:
- crowwork
---

Writing fast GPU kernels for attention, matrix multiplication, and fused operations requires navigating microarchitecture trade-offs that overwhelm standard code generation models. Giving an LLM a raw prompt rarely produces performant Triton or CUDA code without an integrated feedback harness.

Agentic GPU Programming for MLSys demonstrates how compiler-driven environments allow coding agents to write, diagnose, and benchmark high-performance kernels. The architecture couples program analysis tools and hardware profilers directly to the agent runtime, providing concrete feedback on memory coalescing, register pressure, and shared memory bank conflicts.

Instead of treating code generation as a single-pass inference problem, the compiler harness logs performance metrics across iterations and maintains an evidence-backed search history. This enables the agent to systematically explore optimization spaces and reject regressions before deploying kernels to production.

Automated kernel optimization succeeds only when the agent is paired with rigorous compiler diagnostics.
