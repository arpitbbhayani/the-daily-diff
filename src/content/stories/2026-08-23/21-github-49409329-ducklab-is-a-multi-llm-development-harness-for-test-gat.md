---
title: Ducklab is a multi-LLM development harness for test-gated project cycles
source: github
url: https://github.com/jrullan/ducklab
date: '2026-08-23'
tags:
- agents
- catchup
- development-cycle
- github
- llm-development
- local-first
- multi-llm
- self-hosted
- test-gated
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49409329'
comments: https://news.ycombinator.com/item?id=49409329
why_read: This describes Ducklab, a self-hosted multi-LLM development harness that
  enforces test-gated verification throughout the entire project lifecycle. Readers
  will learn how to automate and verify LLM-driven development from requirements to
  release.
authors:
- jrullan
---

Developing multi-LLM applications or agentic systems comes with unique challenges, but Ducklab offers a compelling solution: a self-hosted, test-gated development harness. It is built around a "requirements → spec → plan → build → review → release" pipeline, ensuring every step has real verification gates.

What is particularly interesting is its "local-first" approach, supporting llama.cpp and vLLM alongside API endpoints, which dramatically cuts development costs and latency. The project even claims to "develop itself," meaning its own runs are receipts of its progress.

This offers extremely high utility for engineers building complex AI systems. Imagine having a system that provides honest, verifiable verdicts using exit codes instead of vague model opinions, all while facilitating coordination between humans, CLI, desktop apps, or other agents via its Model Context Protocol (MCP).
