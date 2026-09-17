---
title: Quixotic AI provides modular building blocks for an AI stack on the JVM
source: hn
url: https://qxotic.ai/
date: '2026-09-15'
tags:
- ai-inference
- ai-sovereignty
- catchup
- hn
- java-ai-stack
- jvm
- llm-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49708628'
comments: https://news.ycombinator.com/item?id=49708628
why_read: This text introduces Quixotic AI, a project enabling a full, modular AI
  stack on the JVM. Readers will discover its components like Jinfer for inference
  and Jam for matrix multiplication, and see how to run LLMs and TTS natively in Java.
authors:
- mukel
---

Running advanced AI models directly within your JVM applications just got significantly easier. Meet Jinfer, a new AI inference engine specifically designed for the Java ecosystem.

This is not just another wrapper. Jinfer includes optimized components for quantized matrix multiplication, a multi-backend tensor engine for various hardware, and native support for formats like GGUF and Safetensors. It brings chat, vision, embeddings, and text-to-speech capabilities right into your Spring AI and LangChain4j setups.

For backend engineers building on Java, this means bringing LLMs and other AI directly into your services without external inference servers. This helps reduce latency and simplify your architecture significantly. This is a game-changer for AI integration in Java applications.
