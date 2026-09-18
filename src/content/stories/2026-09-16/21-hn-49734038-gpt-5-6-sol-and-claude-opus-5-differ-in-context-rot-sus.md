---
title: GPT-5.6 Sol and Claude Opus 5 Differ in Context Rot Susceptibility
source: hn
url: https://www.boolean.ai/blog/context-rot-quantified
date: '2026-09-16'
tags:
- agentic-coding-tasks
- catchup
- claude-opus-5
- context-rot
- context-size
- gpt-5-6-sol
- hn
- llm-performance
- unrelated-context
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49734038'
comments: https://news.ycombinator.com/item?id=49734038
why_read: This study quantifies context rot in GPT-5.6 Sol and Claude Opus 5 on agentic
  coding tasks, revealing distinct performance degradation patterns based on context
  relevance and size. Readers will learn how these advanced LLMs respond differently
  to increasing and varied context.
authors:
- ssatia
---

Context window is not free space for an LLM. A new study on 'context rot' in agentic coding tasks reveals just how much performance degrades as context size grows, offering surprising insights.

GPT-5.6 Sol suffers significantly, whether the extra context is related or not. Claude Opus 5, however, maintains performance unless the irrelevant context becomes overwhelming. This points to fundamental architectural differences in how these models process information.

For engineers building AI agents, this is not just academic; it directly impacts agent reliability and token costs. Understanding these model-specific sensitivities allows for better context engineering, preventing silent performance drops and improving task success rates.
