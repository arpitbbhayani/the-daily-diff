---
title: Reasoning Consistency Scanning Reveals Inconsistency in AI Models
source: arxiv
url: http://arxiv.org/abs/2607.07229v1
date: '2026-07-08'
tags:
- ai-safety-evaluation
- arxiv
- catchup
- chain-of-thought
- cs.AI
- faithfulness
- inconsistency-taxonomy
- reasoning-consistency
- reasoning-consistency-scanning
arxiv_id: '2607.07229'
categories: cs.AI
why_read: Understand reasoning consistency scanning, a novel method for detecting
  logical inconsistency in AI model outputs, distinct from faithfulness. This work
  provides a framework for AI safety evaluation, showing these inconsistencies are
  present, detectable, and systematic.
authors:
- Silvia Santano
---

Chain-of-Thought (CoT) reasoning in LLMs is often unfaithful; the stated reasoning does not reliably reflect the model's true internal process. Detecting this usually requires complex, controlled interventions.
New research introduces "Reasoning Consistency Scanning" as a practical, post-hoc alternative. This framework assesses whether an LLM's stated CoT is logically consistent with its final answer, a property detectable from the transcript alone.
The paper formalizes consistency, distinct from faithfulness, and defines a six-subtype taxonomy of inconsistency. A validated benchmark of 60 transcripts was manually adapted for this purpose.
Implementing a working scanner, the research found that reasoning inconsistency is present across various generator models and task types, and its prevalence varies systematically. For example, some models might be consistently inconsistent in specific task patterns.
This framework provides engineers with a crucial tool for auditing the validity of LLM reasoning in safety evaluations, enhancing the trustworthiness of AI agents and applied AI systems without needing to peer inside the model's black box.
