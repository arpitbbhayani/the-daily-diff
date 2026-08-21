---
title: StateM runtime system improves long-horizon agent execution performance
source: hn
url: https://huggingface.co/papers/2608.15089
date: '2026-08-19'
tags:
- catchup
- harness-scaling
- hn
- long-horizon-agents
- runtime-system
- statem
- terminal-bench
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49357544'
comments: https://news.ycombinator.com/item?id=49357544
why_read: This paper introduces StateM, a runtime system that significantly improves
  the execution of long-horizon agents. Readers will learn how durable states, recoverable
  runbooks, and procedural controls can boost agent accuracy and reduce costs without
  modifying underlying models.
authors:
- Ziheng Qin
- Yaxin Lu
- Zhangyang Atlas Wang
- Kai Wang
---

Most agent frameworks fail not because the underlying model is weak, but because their execution environment struggles with long-horizon tasks. StateM introduces a critical paradigm shift: rather than tweaking model weights, optimize the runtime itself. This agent-native system uses durable states, recoverable runbooks, and enforceable procedural controls. Its results are impressive. 

On Terminal-Bench 2.1, StateM boosts GPT-5.5 xhigh from 83.1% to 92.1% accuracy, surpassing GPT-5.6 Sol Ultra. With GPT-5.6 Sol xhigh, it hits 95.3% raw accuracy across 445 trials. This is not about a bigger model; it is about smarter system design. 

For engineers building production-grade AI agents, this paper offers actionable blueprints. It shows how structured execution, context management, and procedural adherence are the keys to agent reliability and cost reduction, reducing API usage significantly. This is true harness scaling.
