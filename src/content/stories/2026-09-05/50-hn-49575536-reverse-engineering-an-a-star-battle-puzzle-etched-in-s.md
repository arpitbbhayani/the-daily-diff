---
authors:
- Semtexzv
comments: https://news.ycombinator.com/item?id=49575536
date: '2026-09-05'
depth_score: 9
hn_id: '49575536'
image: /infographics/50-hn-49575536.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- bounded-model-checking
- catchup
- circuit-extraction
- gdsii
- hn
- reverse-engineering
- silicon
- standard-cells
- star-battle
- verilog
title: Reverse engineering an A Star Battle puzzle etched in silicon
url: https://semtexzv.github.io/blog/reverse-engineering-an-asic/
utility_score: 6
why_read: This post details the methodology for reverse engineering a physical chip
  layout from GDSII to recover its circuit and determine a serial input. Readers will
  gain insight into the multi-stage process of deconstructing silicon designs, including
  techniques for standard cell identification and functional analysis.
---

Reverse engineering a physical chip layout from a GDSII file might seem like an arcane art, but this post breaks down the entire process with impressive technical depth. It demonstrates how to transform mask polygons into standard-cell footprints, extract connectivity into structural Verilog, and then use formal verification tools like Yosys and ABC to understand the chip's function.

This is not just an academic exercise; the methodology for systematically deconstructing a complex system, even a hardware one, offers valuable transferable skills. Understanding the layers from physical layout to logical function can inform how you approach debugging and optimizing high-performance software systems.

The article's use of a "Star Battle" puzzle as a concrete example makes the complex process surprisingly accessible, showcasing how deep technical challenges can be approached with rigor and specific tools.