---
title: Poisoned Chalice LLM Evaluation Competition Setup and Results
source: arxiv
url: http://arxiv.org/abs/2607.07481v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.SE
- data-contamination
- large-language-models
- llm-evaluation
- membership-inference
- poisoned-chalice-competition
- software-engineering
arxiv_id: '2607.07481'
categories: cs.SE
why_read: This paper details the design and outcomes of the Poisoned Chalice competition,
  offering insights into practical methods for detecting large language model data
  contamination in software engineering.
authors:
- Jonathan Katzy
- Ali Al-Kaswan
- Razvan Mihai Popescu
- Zhou Yang
---

The validity of LLM evaluations, especially for software engineering tasks, is often undermined by a hidden problem: data contamination. If a model has seen benchmark instances during pretraining, its performance can be deceptively inflated.
Since training corpora are often not fully disclosed, detecting prior exposure becomes a major challenge. This report details the "Poisoned Chalice of LLM Evaluation Competition," framed as a white-box membership inference task on source code.
The competition provides curated datasets and target models to encourage methods that generalize beyond superficial artifacts. It aims to catalyze the community to develop robust, trustworthy LLM evaluation practices.
For anyone building or evaluating AI models, understanding and mitigating data contamination is paramount to drawing accurate conclusions about true model capabilities.
