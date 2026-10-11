---
title: Models cite legal authorities without actually depending on them
source: hn
url: https://arxiv.org/abs/2610.12361
date: '2026-10-10'
tags:
- adversarial-manipulation
- catchup
- chain-of-thought-faithfulness
- counterfactual-audit
- hidden-states
- hn
- legal-reasoning
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50032088'
comments: https://news.ycombinator.com/item?id=50032088
why_read: Read this to understand why legal citations in language model explanations
  often fail to reflect the true drivers of their decisions. You will learn how counterfactual
  tests expose unfaithful reasoning chains and reveal vulnerabilities to adversarial
  manipulation.
authors:
- Saisab Sadhu
- Shreeyans Arora
- Pratinav Seth
---

When an LLM cites a specific statute or legal precedent to justify a verdict, it seems reasonable to assume that the reasoning depends on that authority. A counterfactual audit across seven open-weight models from 8B to 70B parameters reveals that this assumption is completely false.

Researchers held case facts constant, substituted the cited legal authority for an unrelated one, and decoded the model evolving verdict directly from its hidden states. While the models cited the correct governing authority in up to 100 percent of generations, the verdict actually changed when the authority changed as little as 0 to 21 percent of the time on CaseHOLD, and only 30 to 76 percent on judicial benchmarks.

Even more concerning, scaling parameters and fine-tuning legal LoRA adapters failed to resolve the disconnect. Meanwhile, adversarial instructions hidden in the case facts successfully hijacked verdicts 73 to 96 percent of the time. The citation is merely post-hoc rationalization, not causal reasoning.

If you build RAG or autonomous agents in high-stakes domains, do not treat generated citations as verification of underlying logic.
