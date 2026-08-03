---
authors:
- popopanda
comments: https://news.ycombinator.com/item?id=49133851
date: '2026-08-01'
depth_score: 8
hn_id: '49133851'
image: /infographics/12-github-49133851.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- catchup
- deepseek-reasoning
- direct-preference-optimization
- forgetting
- generalized-reinforcement-policy-optimization
- github
- gpu-optimization
- kl-divergence
- llm-post-training
- reinforcement-learning
- super-fine-tuning
title: Minimal LLM Post-Training Experiments Reveal RL Forgets Less Than SFT
url: https://github.com/pochenai/nano-llm-posttraining
utility_score: 8
why_read: Read this to understand the mechanistic differences between SFT, DPO, and
  GRPO in LLM post-training, particularly how they influence catastrophic forgetting
  and the emergence of complex reasoning on minimal hardware.
---

Fine-tuning large language models often feels like an exercise for those with endless GPU clusters, but this project proves you can conduct meaningful LLM post-training experiments on a single 8GB GPU.

It provides minimal, readable implementations for SFT, DPO, and GRPO using HuggingFace TRL, all under 100 lines of core code. This makes it incredibly accessible for engineers looking to understand exactly what each technique changes in model behavior.

You can observe phenomena like reduced forgetting in reinforcement learning compared to SFT, measured by KL divergence, and even see how GRPO amplifies specific reasoning styles, such as DeepSeek-R1. This is not just theoretical; it offers a direct, reproducible path to practical understanding.

This project is a goldmine for anyone looking to get hands-on with LLM fine-tuning without breaking the bank or getting lost in complex codebases.