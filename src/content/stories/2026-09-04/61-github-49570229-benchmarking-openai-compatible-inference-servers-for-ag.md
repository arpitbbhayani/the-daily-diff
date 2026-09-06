---
title: Benchmarking OpenAI-compatible inference servers for agentic workloads with
  production traces
source: github
url: https://github.com/Applied-Compute/trie
date: '2026-09-04'
tags:
- agentic-workloads
- benchmarking
- catchup
- github
- inference-evaluation
- kv-cache-management
- openai-compatible-servers
- trace-replay
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49570229'
comments: https://news.ycombinator.com/item?id=49570229
why_read: This tool provides a lightweight benchmarking harness for OpenAI-compatible
  inference servers using synthetic workloads derived from production traces. It is
  particularly useful for evaluating complex, multi-turn agentic workloads that traditional
  benchmarks often overlook.
authors:
- Bluestein
---

Most current LLM inference benchmarks fall short when evaluating real-world agentic workloads. They often focus on prefill-heavy or decode-heavy scenarios, failing to capture the dynamic, multi-turn nature of how AI agents truly interact.

Real agentic applications present unique challenges, such as high per-turn prefill from tool outputs and increasing pressure on KV cache management as conversation context grows. These are distinct from typical chat or summarization tasks. Existing benchmarks often do not expose these performance bottlenecks.

This project, 'trie', provides a crucial tool for engineers working on LLM infrastructure. It is a lightweight harness that replays production-derived inference traffic, specifically designed to simulate these complex, agentic patterns against popular backends like vLLM, SGLang, and TensorRT-LLM.

Engineers can use trie to ensure their LLM serving infrastructure is truly optimized for the demands of autonomous agents, identifying and resolving performance issues before they impact production.
