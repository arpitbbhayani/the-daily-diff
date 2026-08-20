---
title: Trie automata accelerate constrained decoding over large finite sets
source: hn
url: https://arxiv.org/abs/2608.12574
date: '2026-08-18'
tags:
- aho-corasick
- batch-serving
- catchup
- constrained-decoding
- hn
- large-language-models
- structured-output-generation
- token-masking
- trie-automata
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49347292'
comments: https://news.ycombinator.com/item?id=49347292
why_read: This paper introduces trie automata, a novel method for significantly accelerating
  constrained decoding in large language models, especially for large finite sets.
  Readers will learn how to achieve substantial throughput improvements for structured
  output generation in LLMs.
authors:
- Xingzi Xu
- Karim Bouyarmane
---

Constrained decoding is a significant bottleneck when LLMs need to generate structured outputs, like JSON or specific values from a large vocabulary. Traditional grammar compilation methods become prohibitively slow as the number of valid options scales.

A new approach, the trie automaton, significantly cuts down this overhead. By leveraging shared prefixes and fixed depths common in finite sets, and adapting Aho-Corasick multi-pattern matching, it precomputes token masks far more efficiently.

This specialization delivers a 7X faster per-step valid-token computation compared to XGrammar, a primary backend in vLLM. Even more impressive, for batch serving, it enables a 29X end-to-end throughput increase at batch size 256.

The innovation here is not just an algorithm; it is a system-level optimization that creates a stateless serving path. This bypasses guided decoding overhead, unlocking massive gains for production LLM inference where structured output is essential.

This technique is a game changer for building performant, reliable LLM agents that interact with external systems. It guarantees 100 percent output validity with sub-100ms compilation for up to 10,000 values, irrespective of vocabulary size.
