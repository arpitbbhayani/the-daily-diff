---
title: RL Composes Primitive Skills Into Higher-Level Strategies Via Phased Composition
source: arxiv
url: http://arxiv.org/abs/2607.07646v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CL
- pretrained-models
- reinforcement-learning
- rejection-fine-tuning
- rewrite-grammars
- skill-composition
arxiv_id: '2607.07646'
categories: cs.AI, cs.CL
why_read: This text reveals how reinforcement learning composes primitive skills into
  higher-level strategies through a phased compositional mechanism, demonstrating
  its ability to build reusable procedures. It offers insights into RL's selective
  exploration and its advantage over rejection fine-tuning in consolidating valid
  structures.
authors:
- Azwar Abdulsalam
- Nishil Patel
- Andrew Saxe
---

This paper reveals a key insight for enhancing LLM reasoning: RL post-training does not merely amplify existing skills but actively builds new, higher-level compositional strategies. In a rewrite-grammar environment, models trained with RL solved held-out problems that pretrained models could not, even with 8x larger sampling budgets.

The secret lies in a phased compositional mechanism. RL first strengthens primitive reductions, then discovers valid composed procedures, including sequential and parallel compositions.

Crucially, these composed procedures are not one-off successes; they are reused and consolidated into a stable repertoire. This is a significant leap beyond rejection fine-tuning, which often produces many invalid shortcuts.

If you are working on agentic AI or complex LLM applications requiring robust multi-step reasoning, understanding this mechanism is vital for developing more capable and reliable systems.
