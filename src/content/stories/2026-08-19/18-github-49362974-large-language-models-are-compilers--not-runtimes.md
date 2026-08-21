---
authors:
- oesimania
comments: https://news.ycombinator.com/item?id=49362974
date: '2026-08-19'
depth_score: 8
hn_id: '49362974'
image: /infographics/18-github-49362974.jpg
interest_score: 8
novelty_score: 9
section: ai
source: github
tags:
- catchup
- compiled-ai
- compilers
- deterministic-execution
- github
- large-language-models
- local-first
- plan-creation
- runtime
- rust
title: Large language models are compilers, not runtimes
url: https://github.com/inxm-ai/inxm-local
utility_score: 8
why_read: This describes a novel paradigm for AI workflows where LLMs act as compilers
  to produce deterministic, versioned plans, rather than as improvisational runtimes.
  Readers will learn about a Rust-based local-first desktop application that implements
  this approach, focusing on clarity and control in AI interactions.
---

Building reliable AI agents often feels like wrestling with a black box, constantly battling LLM improvisation at runtime. What if we shifted the paradigm entirely?

This open-source Rust project, INXM, proposes using the LLM as a compiler rather than a runtime. You feed it natural language intent, and it outputs a validated, versioned plan. This plan is then executed deterministically, ensuring predictability and control.

This is a profound architectural shift. Instead of letting the AI improvise in the critical path, you leverage its reasoning capabilities upfront to generate a structured, executable program. This approach drastically enhances reliability and debugging for agentic systems.

Think about the implications for production-grade AI applications. Moving from unpredictable runtime behavior to compiled, validated plans could be the key to unlocking robust and trustworthy AI agents.

This project offers a practical blueprint for building AI systems that you can truly depend on.