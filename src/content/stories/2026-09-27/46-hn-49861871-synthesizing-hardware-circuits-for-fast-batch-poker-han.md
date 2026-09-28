---
title: Synthesizing hardware circuits for fast batch poker hand evaluation
source: hn
url: https://roderickgreen.com/posts/fast-poker-hand-eval/
date: '2026-09-27'
tags:
- bitslicing
- catchup
- circuit-optimization
- code-generation
- hardware-synthesis
- hn
- poker-evaluator
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49861871'
comments: https://news.ycombinator.com/item?id=49861871
why_read: Learn how synthesizing and minimizing hardware circuits can be used to generate
  branch-free, bitsliced software that achieves extreme speedups. It offers a practical
  demonstration of hardware design techniques applied directly to high-throughput
  algorithmic performance.
authors:
- Roderick Green
---

Compiling software by pretending you are designing an integrated circuit can yield staggering performance gains.

Traditional approaches to complex batch evaluations rely heavily on giant lookup tables or deeply nested decision trees. In hand evaluation workloads like Omaha poker, evaluating combinations across billions of states creates massive memory pressure and branch mispredictions. Lookup tables that work well for small card combinations fail to scale when combinations grow into the trillions.

By framing the evaluation problem as a digital logic circuit, you can pass the problem definition into hardware logic minimizers. Once the boolean network is minimized, you can synthesize the resulting gate graph directly into bitsliced, branch-free C code and WebGPU compute shaders. Every logical operation maps cleanly to parallel bitwise instructions across registers.

This architecture completely eliminates branching and cache thrashing. In benchmark tests against traditional table-based evaluators, this hardware synthesis approach achieved a 100x speedup while scaling across 65 trillion validated evaluations.

When standard algorithmic optimizations stall, compiling your code as a virtual circuit might be the fastest path forward.
