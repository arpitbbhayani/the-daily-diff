---
title: Kimi Delta Attention excels; Cross-Layer Value Routing improves DeltaNets
source: arxiv
url: http://arxiv.org/abs/2607.07953v1
date: '2026-07-08'
tags:
- adamw
- arxiv
- catchup
- cross-layer-value-routing
- cs.AI
- cs.LG
- deltanet
- gated-deltanet
- kimi-delta-attention
- muon
- recurrent-linear-attention
- self-attention
- training-throughput
- validation-loss
arxiv_id: '2607.07953'
categories: cs.LG, cs.AI
why_read: This paper offers a comparative study of recent recurrent linear-attention
  architectures, detailing their mechanistic differences and evaluating their performance.
  Readers will gain insights into which architectures achieve optimal validation loss
  and training throughput, and learn about the proposed Cross-Layer Value Routing
  for further improvements.
authors:
- Tommaso Cerruti
- Tim Rieder
- George Rowlands
- Lingfeng Jin
- Imanol Schlag
---

The quadratic cost of self-attention is a major bottleneck for scaling Large Language Models to longer contexts. New research directly compares linear attention architectures to address this.

This study delves into mechanisms like DeltaNet and Kimi Delta Attention, articulating their differences in expressivity, memory decay, and critical training throughput. It is not just theoretical; experiments run on 350M-parameter models trained on 15B tokens.

A significant finding is that hybrid stacks can improve loss at a throughput cost, and Muon consistently lowers final validation loss. The paper also introduces lightweight cross-layer routing, showing a modest improvement by forwarding write values to subsequent layers.

Understanding these trade-offs is crucial for anyone building or optimizing LLM infrastructure. This work provides concrete data on how different attention designs impact performance and scalability.

Optimize your LLM architectures for better performance and longer contexts.
