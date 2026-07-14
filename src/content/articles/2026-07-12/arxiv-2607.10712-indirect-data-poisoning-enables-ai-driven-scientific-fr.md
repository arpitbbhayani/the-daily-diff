---
title: Indirect Data Poisoning Enables AI-Driven Scientific Fraud at Scale
source: arxiv
url: http://arxiv.org/abs/2607.10712v1
date: '2026-07-12'
tags:
- artificial-intelligence
- arxiv
- autonomous-research-agents
- catchup
- cs.AI
- cs.CR
- cs.DL
- data-provenance-audit
- indirect-data-poisoning
- mitigation
- open-data-ecosystem
- scientific-fraud
arxiv_id: '2607.10712'
categories: cs.CR, cs.AI, cs.DL
why_read: This text introduces indirect data poisoning, a new AI-enabled method for
  scientific fraud at scale, and demonstrates how robust data provenance auditing
  can effectively mitigate such attacks. Readers will learn about this emerging threat
  to scientific integrity and practical mitigation strategies.
authors:
- "B\xE1lint Gyevn\xE1r"
- Atoosa Kasirzadeh
- Nihar B. Shah
---

Imagine AI agents unwittingly spreading scientific fraud. This paper uncovers "indirect data poisoning," a new attack where adversaries corrupt open datasets, turning honest AI-driven research into a vector for industrial-scale misinformation.

The attack is chillingly simple yet effective: corrupt an open dataset, upload it to a public repository, and autonomous research agents do the rest. They retrieve, process, and even generate false conclusions based on this poisoned data.

Across five socially-salient topics and multiple frontier AI systems (Claude, Codex, Gemini), poisoning succeeded in nearly 50% of runs, with detection rates at a paltry 6%. The adversary needs no direct agent access or prompt injection; just the open data ecosystem.

To combat this, the paper proposes a data provenance audit with five checks (referencing, social markers, anomalies, related datasets, caution). This auditing reduced the attack success rate to zero, showing that vigilance in data sourcing is paramount.

Protecting the integrity of AI-driven research requires robust data provenance and auditing; simple action-level filtering is not enough.
