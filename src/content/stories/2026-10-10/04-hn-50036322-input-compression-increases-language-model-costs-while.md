---
title: Input compression increases language model costs while reducing accuracy
source: hn
url: https://arxiv.org/abs/2606.24083
date: '2026-10-10'
tags:
- catchup
- hn
- inference-cost
- input-compression
- linguistic-compression
- output-compression
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50036322'
comments: https://news.ycombinator.com/item?id=50036322
why_read: Read this to understand why compressing prompt inputs paradoxically increases
  total inference costs and degrades model accuracy. It establishes concrete trade-offs
  between input and output compression across multiple benchmarks.
authors:
- Morayo Danielle Adeyemi
- Ryan A. Rossi
- Franck Dernoncourt
image: /infographics/04-hn-50036322.jpg
---

Compressing input prompts to save tokens often produces the exact opposite result in production systems. Many developers adopt telegraphic prompt phrasing under the assumption that fewer input tokens directly lower inference bills. New benchmarks across eight models reveal that compressing user inputs actually increases total cost by roughly fifteen to eighty percent.

When prompts strip away standard grammar and structure, language models compensate by generating significantly longer responses. At the same time, task accuracy degrades sharply because the semantic grounding weakens. Output compression, by contrast, operates very differently. Constraining model completion length reliably cuts realized costs by up to three times across major API providers without triggering equivalent accuracy collapses.

If you want to reduce your operational LLM expenditure, focus your engineering effort on constraining response verbosity rather than stripping context from incoming queries.
