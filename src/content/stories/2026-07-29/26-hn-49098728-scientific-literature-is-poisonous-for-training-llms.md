---
authors:
- surprisetalk
comments: https://news.ycombinator.com/item?id=49098728
date: '2026-07-29'
depth_score: 7
hn_id: '49098728'
image: /infographics/26-hn-49098728.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- data-toxicity
- hn
- llm-training
- model-performance
- scientific-literature
title: Scientific literature is poisonous for training LLMs
url: https://www.reinvent.science/p/the-scientific-literature-is-poisonous
utility_score: 8
why_read: This piece argues that scientific literature is harmful for training LLMs
  due to its unreliability and provides empirical evidence that removing it can improve
  model performance and reduce toxic output.
---

Here is a counter-intuitive finding that might change how you think about LLM data curation: the 21st-century scientific literature can be detrimental to LLM training. It is not always the high-quality source we assume it to be.

A major research team from MIT, Cornell, Carnegie Mellon, Google, and OpenAI discovered that *removing* ArXiv, PhilPapers, and NIH ExPorter from training corpora actually improved LLM performance on academic questions and overall benchmarks, while also reducing toxic output.

This points to a deeper issue: scientific papers are often filled with half-truths, convenient omissions, and 'dressed-up' experiments to secure publication. More data does not automatically mean better data, and blindly including academic sources can poison your model's reasoning and reliability.