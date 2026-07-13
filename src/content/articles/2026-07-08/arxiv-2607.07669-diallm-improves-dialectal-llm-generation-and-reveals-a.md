---
title: DiaLLM Improves Dialectal LLM Generation and Reveals a Reward Gap
source: arxiv
url: http://arxiv.org/abs/2607.07669v1
date: '2026-07-08'
tags:
- arxiv
- australian-english
- catchup
- continual-pretraining
- cs.AI
- cs.CL
- dialectal-english
- dialectal-generation
- human-evaluation
- indian-english
- international-corpus-of-english
- large-language-models
- model-alignment
- northern-british-english
- reward-quality-gap
- supervised-fine-tuning
arxiv_id: '2607.07669'
categories: cs.CL, cs.AI
why_read: This text introduces DiaLLM, a framework for generating dialectal English
  with LLMs, and demonstrates that human preferences for dialectal output are not
  captured by current benchmarks, revealing a significant reward-quality gap.
authors:
- Jordan Painter
- Dipankar Srirag
- Adarsh Kappiyath
- Diptesh Kanojia
- Aditya Joshi
- Lu Yin
---

Large language models often understand different English dialects, but struggle to produce dialectal output, sticking to standard US-leaning English. This paper, introducing DiaLLM, dives deep into this robustness-generation gap.

The research shows that dialectal robustness and generation are fundamentally dissociated. Methods that boost understanding do not automatically translate to better dialectal generation.

Through experiments with continual pretraining and various alignment strategies, the paper reveals that explicitly targeting dialectal adaptation can produce recognizably dialectal output. However, even the most aggressively optimized reward methods were not preferred by human evaluators, indicating a significant reward-quality gap.

For software engineers building global AI applications, this means simply using benchmarks to evaluate dialectal performance is insufficient. Closing this gap requires richer reward designs and continued investment in dialectal resources to ensure LLMs can truly serve a diverse user base.
