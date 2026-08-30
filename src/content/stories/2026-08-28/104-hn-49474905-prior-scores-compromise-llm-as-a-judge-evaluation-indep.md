---
title: Prior scores compromise LLM-as-a-Judge evaluation independence due to anchoring
  bias
source: hn
url: https://arxiv.org/abs/2608.25869
date: '2026-08-28'
tags:
- anchoring-bias
- catchup
- evaluation-independence
- hn
- llm-as-a-judge
- metadata
- prior-scores
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49474905'
comments: https://news.ycombinator.com/item?id=49474905
why_read: This paper reveals that LLM-as-a-Judge systems exhibit anchoring bias when
  given prior scores, compromising evaluation independence. Readers will learn how
  prior scores, even as context metadata, can systematically shift LLM judgments and
  the implications for content assessment in production pipelines.
authors:
- Ante Kapetanovic
- Kemal Altwlkany
- Andro Mercep
- Tomislav Duricic
- Emanuel Lacic
---

Anchoring bias is quietly sabotaging your LLM-as-a-Judge systems. New research reveals that simply including "prior scores" as context metadata—even if just for revision framing—systematically shifts LLM judgments towards those values.

This is not a minor nudge; the effect is significant. Across seven out of eight models evaluated, bootstrap intervals were consistently below zero for the anchoring effect. This compromise of evaluation independence is a critical flaw if you are relying on LLMs for filtering, scoring, or iterative refinement in production pipelines.

The takeaway is clear: LLMs are susceptible to the same cognitive biases as humans when given suggestive context. If your agentic system's decisions depend on independent evaluation, you must rigorously control the information presented to the LLM to prevent this unseen bias from corrupting your results.
