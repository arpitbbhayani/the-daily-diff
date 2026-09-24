---
authors:
- Max Woolf
comments: https://news.ycombinator.com/item?id=49803085
date: '2026-09-22'
depth_score: 8
hn_id: '49803085'
image: /infographics/01-hn-49803085.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- agentic-coding
- catchup
- code-optimization
- hn
- llms
- performance-benchmarking
- rust
title: LLMs write faster Rust code through iterative agentic optimization
url: https://minimaxir.com/2026/09/agentic-iteration/
utility_score: 9
why_read: This post demonstrates how modern agentic LLMs can generate Rust code significantly
  faster than state-of-the-art libraries. Readers will understand the iterative optimization
  process and view benchmark results confirming 2x-20x speedups.
---

Modern agentic LLMs are now capable of far more than just generating code; they can iteratively optimize it for performance, delivering 2x-20x speedups in Rust. This research shows how carefully guided agents, like Claude Opus 4.5, transform existing code to run significantly faster.

The key insight is moving past vague instructions like "write better code." By implementing appropriate guardrails and specific optimization prompts, engineers can direct LLMs to refactor and improve performance-critical sections of code, bridging Python ergonomics with Rust's speed via PyO3.

This approach offers a tangible leap in developer productivity and system efficiency. Imagine your AI tooling actively contributing to the performance bottlenecks in your codebase, identifying and fixing slow operations with minimal human intervention.

This is not theoretical; the article provides both the exact prompts used and comprehensive benchmark results. It highlights how successive frontier models are improving in their ability to perform nuanced code optimization.

Harness AI agents to supercharge your code's execution.