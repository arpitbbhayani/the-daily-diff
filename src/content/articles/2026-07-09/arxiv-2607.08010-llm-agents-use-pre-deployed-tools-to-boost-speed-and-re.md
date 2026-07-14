---
title: LLM Agents Use Pre-Deployed Tools to Boost Speed and Reliability
source: arxiv
url: http://arxiv.org/abs/2607.08010v1
date: '2026-07-09'
tags:
- arxiv
- auditability
- catchup
- code-generation
- cs.CL
- cs.LG
- cs.SE
- latency-reduction
- llm-agents
- production-systems
- reliability-improvement
- tool-making
arxiv_id: '2607.08010'
categories: cs.CL, cs.LG, cs.SE
why_read: This text details how replacing inference-time code generation with pre-compiled,
  validated tools can dramatically improve the performance and reliability of production
  LLM agents. You will learn a mechanistic approach to reduce latency and errors in
  real-world LLM deployments.
authors:
- "Kalle Kujanp\xE4\xE4"
- Ning Liu
- Shahnawaz Alam
- Yeshwanth Reddy Sura
- Tianyu Yang
- Kristina Klinkner
- Shervin Malmasi
---

Production LLM agents often waste latency and reliability by regenerating code for the same procedural steps on every request. This is a critical bottleneck for performance.

This paper introduces an agentic tool-making pipeline that compiles these repeated Standard Operating Procedure (SOP) steps into validated, versioned tools *before* deployment. The agent then calls these tools directly.

Deployed in a Fulfillment Center alarm-triage system, tool calls reduced p50 latency by 42% and end-to-end error rate by up to 53%. They also enabled a simpler direct-call architecture, reducing p50 latency by a further 62%.

Empower your LLM agents to make their own tools for dramatic improvements in speed, reliability, and auditability.
