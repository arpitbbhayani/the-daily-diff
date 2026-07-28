---
authors:
- jakozaur
comments: https://news.ycombinator.com/item?id=49055561
date: '2026-07-26'
depth_score: 7
hn_id: '49055561'
image: /infographics/29-hn-49055561.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- cost-analysis
- hn
- tokenflation
- tool-calls
title: AI agents' excessive tool calls for simple greetings cause tokenflation
url: https://quesma.com/blog/tokenflation-when-hi-triggers-33-tool-calls/
utility_score: 9
why_read: Readers will learn about tokenflation, a phenomenon where AI agents consume
  excessive resources for simple tasks. This analysis reveals the hidden costs of
  AI overthinking and benchmarks various models.
---

Have you noticed your AI agents 

overthinking

 simple tasks, racking up costs and latency? This phenomenon, dubbed 

tokenflation,

 is a real challenge for production AI systems, and new benchmarks reveal just how bad it can get.

A trivial 

Hi

 prompt can trigger an agent to perform dozens of unnecessary tool calls 

inspecting repositories, running applications, and even attempting unsolicited code commits. Some models wasted significant time and money just to respond to a greeting. This is not just about token cost; it is about the precious human time lost waiting for an agent to finish its elaborate internal monologue.

This empirical analysis provides concrete data on model behavior, showing that not all agents are created equal when it comes to efficiency. Understanding this 

tokenflation

 is crucial for optimizing your agent designs and ensuring they deliver actual value without unnecessary overhead.