---
title: DOOM rendering and game logic compiled into a transformer
source: github
url: https://github.com/physicsrob/torchwright_doom/
date: '2026-08-31'
tags:
- autoregressive-rendering
- catchup
- computation-graph
- doom
- github
- torchwright
- transformer
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 10
hn_id: '49514445'
comments: https://news.ycombinator.com/item?id=49514445
why_read: This text reveals how the classic game DOOM can be compiled into a transformer
  model for autoregressive rendering. Readers will understand the novel approach of
  transforming game logic into a computation graph processed by an LLM.
authors:
- physicsrob
---

Imagine compiling an entire video game, with its complex rendering and game logic, directly into a large language model. That is precisely what this project achieves by turning DOOM into a Hugging Face Phi3ForCausalLM transformer.

This is not a mere simulation; the imperative program's computation graph is transformed into an autoregressive neural network. The transformer takes input tokens and outputs pixel information, effectively rendering the game step-by-step, akin to how a chat model generates text.

This pushes the boundaries of how we conceive of LLMs, moving beyond text generation to universal computation. For senior engineers working with LLM infrastructure and applied AI, this offers profound insights into the computational universality of transformers and could inspire entirely new approaches to problem-solving. It demonstrates the surprising flexibility of these architectures.
