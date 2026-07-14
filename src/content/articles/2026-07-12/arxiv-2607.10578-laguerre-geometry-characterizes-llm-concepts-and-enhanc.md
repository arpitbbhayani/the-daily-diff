---
title: Laguerre Geometry Characterizes LLM Concepts and Enhances Interpretability
source: arxiv
url: http://arxiv.org/abs/2607.10578v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- concept-interpretability
- cs.AI
- geometric-lens
- laguerre-geometry
- llm-concepts
- transformer-mechanisms
arxiv_id: '2607.10578'
categories: cs.AI
why_read: This paper introduces a novel geometric framework to precisely define and
  measure concepts within LLMs, offering a deeper understanding of their internal
  representations. Readers will learn how Laguerre Geometry characterizes concept
  structures and enables a training-free method for interpreting hidden vectors and
  enhancing actionable interpretability.
authors:
- Chunwei Ma
- Russell Wolfinger
---

Understanding how Large Language Models actually *reason* inside is still a grand challenge. We often hypothesize concepts as points or directions, but what if they are something more complex?

This new research proposes Laguerre Geometry to characterize concept geometry within LLMs, defining concepts as precise regions within a Laguerre-Voronoi cell. This allows for strict definition, measurement, and separation of concepts, even revealing inclusion and hierarchy.

They decompose each transformer layer into piecewise-linear operators, showing how a token's hidden trajectory is governed by a static tree of flow and dynamic transport across trees via attention. This insight leads to "Geometric Lens," a training-free, hyperparameter-free method to exactly read out the concept a hidden vector encodes.

This work provides a powerful, actionable framework for LLM interpretability, moving beyond hazy hypotheses to concrete geometric understanding.
