---
title: Dynamic and concise languages reduce LLM token costs
source: hn
url: https://danluu.com/pl-tokens/
date: '2026-08-10'
tags:
- catchup
- code-compactness
- dynamic-languages
- hn
- llms
- static-languages
- token-efficiency
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49239189'
comments: https://news.ycombinator.com/item?id=49239189
why_read: This text discusses the token efficiency of programming languages for LLMs,
  presenting evidence that dynamic and concise languages like Clojure or J can significantly
  reduce token costs compared to static languages. Readers will gain insight into
  a potentially crucial factor for language selection in AI-driven contexts.
authors:
- matt_d
---

Choosing the right programming language for your AI agents could save you substantial token costs and improve correctness. Research shows a 2.6x token cost difference between C and Clojure, with array languages like J showing even greater efficiency.

This is not just about brevity; it profoundly impacts the context window utilization and the model's ability to reason effectively within budget. More concise code allows for richer surrounding context or more complex prompts, directly enhancing agent performance without a model upgrade.

The article also importantly critiques LLM evaluations that use trivial problems. Benchmarks using simple "print an answer" tasks often fail to capture real-world performance differences, leading to misleading conclusions about language efficacy. Focus on meaningful problem complexity in your own evaluations.

Understanding these dynamics is crucial for senior engineers building production-grade AI systems. It is not just about what the model can do, but how efficiently and effectively you enable it to do it.
