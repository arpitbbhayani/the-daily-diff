---
title: Building an open-source AI accelerator developed by AI
source: github
url: https://github.com/FeSens/openTPU
date: '2026-10-06'
tags:
- ai-accelerator
- catchup
- compiler
- fpga
- github
- hardware-design
- isa
- systemverilog
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49980715'
comments: https://news.ycombinator.com/item?id=49980715
why_read: Explore a complete, end-to-end AI accelerator implementation from Python
  matmuls down to hardware RTL and FPGA execution.
authors:
- FeSens
image: /infographics/03-github-49980715.jpg
---

Building custom AI inference silicon usually requires multi-million dollar budgets and proprietary toolchains. OpenTPU takes a radically transparent approach by bundling an entire AI accelerator inside a single open-source repository.

The project includes the SystemVerilog hardware RTL, custom instruction set architecture, bit-exact simulator, kernel language compiler, and host PCIe drivers. It runs real models like Qwen and LFM on a Kintex-7 FPGA card with matching token-for-token output against its simulator.

For backend and systems engineers curious about what happens beneath CUDA or vLLM, this monorepo provides a readable vertical slice of modern hardware acceleration. You can trace an attention operation from high-level Python code directly down to physical memory bandwidth and hardware execution cycles.

Seeing the complete pipeline from compilation to hardware execution demystifies the mechanics of specialized matrix engines.
