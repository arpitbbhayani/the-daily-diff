---
authors:
- Anastasia Birillo
- Stanislav Sandler
comments: https://news.ycombinator.com/item?id=49081921
date: '2026-07-28'
depth_score: 8
hn_id: '49081921'
image: /infographics/59-hn-49081921.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- code-generation
- hn
- kotlin
- kotlinllm
- llm
- open-source
- research-prototype
- runtime-logic-delegation
- smart-macros
- test-doubles
- typed-data-parsing
title: KotlinLLM Open-Sources for Dynamic Runtime Logic Delegation
url: https://blog.jetbrains.com/research/2026/07/kotlinllm-open-source/
utility_score: 8
why_read: This article introduces KotlinLLM, an open-source research prototype that
  allows delegating runtime logic to an LLM from Kotlin code. Readers will learn how
  'Smart macros' facilitate dynamic code generation and improve application flexibility.
---

JetBrains just open-sourced KotlinLLM, a game-changer for integrating LLMs into your applications. This is not just another API wrapper; it is a research prototype that delegates runtime logic to an LLM by having it generate and update actual Kotlin source code.

Think about that for a moment: instead of endlessly prompting or building complex agent orchestrations, your Kotlin code can explicitly call an LLM to generate logic on the fly. This enables fascinating use cases like asLlm for robust, typed parsing of unstructured data and mockLlm for stateful test doubles that adapt behavior based on runtime calls.

This paradigm offers a powerful new way to embed LLM intelligence directly into your application's core logic, moving beyond simple API calls to a more deeply integrated, adaptive system. For those building AI-powered features in Kotlin, this could drastically simplify development and open doors to more dynamic systems.