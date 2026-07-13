---
title: SAO Improves Stability and Off-Policy Training for LLMs in Agentic Tasks
source: arxiv
url: http://arxiv.org/abs/2607.07508v1
date: '2026-07-08'
tags:
- agentic-tasks
- arxiv
- asynchronous-rl
- beyondaime
- catchup
- cs.AI
- cs.LG
- glm-5.2
- grpo
- imoanswerbench
- large-language-models
- off-policy-learning
- online-learning
- reinforcement-learning
- sao
- single-rollout-sampling
- swe-bench-verified
- token-level-clipping
- training-stability
arxiv_id: '2607.07508'
categories: cs.LG, cs.AI
why_read: This paper introduces SAO, a novel asynchronous RL approach for LLMs, demonstrating
  how single-rollout sampling and token-level clipping can significantly improve training
  stability and task effectiveness. You will learn about a more efficient and robust
  method for training LLMs on long-horizon agentic tasks, particularly in online learning
  settings.
authors:
- Zhenyu Hou
- Yujiang Li
- Jie Tang
- Yuxiao Dong
---

Training large language models for long-horizon agentic tasks with Reinforcement Learning is notoriously inefficient using traditional synchronous, batch-interleaved pipelines. Asynchronous RL is the future, but stability and effectiveness often lag.
This paper introduces SAO - Single-Rollout Asynchronous Optimization. It tackles key challenges in asynchronous RL for LLMs, like off-policy effects and training stability.
SAO replaces group-wise sampling with single-rollout sampling and uses strict double-side token-level clipping. The results are compelling: SAO trains stably for thousands of steps and consistently outperforms GRPO variants on benchmarks like SWE-Bench Verified and BeyondAIME.
This is a significant step forward for agentic RL, demonstrating practical advancements in LLM post-training. It is already deployed in training the open GLM-5.2 model (750B-A40B), showcasing its real-world impact.
