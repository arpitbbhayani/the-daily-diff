---
title: Agentic System Optimizes CUDA Kernels Through Automated Refinement Cycle
source: github
url: https://github.com/bertaye/agentic-cuda-optimizer
date: '2026-09-25'
tags:
- ai-agents
- benchmarking
- catchup
- code-generation
- cuda-optimization
- github
- langgraph
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49842596'
comments: https://news.ycombinator.com/item?id=49842596
why_read: This describes an agentic system that automates the optimization of CUDA
  kernels. Readers will learn how AI agents can streamline GPU performance tuning
  through an iterative cycle of code generation, benchmarking, and refinement.
authors:
- bertaye
---

This agentic CUDA kernel optimizer is a game-changer for anyone struggling with GPU performance. It uses LangGraph to autonomously generate, test, and refine CUDA code and launch configurations.

Forget manual optimization loops. This system queries GPU properties, researches NVIDIA documentation, and even inspects Nsight Compute counters to inform its experiments. It means your kernels are not just correct, they are fast.

The C++ CUDA harness compiles with NVRTC and launches via the CUDA Driver API, while Python handles the agentic logic and comparisons. This is a genuinely novel application of AI agents in high-performance computing.

You can see a future where critical performance tuning is not just assisted, but driven by intelligent agents.
