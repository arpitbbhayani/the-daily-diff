---
title: Correlated LLM name priors create ghost authors in academic publishing
source: hn
url: https://arxiv.org/abs/2606.02184
date: '2026-09-01'
tags:
- academic-publishing
- catchup
- data-fabrication
- digital-libraries
- ghost-authorship
- hn
- llm-name-priors
- zenodo
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49524524'
comments: https://news.ycombinator.com/item?id=49524524
why_read: This paper reveals how large language models generate correlated, nonexistent
  names that appear as ghost authors in academic publications. Readers will learn
  about the systemic risks posed by these model behaviors to digital libraries and
  research integrity.
authors:
- "Micha\u0142 Brzozowski"
- Neo Christopher Chung
---

Large language models exhibit a peculiar, consistent bias: they generate specific pairs or trios of fictional names, like "Elena Vasquez and Marcus Chen," at rates far exceeding random chance. These "ghost couples" appear across countless independent AI-generated documents.

This is not a minor quirk. These correlated name priors are model-family and version specific, providing dateable fingerprints of LLM behavior. More disturbingly, this phenomenon has led to thousands of ghost-authored academic records on repositories like Zenodo, complete with fabricated publication dates and real DOIs.

Understanding these inherent, emergent patterns in LLM outputs is critical for anyone building applied AI systems. It highlights a subtle but widespread data integrity issue and offers a warning about blindly trusting AI-generated content, even for seemingly innocuous details like names.

This deep dive into LLM internals changes how you approach data validation and content reliability in AI-driven applications.
