---
title: Engineering Diagnostic AI as a Safety-Oriented Reasoning Framework
source: arxiv
url: http://arxiv.org/abs/2607.08038v1
date: '2026-07-09'
tags:
- aegisdx
- arxiv
- catchup
- clinical-reasoning
- cs.AI
- diagnostic-error
- llm-safety
- must-not-miss-conditions
arxiv_id: '2607.08038'
categories: cs.AI
why_read: This article introduces AegisDx, a safety-oriented framework for diagnostic
  AI that improves accuracy and identifies critical 'must-not-miss' conditions by
  integrating rigorous reasoning and evidence verification. It demonstrates how focusing
  on safety over raw predictive accuracy can lead to more transparent and clinically
  meaningful decision support.
authors:
- Fan Ma
- "Mauro Giuffr\xE8"
- Donald Wright
- Kent McCann
- Mark Iscoe
- Lingfei Qian
- Mingyang Jiang
- Chi Wing Ng
- Na Hong
- Huan He
- Cathy Shyr
- Qingyu Chen
- Lee Schwamm
- Lucila Ohno-Machado
- Hua Xu
---

Diagnostic errors are a major patient safety threat, and LLMs often treat diagnosis as a one-shot prediction. AegisDx introduces a safety-oriented framework for AI-assisted differential diagnosis, a critical leap forward.

This system coordinates specialized LLM components through role-specific contracts, enforcing explicit screening for dangerous "must-not-miss" conditions and rigorously verifying reasoning against grounded medical evidence. It improved physician-rated composite safety scores from 4.31 to 4.55 in blinded evaluations.

For engineers working on high-stakes applied AI, AegisDx demonstrates how to build robust systems with explicit safeguards and verifiable reasoning. It is about engineering AI not just for accuracy, but for fundamental safety and clinical utility.
