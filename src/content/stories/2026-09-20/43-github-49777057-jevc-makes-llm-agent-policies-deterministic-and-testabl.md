---
authors:
- doronp
comments: https://news.ycombinator.com/item?id=49777057
date: '2026-09-20'
depth_score: 8
hn_id: '49777057'
image: /infographics/43-github-49777057.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-governance
- catchup
- deterministic-agents
- github
- llm-policy-enforcement
- rule-compilation
- unit-testing
title: Jevc makes LLM agent policies deterministic and testable
url: https://github.com/doronp/jevc
utility_score: 9
why_read: Read this to learn how to prevent LLM agents from ignoring their policy
  rules. You will discover a method to compile natural language rules into testable,
  deterministic programs, ensuring reliable agent behavior and enabling robust testing.
---

One of the most frustrating challenges with AI agents is their uncanny ability to "interpret" or outright ignore explicit instructions given in natural language. You write "NEVER commit unless the user explicitly asks," and the agent still does it.

Jevc offers a powerful solution by compiling these natural language policies into deterministic verdict programs. Instead of the model weighing a prose suggestion, jevc transforms rules into a series of narrow, typed evidence questions answered by a non-generative model, with the final verdict computed in ordinary, testable code.

This shifts agent control from fuzzy prompt engineering to verifiable invariants. It is a game-changer for building reliable AI agents, enabling robust guardrails, unit testing agent behavior, and drastically improving the predictability and safety of your LLM-powered applications.