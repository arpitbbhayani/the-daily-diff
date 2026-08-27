---
authors:
- riscoss
comments: https://news.ycombinator.com/item?id=49439609
date: '2026-08-25'
depth_score: 8
hn_id: '49439609'
image: /infographics/04-github-49439609.jpg
interest_score: 9
novelty_score: 9
section: ai
source: github
tags:
- catchup
- github
- hebbian-learning
- language-models
- persistent-memory
- semantic-retrieval
title: Sillage gives language models persistent memory without growing index
url: https://github.com/riscoss63/sillage
utility_score: 9
why_read: This describes Sillage, a novel method to equip language models with persistent
  memory and improved prediction, learning in a fixed memory footprint without gradients
  or growing indexes. It offers an efficient alternative to traditional fine-tuning
  or kNN-LMs.
---

Language models are infamous for forgetting everything between interactions, but what if a small, fixed-size memory could change that?

Sillage introduces a clever 4 MB, CPU-only memory that allows a frozen LLM to retain information across sessions. This is not fine-tuning and it does not involve a growing index. It even beats an unbounded kNN-LM at a fraction of the storage cost, dramatically improving perplexity from 31 to 17.

The system uses a combination of a Hebbian matrix, a semantic tier for routing, and a cold store that consolidates by surprise, alongside a rank-16 adapter. This architectural simplicity provides a powerful solution for building truly stateful and efficient AI agents without the typical computational overhead or complexity. It is a genuine step forward in practical applied AI.