---
authors:
- Esaka, Yusuke
comments: https://news.ycombinator.com/item?id=49049884
date: '2026-07-25'
depth_score: 9
hn_id: '49049884'
image: /infographics/03-hn-49049884.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- asma
- catchup
- hn
- kv-cache-attention
- llm-attention-acceleration
- persistent-state-machine
- von-neumann-bottleneck
title: Persistent State Machine accelerates LLM attention beyond von Neumann model
url: https://zenodo.org/records/21566453
utility_score: 8
why_read: This paper introduces the Persistent State Machine, a new computational
  paradigm designed to overcome the von Neumann memory wall in LLM inference. Readers
  will learn how the Active State-machine Memory Architecture (ASMA) implements PSM
  to achieve extraordinary speedups and energy savings for LLM KV-cache attention
  compared to GPUs.
---

The von Neumann memory wall is the silent killer of LLM inference performance, and this paper proposes a radical solution: the Persistent State Machine (PSM).

Forget incremental optimizations. PSM defines a formal computational paradigm where computation broadcasts instructions to stationary in-memory cells, evaluating state transitions locally. The Active State-machine Memory Architecture (ASMA) implements this, drastically reducing system bus traffic by 99.47 percent and net step energy by 99.44 percent against GPU baselines.

For engineers wrestling with long-context, multi-batch decoding, ASMA demonstrates an extraordinary 2,129x physical speedup. This is not just a tweak; it is a fundamental rethinking of how we process LLM attention, offering a blueprint for the next generation of AI hardware.