---
title: AgentNAS Bridges LLMs and NAS for Automated Architecture Design
source: arxiv
url: http://arxiv.org/abs/2607.07984v1
date: '2026-07-08'
tags:
- agentnas
- architecture-design
- arxiv
- catchup
- cs.AI
- large-language-models
- neural-architecture-search
- search-space-generation
- slotted-architecture
arxiv_id: '2607.07984'
categories: cs.AI
why_read: Read this to understand how AgentNAS leverages large language models to
  automate the crucial and previously manual task of neural architecture search space
  design. You will learn about a new state-of-the-art method for neural network architecture
  design that combines the strengths of LLMs and conventional NAS.
authors:
- Seokhoon Jeong
- Mijung Kim
- Taehwan Kim
---

Neural Architecture Search (NAS) methods, while efficient, are often constrained by manually engineered search spaces. This requires significant domain expertise and rebuilding for every new task.

Introducing AgentNAS, a powerful framework that bridges LLM-driven design with traditional NAS. An LLM first produces a high-quality "seed architecture," then decomposes it into a "slotted architecture."

This slotted architecture automatically defines a bounded, task-specific search space, eliminating the need for manual engineering. Conventional NAS then explores this space, finding optimal configurations.

AgentNAS establishes a new state of the art on 11 out of 17 tasks spanning classification, regression, and segmentation. This innovative division of labor between LLM and NAS proves robust across different LLM capabilities.

Automate and optimize your AI model architectures efficiently with AgentNAS.
