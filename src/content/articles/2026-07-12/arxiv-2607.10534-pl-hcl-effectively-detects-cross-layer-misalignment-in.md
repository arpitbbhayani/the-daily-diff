---
title: PL-HCL Effectively Detects Cross-Layer Misalignment in LLM Agent Skills
source: arxiv
url: http://arxiv.org/abs/2607.10534v1
date: '2026-07-12'
tags:
- agent-skills
- arxiv
- catchup
- contrastive-learning
- cross-layer-misalignment
- cs.AI
- cs.CR
- cs.LG
- llm-agents
- misalignment-detection
arxiv_id: '2607.10534'
categories: cs.AI, cs.CR, cs.LG
why_read: This text introduces PL-HCL, a framework that addresses cross-layer misalignment
  in LLM Agent Skills. Readers will learn how this approach improves the detection
  of inconsistencies between skill descriptions and their true behavior.
authors:
- Chengjun Zhang
- Yang Gao
- Jianna Hur
- Jingjing Zhang
- Sagar Samtani
---

Ensuring the integrity of LLM Agent Skills requires detecting subtle cross-layer misalignments between descriptions and true behavior.

As open-source marketplaces for LLM Agent Skills expand, users increasingly rely on brief metadata to select skills. This creates a risk of "cross-layer misalignment" where a skill's description does not match its actual runtime behavior.

The paper proposes Progressive Loading-Aware Hierarchical Contrastive Learning (PL-HCL), an LLM-based framework to address this. It models the layered structure of skills and learns cross-layer consistency.

Evaluated on over 264,000 open-source skills, PL-HCL significantly improved Macro-F1 from about 0.45 to 0.87-0.89 across LLM backbones. This offers an effective screening tool for building trustworthy agent ecosystems.

Validate your agent's skills: descriptions must align with execution.
