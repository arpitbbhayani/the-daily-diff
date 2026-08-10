---
title: Page-aware Metal inference enables oversized sparse MoE models on Apple Silicon
source: github
url: https://github.com/amos-labs/expertcache
date: '2026-08-08'
tags:
- apple-silicon
- catchup
- expertcache
- github
- metal-inference
- mixture-of-experts
- oversized-models
- page-aware-caching
- research-software
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49226502'
comments: https://news.ycombinator.com/item?id=49226502
why_read: Read to understand how experimental page-aware Metal inference research
  enables oversized sparse Mixture-of-Experts models to run on Apple Silicon hardware.
  You will learn about a novel approach for managing large expert tensors without
  copying them entirely into active memory.
authors:
- rick_barkley
---

Running a 120B LLM, which typically consumes 63GB of memory, on an M1 Pro with only 16GB RAM sounds impossible, yet ExpertCache demonstrates exactly that. This project is a game-changer for local LLM inference and resource-constrained deployments.

The core innovation lies in its experimental page-aware Metal runtime, specifically designed for oversized sparse Mixture-of-Experts models on Apple Silicon. It intelligently manages memory without binding or copying the complete expert tensor into the active Metal working set. This technique allows a model much larger than available VRAM to execute efficiently by only loading necessary expert pages on demand.

This pushes the boundaries of what is possible on consumer hardware, offering a glimpse into future LLM infrastructure optimizations. If you are grappling with memory constraints for large models, studying ExpertCache's approach could unlock significant performance gains for your projects.
