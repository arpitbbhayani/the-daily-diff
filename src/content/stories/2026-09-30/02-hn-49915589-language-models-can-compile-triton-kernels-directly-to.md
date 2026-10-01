---
title: Language models can compile Triton kernels directly to PTX
source: hn
url: https://arxiv.org/abs/2609.36800
date: '2026-09-30'
tags:
- ai-lowering
- catchup
- compiler-optimization
- gpu-architectures
- hn
- nvidia-ptx
- triton-kernels
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49915589'
comments: https://news.ycombinator.com/item?id=49915589
why_read: Read this to understand how LLM agents can replace conventional compiler
  backends by directly translating Triton kernels into PTX. You will learn how AI-driven
  lowering discovers hardware-specific optimizations that outperform traditional autotuned
  compilation pipelines.
authors:
- "Fran\xE7ois Costa"
- Charly Castes
- Thomas Bourgeat
- Azalia Mirhoseini
image: /infographics/02-hn-49915589.jpg
---

Replacing conventional compiler lowering pipelines with generative models is becoming a viable strategy for hardware optimization. Researchers have developed an agentic harness that translates Triton kernels directly into NVIDIA PTX assembly, outperforming autotuned Triton by up to 3.34x across Ada, Hopper, and Blackwell GPUs.

Traditional compiler backends rely on fixed heuristics that often fail to capitalize on hardware-specific optimizations. The AI agent discovers novel lowering transformations, such as decoding packed binary weights directly inside Tensor Core operands and mapping entire softmax rows into tensor memory for FlashAttention.

To ensure soundness, the system couples the LLM generation loop with an extended formal PTX verifier that models Blackwell tcgen05 Tensor Core interfaces, descriptor-based memory layouts, and asynchronous barriers.

This marks a practical shift toward automated, self-verifying agent workflows handling low-level kernel compilation.
