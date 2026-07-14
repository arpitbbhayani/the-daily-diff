---
title: LLM Workflows Become Inspectable, Resumable Knowledge Objects via a New Model
source: arxiv
url: http://arxiv.org/abs/2607.08740v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- conceptual-model
- cs.AI
- cs.PL
- cs.SE
- derive-infer
- knowledge-objects
- llm-workflows
- semantic-persistence
arxiv_id: '2607.08740'
categories: cs.AI, cs.PL, cs.SE
why_read: Read this to understand a new Lisp-inspired conceptual model that transforms
  LLM application workflows into inspectable, resumable knowledge objects. You will
  learn about the key distinction between deterministic 'derive' and mediated 'infer'
  operations.
authors:
- Emanuele Quinto
- Carlo Andrea Rozzi
- Francesco Zanitti
---

LLM applications are moving beyond single prompts to complex, multi-step workflows. How do you manage, inspect, and audit these intricate processes?

This paper proposes a conceptual model where LLM workflows, their instances, inference records, and context snapshots are all treated as "persistent knowledge objects." Think of it like a live image, but for your agent's entire operational history.

This approach draws inspiration from Lisp's symbolic forms and object identity. It distinguishes between "derive" (deterministic computation) and "infer" (LLM judgment) to ensure that every step is understandable and resumable.

For building reliable and observable AI agents, making workflows themselves a form of knowledge is a powerful idea.
