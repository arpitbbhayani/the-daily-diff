---
arxiv_id: '49548229'
categories: ''
date: '2026-09-03'
depth_score: 8
image: /infographics/92-arxiv-49548229.jpg
interest_score: 8
novelty_score: 7
section: ai
source: arxiv
tags:
- arxiv
- catchup
title: ArXiv Paper
url: https://arxiv.org/abs/49548229
utility_score: 8
why_read: You will gain a deep understanding of why LLM outputs can be non-reproducible
  across different hardware or batch sizes, and learn about the underlying numerical
  causes and potential mitigation strategies essential for reliable AI systems.
---

The reliability of LLM inference, especially for reasoning tasks, is surprisingly fragile. A paper reveals that subtle numerical differences, often from floating-point arithmetic and limited precision like bfloat16, introduce significant nondeterminism.

This means changing factors like GPU count, version, or even batch size can lead to up to a 9 percent variation in accuracy and thousands of token differences in generated responses. This is not a minor bug; it is a fundamental challenge for robust AI systems.

Engineers building and deploying LLM infrastructure need to grasp these numerical sources of variability. The study provides the first systematic investigation, offering crucial insights into why your "deterministic" LLM might not be so deterministic after all, and how to start mitigating these issues for more reliable, reproducible AI.