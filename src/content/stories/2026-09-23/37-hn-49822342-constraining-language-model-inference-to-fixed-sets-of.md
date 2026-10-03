---
title: Constraining language model inference to fixed sets of candidate probabilities
source: hn
url: https://rcarmo.github.io/projects/go-system-one/
date: '2026-09-23'
tags:
- candidate-probabilities
- catchup
- gemma
- hn
- native-go-inference
- structured-outputs
- token-tree-scoring
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49822342'
comments: https://news.ycombinator.com/item?id=49822342
why_read: Learn how go-system-one evaluates structured classification decisions by
  directly scoring prefix trees of allowed answers in a native Go runtime. It offers
  a clear mental model for constrained inference without relying on free-form text
  generation or external C++ dependencies.
authors:
- rcarmo
---

Generating unstructured text only to parse it back into a structured enum is one of the most wasteful patterns in production LLM pipelines. You pay full autoregressive generation latency and risk malformed output.

Go System One demonstrates a cleaner architectural alternative by running constrained classification directly against Gemma checkpoints in native Go. Instead of emitting tokens sequentially, the engine compiles allowed responses into a prefix tree and scores valid paths across reused KV caches.

The runtime eliminates dependencies on llama.cpp, cgo, or CUDA toolkits by driving hardware execution directly through raw NVIDIA PTX via driver APIs and SIMD. This reduces memory footprint and simplifies operational deployment.

Treating classification as tree scoring rather than token generation fundamentally changes the cost and latency dynamics of edge inference.
