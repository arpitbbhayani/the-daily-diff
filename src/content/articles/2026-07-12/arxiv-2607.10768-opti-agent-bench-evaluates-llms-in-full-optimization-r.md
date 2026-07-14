---
title: Opti-Agent-Bench evaluates LLMs in full optimization R&D pipeline
source: arxiv
url: http://arxiv.org/abs/2607.10768v1
date: '2026-07-12'
tags:
- arxiv
- benchmarking
- catchup
- code-implementation
- cs.AI
- failure-modes
- llm-agents
- mathematical-modeling
- optimization-problems
arxiv_id: '2607.10768'
categories: cs.AI
why_read: This text introduces Opti-Agent-Bench, a new benchmark for evaluating LLM
  agents on end-to-end optimization R&D. It exposes critical failure modes like constraint
  omission and model-code inconsistency that traditional benchmarks miss.
authors:
- Yongchang Fu
- Xinjie Huang
- Chengjun Dai
- Chengzhe Feng
- Junshao Zhang
- Hong Zhu
---

Current benchmarks for LLM-based agents solving optimization problems often miss the most critical challenge: translating complex business requirements into correct, efficient models. Opti-Agent-Bench changes the game.

This new benchmark evaluates LLMs across the *entire* optimization R&D pipeline. This includes understanding business language, formal mathematical modeling, selecting algorithms, implementing code, and even generating solution reports.

Its design features business-semantic authenticity with anti-template traps to defeat pattern matching, ensuring agents truly understand the problem. It also includes modular evaluation with cross-module consistency checks.

The ORAC bi-level validity framework ensures both task quality and scoring integrity. It reveals critical failure modes like constraint omission, model-code inconsistency, and report-implementation divergence that single-metric evaluations overlook.

For senior engineers deploying AI agents to solve real-world problems, this benchmark provides invaluable insights into the practical capabilities and pitfalls of these systems, pushing toward more robust applied AI solutions.
