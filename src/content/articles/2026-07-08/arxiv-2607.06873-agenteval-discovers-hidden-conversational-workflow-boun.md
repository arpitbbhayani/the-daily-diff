---
title: AgentEval Discovers Hidden Conversational Workflow Boundaries in LLM Agents
source: arxiv
url: http://arxiv.org/abs/2607.06873v1
date: '2026-07-08'
tags:
- agenteval
- arxiv
- black-box-testing
- catchup
- conversational-llm-agents
- conversational-workflow-graph
- cs.SE
- state-dependent-failures
arxiv_id: '2607.06873'
categories: cs.SE
why_read: This paper introduces AgentEval, a black-box testing framework that effectively
  discovers and stresses state-dependent failure boundaries in conversational LLM
  agents. Readers will learn how it uses a conversational workflow graph to make hidden
  conversational boundaries testable, improving failure detection compared to prompt-only
  methods.
authors:
- Liting Lin
- Boxi Yu
- Yuzhong Zhang
- Lionel Briand
- David-Paul Niland
- "Emir Mu\xF1oz"
---

Building reliable LLM agents capable of complex interactions is hard, especially when their internal workflows can lead to harmful, state-dependent failures. Standard testing often misses critical boundaries like hidden identity checks or confirmation gates.
A new black-box testing framework, AgentEval, tackles this by mining a conversational workflow graph from the agent's behavior. It does not blindly prompt, but intelligently uses the graph's structure to target specific guards and prerequisites.
This approach uncovered 23-38 distinct boundaries per agent in benchmarks, significantly outperforming prompt-only baselines which found only 12. It also showed lower duplicate and false-alarm rates.
This method allows engineers to validate LLM agents without needing their source code, enabling safer deployment of sophisticated AI.
