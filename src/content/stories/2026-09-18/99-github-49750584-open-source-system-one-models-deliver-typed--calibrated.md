---
title: Open-source System One models deliver typed, calibrated LLM decisions
source: github
url: https://github.com/ikermoel/open-alternative-jev
date: '2026-09-18'
tags:
- calibrated-decisions
- catchup
- github
- open-source-llm
- system-one-model
- typed-decisions
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49750584'
comments: https://news.ycombinator.com/item?id=49750584
why_read: This describes an open-source project that provides typed, calibrated decisions
  from open-weight LLMs in a single pass, offering an alternative to commercial solutions.
  Readers will learn how to achieve efficient and reliable decision outputs from LLMs
  with transparent benchmarking.
authors:
- ikermoel
---

Getting reliable, structured output from LLMs for agentic systems is a major challenge. This open-source project offers a compelling alternative to TypeSafe's Jev, enabling "System One" style calibrated decisions from any open-weights LLM in just one forward pass, running directly on your own GPU.

It is not just about generating text; it is about getting typed, deterministic answers. The approach dramatically cuts down on token usage and latency by reading the state once and answering questions from the next-token distribution, restricted to provided options. This is a game changer for building robust agents that need to make precise choices.

The project demonstrates strong benchmarks with models like Qwen3.6-27B, showing impressive accuracy and throughput for complex tasks. If you are wrestling with prompt engineering for structured data or trying to make your LLM agents more reliable and efficient, this is a critical tool to explore.

Leverage your existing open-weight models to make agents smarter and more trustworthy.
