---
title: Nola's infer-ask syntax unifies LLM prompts and types
source: hn
url: https://nola.sh/
date: '2026-09-10'
tags:
- api-design
- catchup
- developer-experience
- hn
- llm-inference
- nola
- prompt-engineering
- typescript
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49646501'
comments: https://news.ycombinator.com/item?id=49646501
why_read: This text introduces Nola's infer and ask syntax, demonstrating how it simplifies
  LLM inference by unifying prompts, types, and schema into a single, compiler-understood
  expression. Readers will learn about a novel approach to building LLM applications
  with enhanced clarity and less boilerplate.
authors:
- emykhailenko
---

This is a game-changer for building AI applications. Nola, a TypeScript superset, proposes integrating LLM inference directly into the language, much like `async/await` made asynchronous operations native.

Instead of juggling schemas, prompts, and types across different SDK calls, Nola allows developers to express LLM interactions as a single, typed language construct. This means your compiler, editor, and runtime all understand the full contract, drastically reducing boilerplate and ensuring type safety.

This paradigm shift eliminates the "glue code" common in current LLM development workflows, making agent behavior more robust and maintainable. It is an exciting step towards making AI agents feel like native components of our software.
