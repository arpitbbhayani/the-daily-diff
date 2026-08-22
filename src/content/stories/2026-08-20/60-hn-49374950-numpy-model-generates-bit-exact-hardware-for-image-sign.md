---
title: NumPy Model Generates Bit-Exact Hardware for Image Signal Processors
source: hn
url: https://revelaisp.com
date: '2026-08-20'
tags:
- bit-exact-hardware
- catchup
- fpga
- hardware-generation
- hn
- image-signal-processor
- numpy
- verification
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49374950'
comments: https://news.ycombinator.com/item?id=49374950
why_read: Readers will learn how Revela ISP uses a NumPy model to directly generate
  and verify bit-exact hardware for image signal processors. This approach streamlines
  development by making the model the sole source for specification, simulation, and
  hardware generation.
authors:
- lanserge
---

The Revela ISP project offers a paradigm shift in hardware design, demonstrating a complete camera image signal processor generated entirely from NumPy code and running on an FPGA. What makes this truly compelling is the "model is the hardware" approach, where the NumPy model serves as the specification, simulator, and source for bit-exact Verilog generation.

This means there is no hand-written Verilog, and the system refuses to emit hardware if it cannot verify bit-exact agreement against the Python model. The compiler even handles automatic pipeline register placement, dramatically simplifying complex hardware development and verification, which is a notorious bottleneck.

While applied to FPGAs, this methodology has profound implications for software engineering. It showcases how robust, verifiable systems can be built by treating high-level, executable specifications as the definitive source, a principle highly relevant for designing critical software systems.
