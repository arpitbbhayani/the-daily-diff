---
title: Training low-VRAM LoRA adapters using GGUF base models
source: github
url: https://github.com/woct0rdho/transformers5-qwen3.5-recipe
date: '2026-10-10'
tags:
- catchup
- gguf
- github
- lora
- low-vram-training
- peft
- transformers
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50034625'
comments: https://news.ycombinator.com/item?id=50034625
why_read: Read this repository to learn how to train LoRA adapters with low VRAM usage
  on quantized GGUF base models. You will gain practical techniques for optimizing
  memory during fine-tuning while retaining compatibility with Transformers and PEFT.
authors:
- woct0rdho
---

Fine-tuning large language models frequently stalls at the GPU memory barrier because keeping full unquantized weights in VRAM alongside optimizer states is prohibitively expensive. Teams are often forced to choose between massive multi-GPU clusters or compromising on base model size.

This training recipe demonstrates how to run LoRA adapters directly over GGUF quantized base models inside PyTorch and Hugging Face Transformers. By locking the quantized base weights in memory and accumulating gradients strictly through low-rank adapter projections and custom attention kernels, you can fine-tune frontier architectures like Qwen and DeepSeek inside a single 40GB VRAM envelope.

This approach eliminates the need to dequantize base weights during parameter-efficient fine-tuning. It drastically lowers infrastructure costs for engineering teams maintaining domain-specific adapter layers.
