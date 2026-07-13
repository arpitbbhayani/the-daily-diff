---
title: Jet-Long Dynamically Adapts LLM Context Without Tuning
source: arxiv
url: http://arxiv.org/abs/2607.07740v1
date: '2026-07-08'
tags:
- agentic-workflows
- arxiv
- attention-merge
- catchup
- cs.AI
- cs.LG
- dynamic-rescaling
- hybrid-attention
- inference-optimization
- llm-context-extension
- perplexity
- rag
- rope
- throughput
- tuning-free
- zero-shot-context-extension
arxiv_id: '2607.07740'
categories: cs.LG, cs.AI
why_read: This paper introduces Jet-Long, a novel tuning-free method that dynamically
  extends LLM context, significantly improving performance and efficiency in long-context
  applications while retaining short-context fidelity. Readers will learn how this
  approach achieves state-of-the-art results on relevant benchmarks.
authors:
- Haozhan Tang
- Zerui Wang
- Yuxian Gu
- Song Han
- Han Cai
---

LLMs often struggle with long context, especially in RAG and agentic workflows, pushing past their pretraining window. Jet-Long introduces a tuning-free, zero-shot method that dynamically adapts context extension.

It pairs a local RoPE-faithful window with a long-range window, adapting its rescaling factor based on sequence length. This design recovers base model fidelity for short inputs and extrapolates cleanly for long ones.

Fusing this into a single CuTe kernel, Jet-Long achieves up to 1.39x throughput on H100s for long-context prefill. It also shows superior accuracy on benchmarks like HELMET-RAG, demonstrating practical gains without retraining.

This innovation makes LLMs far more usable and cost-effective for real-world long-context applications, with minimal overhead.
