---
title: Blink achieves high-performance one-pass typed decisions with C and WebAssembly
source: github
url: https://github.com/sqliteai/blink
date: '2026-09-22'
tags:
- c-runtime
- catchup
- github
- low-latency-inference
- open-source-ai
- system-one-model
- typed-decisions
- webassembly
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49801558'
comments: https://news.ycombinator.com/item?id=49801558
why_read: This describes Blink, an open-source System One Model for rapid, typed decisions.
  Readers will learn about a high-performance alternative for structured decision-making
  in software that avoids token generation and integrates easily via C or WebAssembly.
authors:
- marcobambini
---

There is a fascinating new open-source project called Blink: a 452KB decision model implemented in C/WASM, designed for extremely fast, structured "System One" decisions. Unlike traditional LLMs, it generates no tokens. 

This is a game-changer for embedding AI into resource-constrained environments or applications demanding ultra-low latency. Think about IoT devices, edge computing, or even web applications where you need instant, confident, and typed decisions without the overhead of complex LLM inference. 

Blink's design emphasizes efficiency: a C runtime, WebAssembly support, and minimal dependencies. If you are building systems that need to make quick, deterministic choices based on specific criteria, this offers a compelling alternative to general-purpose models, providing high utility for practical applied AI.
