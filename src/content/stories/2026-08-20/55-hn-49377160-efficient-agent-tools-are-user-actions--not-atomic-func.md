---
title: Efficient Agent Tools are user actions, not atomic functions
source: hn
url: https://twitter.com/sshchoholiev/status/2090470082006614114
date: '2026-08-20'
tags:
- agent-tools
- catchup
- efficiency
- hn
- large-language-models
- tool-design
- user-actions
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49377160'
comments: https://news.ycombinator.com/item?id=49377160
why_read: Read this to understand a new mindset for designing efficient Agent Tools
  for large language models. You will learn why treating tools as user actions rather
  than atomic functions improves agent performance, reduces cost, and minimizes errors.
authors:
- Serhii Shchoholiev
- Hypha
---

Many engineers build LLM agent tools like atomic functions, leading to slow, expensive, and error-prone agents. A recent ablation study involving 300 eval runs on database access for agents reveals a critical paradigm shift: think of tools as 'user actions.'

This means designing tools that are more comprehensive, closer to a high-level user interaction rather than fine-grained API calls. The study found that limiting tool output size significantly improved agent success by cutting token usage by 40 percent, much like how senior engineers know that more logs do not always mean better signal.

The key takeaway is context engineering. It is not about simply providing more context; it is about providing the *right* context at the *right* time. This empirical work offers actionable insights into making your LLM agents truly efficient and reliable.
