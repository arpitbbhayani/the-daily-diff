---
title: NVIDIA's NOOA architecture boosts agent performance significantly
source: hn
url: https://developer.nvidia.com/blog/six-agent-harness-capabilities-for-higher-model-performance/
date: '2026-08-30'
tags:
- agent-architecture
- agent-harness
- arc-agi
- catchup
- cybergym
- hn
- model-performance
- nooa
- swe-bench
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49500489'
comments: https://news.ycombinator.com/item?id=49500489
why_read: Read this to understand how NVIDIA's NOOA open-source framework significantly
  improves agent performance through six key architectural capabilities. You will
  learn about its innovative design and its impressive results on challenging AI benchmarks.
authors:
- Ricardo Silveira Cabral
- Paul Furgale
---

Most AI agent failures are not due to weak models, but poorly designed harnesses. NVIDIA's NOOA (Object-Oriented Agents) framework unveils six crucial interface capabilities that dramatically improve agent performance.

Think about typed input/output, passing results by reference instead of serializing everything, and using code directly as actions. These ideas, combined with programmable loop engineering and explicit object state, allow agents to consume far fewer tokens and achieve higher success rates.

For example, NOOA reached 82.2 percent on SWE-bench Verified with GPT-5.5 using roughly half the tokens of comparison harnesses. It also solved 86.8 percent of CyberGym L1 tasks. This is not about bigger models; it is about smarter system design.

These principles offer a blueprint for building agentic AI that is not just smarter, but also more efficient and reliable.
