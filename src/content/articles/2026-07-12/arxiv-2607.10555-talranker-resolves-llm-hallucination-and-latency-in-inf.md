---
title: TALRanker Resolves LLM Hallucination and Latency in Information Retrieval
source: arxiv
url: http://arxiv.org/abs/2607.10555v1
date: '2026-07-12'
tags:
- accuracy-efficiency-dilemma
- arxiv
- catchup
- cs.AI
- cs.CL
- cs.IR
- hallucinations
- information-retrieval
- large-language-models
- markov-decision-process
- reinforcement-learning
- reranking
- tool-calling
arxiv_id: '2607.10555'
categories: cs.IR, cs.AI, cs.CL
why_read: Read this to understand how the TALRanker framework solves the dilemma of
  LLM hallucinations and latency in information retrieval. You will learn about its
  agentic Markov decision process and two-stage training approach for selective tool
  use.
authors:
- Zichuan Liu
- Ruijin Hua
---

Effectively mitigating LLM factual hallucinations can be achieved without incurring prohibitive latency overheads from indiscriminate tool-calling.

Generative LLMs excel in information retrieval, but their parametric nature leads to factual hallucinations on complex queries. External tool-calling helps, yet blindly invoking tools for every document in reranking is too slow.

TALRanker, a novel framework, formalizes pointwise relevance scoring as an agentic Markov decision process. It uses a two-stage training paradigm to optimize this process.

An asymmetric cost-aware reward in reinforcement learning forces the policy to autonomously bypass tools when confident, only selectively retrieving external evidence when uncertain to avoid hallucination penalties. This achieves state-of-the-art performance while matching throughput of efficient pointwise rerankers.

Smart tool use in LLMs: accuracy without the latency.
