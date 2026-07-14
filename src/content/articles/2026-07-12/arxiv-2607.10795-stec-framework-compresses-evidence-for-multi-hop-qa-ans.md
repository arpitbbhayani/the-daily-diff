---
title: STEC Framework Compresses Evidence for Multi-Hop QA Answer Selection
source: arxiv
url: http://arxiv.org/abs/2607.10795v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- cs.CL
- evidence-compression
- final-answer-selection
- llm-based-search-agents
- multi-hop-qa
arxiv_id: '2607.10795'
categories: cs.AI, cs.CL
why_read: This text introduces STEC, an evidence compression framework addressing
  the difficult final answer selection problem in multi-hop QA. It explains how STEC
  improves answer verification by transforming raw trajectories into candidate-specific
  evidence representations.
authors:
- Xinkang Li
- Rong Jiang
- Xin Song
- Ye Wang
- Yue Han
- Changjian Li
---

Dealing with conflicting or redundant information is a major hurdle for LLM-based search agents in multi-hop question answering, but STEC offers a powerful solution. When an agent explores multiple search trajectories, the final answer selection can be unreliable.

STEC introduces an evidence compression framework to solve this. It groups trajectories by answer identity and converts each group into a concise, candidate-specific evidence representation.

This shifts the final selection from comparing noisy raw trajectories to comparing aligned, compressed evidence. The result is significantly better performance across four open-domain multi-hop QA benchmarks.

If you are building RAG or agentic systems that involve deep search and synthesis, this technique directly addresses a critical reliability problem. It is about making AI agents smarter at resolving ambiguity.

Reliable multi-hop reasoning needs robust evidence compression.
