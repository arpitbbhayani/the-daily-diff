---
title: Test-Time Harness Evolution Adapts LLM Agents Via Execution Traces
source: arxiv
url: http://arxiv.org/abs/2607.08124v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- cs.LG
- cs.SE
- execution-traces
- harness-evolution
- llm-agents
- test-time-adaptation
- unsupervised-learning
arxiv_id: '2607.08124'
categories: cs.SE, cs.LG
why_read: This paper introduces Test-Time Harness Evolution (TTHE), a novel method
  to adapt LLM agents by evolving their executable harnesses during evaluation using
  unlabeled execution traces. It explains how to achieve persistent agent improvements
  without model weight updates or gold labels, highlighting proxy reliability as a
  key challenge.
authors:
- Jun Nie
- Yonggang Zhang
- Jun Song
- Qianshu Cai
- Dahai Yu
- Yike Guo
- Xinmei Tian
- Bo Han
---

The performance of an LLM agent is not just about the model; its surrounding "harness" - the executable program for context, tools, and error recovery - is equally vital. But what if you could optimize it *at test time*?

Test-Time Harness Evolution (TTHE) treats the executable harness as a state for adaptation. It maintains a population of candidate harnesses and refines them using an agentic proposer that reasons over unlabeled execution traces.

Crucially, TTHE does not update model weights or require gold labels. All adaptation occurs through changes to the surrounding program, yielding persistent, inspectable improvements across various coding and tool-use tasks.

Evolve your LLM agent's control program dynamically for robust, unsupervised improvement, even in unknown test distributions.
