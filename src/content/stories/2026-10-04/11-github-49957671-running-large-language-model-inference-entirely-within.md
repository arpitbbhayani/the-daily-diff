---
title: Running large language model inference entirely within FPGA fabric
source: github
url: https://github.com/Nero7991/llm.vhdl
date: '2026-10-04'
tags:
- catchup
- fpga
- github
- hbm
- int4
- llm-inference
- qwen
- vhdl
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49957671'
comments: https://news.ycombinator.com/item?id=49957671
why_read: Understand how to implement and validate a full-fabric VHDL transformer
  inference engine on FPGAs using on-card HBM. It demonstrates INT4 streaming matrix-vector
  multiplication and bit-accurate hardware verification against llama.cpp.
authors:
- Nero7991
---

Running large language model inference typically relies on high-end GPUs consuming hundreds of watts. llm.vhdl implements an entire transformer inference engine directly in FPGA fabric, hosting Qwen3.5 INT4 weights fully inside on-card High Bandwidth Memory without relying on a host CPU runtime.

The hardware design packs INT4 streaming matrix-vector multiplication, Gated DeltaNet, and gated attention directly into the FPGA logic. To verify numerical precision, activations across every layer are captured through evaluation callbacks and verified bit-accurately against a reference C model and llama.cpp.

Moving the full sequencer and tokenizer pipeline into hardware demonstrates how custom silicon architectures can bypass standard memory bandwidth bottlenecks in modern transformer inference.
