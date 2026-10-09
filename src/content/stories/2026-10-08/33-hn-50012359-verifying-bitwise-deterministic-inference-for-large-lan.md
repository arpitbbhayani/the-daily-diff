---
title: Verifying bitwise deterministic inference for large language model systems
source: hn
url: https://arxiv.org/abs/2609.38981
date: '2026-10-08'
tags:
- catchup
- deterministic-inference
- formal-verification
- hn
- kv-cache
- triton
- verus
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '50012359'
comments: https://news.ycombinator.com/item?id=50012359
why_read: Read this to understand how runtime optimizations introduce non-determinism
  into LLM serving systems and how formal verification can guarantee bitwise-identical
  logits across execution variations.
authors:
- Jianxing Qin
- Alexander Du
- Danfeng Zhang
- Matthew Lentz
- Danyang Zhuo
---

Current production LLM engines do not provide true output determinism under load. Even with temperature set to zero and greedy sampling enabled, batch-invariant modes in runtimes like vLLM and SGLang still drift. Dynamic batch compositions, chunked prefill, and paged KV-cache reuse introduce floating point reordering across GPU warps, producing divergent logits across identical user prompts.

A new verified inference system called Vosti tackles this at the foundation. It establishes a formal specification requiring bitwise-identical logits across all scheduling variations, then enforces it using split verification across the host and GPU boundary. A Verus inductive proof confirms that the CPU scheduler and prefix-sharing KV-cache logic maintain logical token mappings, while a custom Triton analyzer proves that kernel outputs stay bitwise invariant regardless of batch sizes or memory layouts.

Vosti matches the decoding throughput of standard batch-invariant engines while fully eliminating output drift. For distributed systems engineers building reliable regression testing or consensus protocols on top of LLM outputs, this proof technique demonstrates how to make inference fully repeatable without throwing away hardware acceleration.

True reproducibility requires verifying the entire execution path down to the memory layout.
