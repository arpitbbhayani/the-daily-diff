---
title: DiffusionGemma generates text exceptionally fast using discrete diffusion
source: hn
url: https://arxiv.org/abs/2608.00146
date: '2026-08-20'
tags:
- catchup
- compute-efficiency
- diffusion-gemma
- discrete-diffusion
- fine-tuning
- hn
- large-language-models
- mixture-of-experts
- parallel-decoding
- reinforcement-learning
- sampler-distillation
- text-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49374287'
comments: https://news.ycombinator.com/item?id=49374287
why_read: This report introduces DiffusionGemma, an experimental language model that
  generates text exceptionally fast using discrete diffusion and parallel decoding.
  Readers will learn about its novel architecture and the compute-efficient two-stage
  fine-tuning process.
authors:
- "Adrien Ali Ta\xEFga"
- James Assiene
- Daniele Calandriello
- Rahma Chaabouni
- "Jo\xE3o Gante"
- Tamara von Glehn
- Nate Keating
- Chris Knutsen
- Martin Kukla
- Tianlin Liu
- Ivan Lobov
- Ofir Nabati
- "Jo\xE3o Gabriel Oliveira"
- Nicolas Perez-Nieves
- Nastasia Prutianova
- Bobak Shahriari
- Jean Tarbouriech
- Pavel Tyletski
- "\xC7a\u011Flar \xDCnl\xFC"
- Cindy Wu
- Glenn Cameron
- Jerome Connor
- Sertan Girgin
- Maarten Grootendorst
- Alon Levkovitch
- Eliya Nachmani
- Omar Sanseviero
- Piotr Stanczyk
- Quentin Berthet
- Andrew Campbell
- "Cl\xE9ment Crepy"
- Valentin De Bortoli
- Arnaud Doucet
- Romuald Elie
- Alexandre Galashov
- Klaus Greff
- Alexis Jacq
- David Ruhe
- Yu-Han Wu
- Sebastian Flennerhag
- Brendan O'Donoghue
- George Scrivener
- Shantanu Thakoor
---

The DiffusionGemma Technical Report unveils a truly novel approach to text generation that could reshape LLM inference. Instead of the typical one-token-at-a-time decoding, DiffusionGemma utilizes discrete diffusion to refine blocks of 256 tokens in parallel.

This breakthrough effectively bypasses the sequential decoding bottleneck that has limited the speed of conventional autoregressive language models. Imagine significantly faster responses from your AI agents and applications.

The model is obtained by fine-tuning an existing Gemma 4 MoE model through a compute-efficient two-stage training pipeline. For engineers building or deploying LLM-powered systems, this could herald a new era of high-speed, high-throughput AI applications.
