---
title: Physics-Audited Agentic SciML Verifies Physical Consistency in Models
source: arxiv
url: http://arxiv.org/abs/2607.07379v1
date: '2026-07-08'
tags:
- agentic-sciml
- arxiv
- catchup
- computational-mechanics
- cs.AI
- cs.LG
- error-metrics
- llm-agents
- physics-verification
- surrogate-models
- workflow
arxiv_id: '2607.07379'
categories: cs.AI, cs.LG
why_read: This introduces Physics-Audited Agentic SciML (PA-SciML), a verification-first
  workflow. It demonstrates how to ensure surrogate models satisfy critical physics
  requirements beyond just low error metrics, particularly for mechanics applications.
authors:
- Diab W. Abueidda
- Bilal Ahmed
- Panos Pantidis
- Mostafa E. Mobasher
---

LLM agents are revolutionizing scientific discovery, finding surrogate models with impressive speed. But how do we know these models respect fundamental physics?

A low error score does not guarantee physical soundness. This paper introduces Physics-Audited Agentic SciML (PA-SciML), a verification-first workflow.

PA-SciML derives machine-checkable physics requirements before the search begins. Each candidate model is checked against boundary conditions, superposition, and causality.

In computational solid mechanics examples, PA-SciML selected models that passed strict causality checks, unlike error-only baselines which could respond to future loading history.

For engineers leveraging LLM agents for scientific tasks, this framework is crucial for building trust and ensuring the reliability of AI-discovered models. It is about moving from "good enough" to "physically correct."

Building LLM agents that respect the laws of physics.
