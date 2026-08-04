---
authors:
- saikatsg
comments: https://news.ycombinator.com/item?id=49147170
date: '2026-08-02'
depth_score: 7
hn_id: '49147170'
image: /infographics/09-github-49147170.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- github
- hot-reloading
- intellij-idea
- jdi
- kotlin
- kotlinllm-plugin
- llm-driven-code-generation
- runtime-updates
- smart-macros
title: KotlinLLM plugin enables LLM-driven Smart macros for dynamic code
url: https://github.com/JetBrains-Research/kotlinllm-plugin
utility_score: 8
why_read: This describes an innovative IntelliJ IDEA plugin called KotlinLLM. Readers
  will learn how LLMs can enable dynamic code generation, runtime updates, and hot-reloading
  in Kotlin/JVM projects through "Smart macros."
---

JetBrains Research has unveiled KotlinLLM, an IntelliJ IDEA plugin that redefines how developers interact with AI for code generation. This is not just another copilot; it introduces 'Smart macros' where explicit Kotlin calls trigger LLM-backed behavior, generating source code that is persistent and portable.

The truly innovative aspect is the ability for the plugin to capture runtime values, ask an LLM agent for an implementation update when an unsupported scenario arises, compile the new code, and then hot-reload the affected class via JDI. This means iterative development with AI assistance becomes incredibly fluid.

For senior engineers, this represents a significant leap in developer productivity and dynamic code adaptation. It demonstrates a practical pathway for integrating AI directly into the language runtime and IDE experience, going beyond simple suggestions to active, on-the-fly code evolution.

Experience AI-driven development, live and hot-reloaded.