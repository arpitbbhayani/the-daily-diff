---
title: Mastering prompt caching vocabulary for cost-effective AI agents
source: hn
url: https://coolhandlabs.com/updates/llm-prompt-caching-what-it-is-and-key-terms-explained
date: '2026-08-20'
tags:
- ai-agents
- catchup
- cost-optimization
- hn
- llm-inference
- prompt-caching
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49374810'
comments: https://news.ycombinator.com/item?id=49374810
why_read: This article demystifies prompt caching vocabulary used by different AI
  providers, explaining why a lack of understanding can lead to increased costs. Readers
  will learn the precise meaning of key terms and how they differ across providers
  to optimize AI agent costs.
authors:
- mikecarroll
---

Prompt caching is often hailed as "free money" in the LLM inference stack, but many teams see their bills increase after turning it on. The issue lies in confusing terminology and varying implementations across providers like Anthropic, OpenAI, and Gemini.

This cheatsheet clarifies key terms such as cache write, cache read, refresh, and TTL, explaining what each truly means and where provider offerings diverge. Understanding these nuances is crucial because prompt caching stores the computed state of a prompt prefix, avoiding costly recomputation of lengthy system instructions, tool definitions, and conversation history.

For most production AI workloads, particularly agent-based ones, the prompt can dwarf the response. Properly leveraging prompt caching can lead to substantial cost savings and efficiency gains, but only if you navigate the complexities of each provider's approach.
