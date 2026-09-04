---
title: LLM judges overlook citation defects that ontologies easily identify
source: hn
url: https://antithetical-labs.com/blog/the-judge-liked-it-better/
date: '2026-09-02'
tags:
- agent-output
- catchup
- citation-validation
- hn
- llm-evaluation
- ontologies
- typed-relation-checks
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49543771'
comments: https://news.ycombinator.com/item?id=49543771
why_read: This article demonstrates the limitations of LLM-based evaluation for specific
  defects, proposing that structured ontologies offer a more reliable method for validating
  agent output. Readers will learn how to apply typed relation checks to improve the
  accuracy and trustworthiness of AI agent systems.
authors:
- aals777
---

Relying on an LLM to judge the trustworthiness of another LLM's output is often a flawed strategy. A fascinating experiment showed that an LLM judge could not discern when all citations were stripped from a research memo, scoring it just as highly as the original.

The real win came from a simple "ontology" defined as a set of typed relation checks using JSON Schema and Python functions. This approach caught 100% of the defects, providing concrete feedback on which objects were broken. It turns out that explicit validation rules dramatically outperform an LLM's inherent "sense" of correctness.

This is a critical lesson for anyone building production-grade AI agents. Do not expect your models to self-correct for factual consistency without structural guardrails. Instead, give them a robust framework for validation, ensuring their outputs meet verifiable standards.
