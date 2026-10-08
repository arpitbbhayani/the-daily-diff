---
title: AutoCompact trains coding agents to manage context compaction
source: news
url: https://academy.dair.ai/papers
date: '2026-10-07'
tags:
- catchup
- coding-agents
- context-compaction
- news
- reinforcement-learning
- swe-bench
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49993126'
comments: https://news.ycombinator.com/item?id=49993126
why_read: Read this to understand how training coding agents to dynamically compress
  their own context history can significantly improve benchmark pass rates.
authors:
- omarsar
---

Managing context windows in long-horizon coding agents remains one of the trickiest harness design challenges. Fixed compaction rules or blunt truncation usually destroy critical state, causing agents to regress midway through complex tasks.

Recent work on AutoCompact introduces an autonomous approach where the agent learns its own compaction policy. Rather than relying on external heuristics, the model decides what working memory to retain and when to execute compaction. This architecture yielded a 9.2 point increase on SWE-bench Verified across both 16K and 256K context configurations.

Treating working memory as an actively edited workspace rather than an append-only log prevents catastrophic context degradation. For engineers building production agent harnesses, training or prompting models to manage their own state transition boundaries is becoming the standard paradigm.

Context hygiene is an active policy decision, not an infrastructure post-processing step.
