---
title: PERFOPT-Bench Reveals Agent Optimization Depends on Workload, Not LLM Alone
source: arxiv
url: http://arxiv.org/abs/2607.07744v1
date: '2026-07-08'
tags:
- agent-frameworks
- arxiv
- benchmarking
- catchup
- code-correctness
- coding-agents
- cs.SE
- llms
- performance-optimization
- speedup-measurement
- workload-dependence
arxiv_id: '2607.07744'
categories: cs.SE
why_read: Read this to understand a novel benchmark, PERFOPT-Bench, for evaluating
  AI agent performance optimization. It reveals that agent performance is workload-dependent
  rather than solely determined by the LLM, and warns against using raw speedup as
  a benchmark score.
authors:
- Yingyun Cui
- Yi Xie
- Piaohong Wang
- Jiawei Ma
- Bo Liu
- Liangliang Cao
---

Evaluating coding agents has largely focused on functional correctness, but real-world software demands measurable speedups. Performance optimization is a truly distinct agentic task, requiring profiling, diagnosis, code edits, and rigorous verification of gains.
PERFOPT-Bench is a new benchmark designed for this full performance-engineering loop. It tests agents on providing a correct but suboptimal codebase and asks for performance improvements, verifying speedup and correctness.
Results show that optimization performance is highly workload-dependent; no single agent stack (different LLMs/frameworks) dominates across all tasks. Changing the agent framework significantly alters an LLM's per-task speedup profile, highlighting the importance of agent design.
This benchmark offers critical insights for anyone building or using AI agents for complex engineering challenges beyond just "make it work."
