---
title: Linguistic Illegibility Challenges LLM Security Mechanisms
source: hn
url: https://arxiv.org/abs/2609.02852
date: '2026-09-18'
tags:
- catchup
- hn
- linguistic-illegibility
- llm-security
- model-sandboxing
- taint-tracking
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49758689'
comments: https://news.ycombinator.com/item?id=49758689
why_read: This paper introduces 'linguistic illegibility' and argues that LLM security
  mechanisms relying on linguistic self-reporting are inherently unsound. Readers
  will learn about the limitations of current LLM security approaches and the potential
  of taint tracking for robust sandboxing.
authors:
- James Mickens
---

LLM security has a hidden flaw: "linguistic illegibility." The language an LLM outputs, or even its internal linguistic features, might not truly reflect how the model computes. This means security mechanisms relying on the model's self-reporting, like chain-of-thought monitoring, are inherently unreliable.

The core issue is that an LLM's internal operations are mathematical transformations over activation spaces, not language directly. Language is just a lossy translation layer. If the model's actual thought process is not linguistic, you cannot trust its linguistic self-reports for security.

This paper makes a strong case for sandboxing techniques that do not depend on reading the model's linguistic state at all. Taint tracking emerges as a promising approach, allowing you to define, a priori, what system state should never be influenced by model-produced data, regardless of what the LLM says it is doing.

It is a critical shift in thinking for building robust and secure AI systems.
