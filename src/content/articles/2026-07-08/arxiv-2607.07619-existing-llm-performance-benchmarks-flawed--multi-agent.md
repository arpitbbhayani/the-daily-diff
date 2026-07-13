---
title: Existing LLM Performance Benchmarks Flawed, Multi-Agent Test Generation Proposed
source: arxiv
url: http://arxiv.org/abs/2607.07619v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.SE
- functional-correctness
- large-language-models
- multi-agent-framework
- performance-benchmarks
- runtime-differences
- statistical-testing
- test-generation
arxiv_id: '2607.07619'
categories: cs.SE
why_read: Read this to understand why current LLM performance benchmarks fail to accurately
  measure execution-time differences. You will learn about a new multi-agent framework
  designed to generate more effective tests for exposing these performance improvements.
authors:
- Nhat Minh Le
- Yisen Xu
- Zhijie Wang
- Tse-Hsun
- Chen
---

LLMs are generating code, but how good is its performance? Current benchmarks often miss the mark, showing little difference between LLM-generated and canonical solutions.

This paper rigorously re-evaluated 1,538 tasks from four popular benchmarks. A surprising finding: only 6.11% of "performant" implementations were statistically significantly faster than canonical solutions with existing tests.

Many potential performance gains were simply not exposed by the original tests. To address this, a new LLM-based multi-agent framework was developed, capable of generating performance-oriented tests.

This framework uses three agents for generation, diagnosis, and repair of tests. With DeepSeek-v3.1 and GPT-4o, it uncovered significant performance improvements in 24.01% and 25.43% of tasks where original tests failed to do so.

It is clear that effective performance evaluation for LLM-generated code requires smarter, agent-driven test generation.
