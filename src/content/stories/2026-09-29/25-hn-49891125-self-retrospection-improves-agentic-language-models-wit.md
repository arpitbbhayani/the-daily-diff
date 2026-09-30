---
title: Self-retrospection improves agentic language models without reinforcement learning
source: hn
url: https://arxiv.org/abs/2609.35741
date: '2026-09-29'
tags:
- agentic-models
- catchup
- hn
- next-token-prediction
- retrospection-only-fine-tuning
- self-retrospection
- swe-bench
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49891125'
comments: https://news.ycombinator.com/item?id=49891125
why_read: Read this paper to discover how language model agents can improve performance
  by training exclusively on retrospective explanations of their own experience without
  relying on reinforcement learning or verifiers.
authors:
- Jonathan Light
- Christopher Zhang Cui
- Jeonghye Kim
- Roger Creus Castanyer
- Emiliano Penaloza
- Zhengyan Shi
- Alessandro Sordoni
- "Marc-Alexandre C\xF4t\xE9"
- Xingdi Yuan
- Minseon Kim
---

Most post-training pipelines for agentic coding models rely heavily on complex reinforcement learning loops like PPO or GRPO paired with automated verifiers. A new technique called Retrospection-Only Fine-Tuning (ROFT) challenges that assumption by showing that self-explanation alone drives significant policy improvements.

The training loop is remarkably minimal: the agent attempts a software engineering task, observes feedback, writes a retrospective explanation of its attempt, and trains solely on those explanation tokens using standard next-token prediction loss. It requires zero external teachers, no reward model, and no policy gradients.

In benchmarks with Qwen3.5-4B on SWE-bench Verified and SWE-bench Pro, ROFT reached 49.2 percent and 26.8 percent solve rates in just 20 update steps. In comparison, GRPO achieved 48.0 percent and 25.3 percent after 40 updates on the same tasks. ROFT even succeeded in teaching the model to solve problems where all 64 initial baseline attempts had failed.

Generating explicit verbal reasoning about past failures appears to update internal representations much more efficiently than raw reward signals.
