---
title: Controlling LLM Personas Through Behavioral Trait Adjustments
source: arxiv
url: http://arxiv.org/abs/2607.07916v1
date: '2026-07-08'
tags:
- arxiv
- behavioral-traits
- catchup
- cs.AI
- cs.LG
- llm-judge
- low-rank-adapters
- model-personas
- ocean-framework
- persona-control
- psychometrics
- safety-evaluation
arxiv_id: '2607.07916'
categories: cs.AI, cs.LG
why_read: This analysis details a method for controlling LLM personas by mapping them
  to behavioral traits via the OCEAN framework. It demonstrates how these trait adjustments,
  implemented through low-rank adapters, influence model safety and performance.
authors:
- Luke Baines
- Anton Gonzalvez Hawthorne
- Mariia Koroliuk
- Irakli Shalibashvili
- "Cl\xE9ment Dumas"
- Konstantinos Voudouris
- David Demitri Africa
---

Ever wondered if an LLM has a 'personality'? This paper delves into charting language model behavioral patterns directly within their weight space, offering unprecedented control over their personas.

Using the OCEAN framework (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism), the authors train low-rank adapters to precisely amplify or suppress individual traits. They validate these effects with an LLM-judge, benchmarks, and capability evaluations.

Across six models, they show that adapters move traits monotonically, combine additively, and preserve core performance. Crucially, these induced trait axes affect safety-relevant behaviors; for instance, manipulating neuroticism and agreeableness impacts frustration and sycophancy.

This breakthrough provides a concrete mechanism for model editing and safety, offering precise control over how LLMs behave rather than just what they say. This is a game-changer for designing more predictable and controllable AI agents.
