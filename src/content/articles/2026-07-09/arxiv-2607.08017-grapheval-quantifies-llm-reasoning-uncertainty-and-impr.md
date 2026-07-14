---
title: GRAPHEVAL Quantifies LLM Reasoning Uncertainty and Improves Fidelity
source: arxiv
url: http://arxiv.org/abs/2607.08017v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- cs.AI
- cs.CL
- graph-self-consistency
- grapheval
- large-language-models
- reasoning-fidelity
- self-consistency
- uncertainty-quantification
arxiv_id: '2607.08017'
categories: cs.CL, cs.AI
why_read: Read this to understand how GRAPHEVAL, GRCS, and GSC provide a graph-based
  framework to quantify uncertainty and enhance reasoning fidelity in LLMs. You will
  learn about a novel approach that improves upon existing decoding strategies like
  Self-Consistency.
authors:
- Riccardo Revalor
- Jalees Rehman
- Debjit Pal
---

Can we really trust an LLM's logic? This paper introduces GRAPHEVAL, a graph-based framework that moves beyond final-answer agreement to quantify uncertainty, coherence, and robustness in LLM reasoning by analyzing intermediate steps.

The Graph Reasoning Coherence Score (GRCS) measures semantic-structural consensus within reasoning paths, identifying "confident hallucinations" and pathological mode collapse. This is critical for evaluating LLM outputs beyond surface-level correctness.

For engineers building applied AI systems with LLMs, GRAPHEVAL offers a powerful toolkit to audit and enhance model trustworthiness. It is about ensuring LLMs not only get the right answer but also arrive at it through sound, verifiable logic.
