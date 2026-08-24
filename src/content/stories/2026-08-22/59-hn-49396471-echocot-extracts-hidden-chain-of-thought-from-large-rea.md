---
authors:
- Yiting Qu
- Ziqing Yang
- Chi Cui
- Ye Leng
- Junjie Chu
- Yang Zhang
comments: https://news.ycombinator.com/item?id=49396471
date: '2026-08-22'
depth_score: 8
hn_id: '49396471'
image: /infographics/59-hn-49396471.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- api-interactions
- black-box-models
- catchup
- chain-of-thought
- echocot
- hn
- large-reasoning-models
- llm-extraction
title: EchoCoT extracts hidden chain-of-thought from large reasoning models
url: https://arxiv.org/abs/2608.20055
utility_score: 7
why_read: This paper introduces EchoCoT, a novel multi-step attack for extracting
  hidden chain-of-thought traces from black-box large reasoning models through API
  interactions. Readers will learn about a new technique to uncover internal reasoning
  processes in proprietary LLMs and its surprising effectiveness across various models
  and datasets.
---

You can extract the "hidden thoughts" or Chain-of-Thought (CoT) from black-box LLMs, and not just the output. A new paper introduces EchoCoT, a multi-step iterative attack that can extract internal CoT near-verbatim from models like Gemini-2.5 and open-source counterparts.

This method achieves up to 66.4% near-verbatim extraction success, with extracted traces within 10% of target length and 90% token match. It works by identifying an "overlooked reasoning replay surface" between tool calls and uses an LLM-based optimization framework to iteratively refine the extraction.

This is not merely academic; understanding how to peek inside black-box models is critical for auditing, debugging, and ultimately building more robust and interpretable AI agents. It changes how you might approach evaluating the real reasoning capabilities of a proprietary model.