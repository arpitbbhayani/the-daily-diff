---
title: Why agent harnesses need plans as discrete state machines
source: hn
url: https://swarmagent.dev/resources/engineering/plans-harnesses-and-final-handoffs/
date: '2026-09-24'
tags:
- agent-harnesses
- catchup
- context-compaction
- hn
- plan-mode
- state-machines
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49828496'
comments: https://news.ycombinator.com/item?id=49828496
why_read: This article explains why agent harnesses require structured planning to
  avoid the context compaction trap and maintain execution reliability.
authors:
- swarmagent
---

Most AI agent harnesses fail because engineers treat them as loose while-loops feeding raw history back into an inference API. When you accumulate unpruned tool traces and file reads across hours of execution, you inevitably trigger the compaction trap. You end up paying frontier token prices to summarize discarded scratchpad text while effectively lobotomizing the model.

The real failure mode is not poor reasoning, but context pollution. Truncating context or asking a model to summarize past actions discards precise technical constraints and induces hallucinations. Instead of treating context as an expanding log that requires periodic compaction, runtime state should be governed by discrete, bounded plan transitions.

A robust harness treats plans as explicit state machines rather than static prompts. By separating durable task state from ephemeral execution buffers, the system avoids context bloat entirely. Each discrete step executes within a clean window, passing only bounded structured artifacts to the next phase.

Context management is the fundamental bottleneck of production agent architecture.
