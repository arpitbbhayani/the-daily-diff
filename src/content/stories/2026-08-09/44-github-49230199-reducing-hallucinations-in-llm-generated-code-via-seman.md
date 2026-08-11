---
title: Reducing Hallucinations in LLM-Generated Code via Semantic Triangulation
source: github
url: https://github.com/msv-lab/just-tri-it
date: '2026-08-09'
tags:
- bug-detection
- catchup
- correlated-errors
- github
- hallucinations
- llm-generated-code
- semantic-triangulation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49230199'
comments: https://news.ycombinator.com/item?id=49230199
why_read: This paper introduces 'semantic triangulation' to address hallucinations
  in LLM-generated code. It explains why common approaches like majority voting often
  fail due to correlated errors and proposes a more robust bug detection method.
authors:
- Yihan Dai
- Sijie Liang
- Haotian Xu
- Peichu Xie
- Sergey Mechtaev
---

LLM-generated code is powerful, but it often suffers from hallucinated bugs that are notoriously difficult to detect. A core issue is that LLMs make *correlated* errors, meaning simple majority voting across multiple samples often just amplifies shared misconceptions rather than revealing the truth.

This new approach, 'semantic triangulation,' offers a powerful alternative. Instead of relying on flawed internal 'witnesses' (like LLM-generated tests or specifications), it introduces independent semantic checks that do not share the LLM's biases. This is like a detective cross-referencing conflicting testimonies with objective evidence.

Engineers building coding agents or using LLMs for critical code generation will find this methodology invaluable. It moves beyond just sampling more outputs to fundamentally improve the trustworthiness and correctness of the generated code.
