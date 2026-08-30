---
title: A programming language is the best workflow engine
source: hn
url: https://vercel.com/blog/the-best-workflow-engine-is-a-programming-language
date: '2026-08-28'
tags:
- catchup
- directed-acyclic-graph
- durable-execution
- hn
- programming-language
- serverless
- temporal
- workflow-engine
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49478947'
comments: https://news.ycombinator.com/item?id=49478947
why_read: This article explains why a programming language, inherently a directed
  acyclic graph, is the most effective workflow engine. Readers will learn how modern
  tools enable durable execution of sequential code, eliminating the need for separate
  workflow definitions.
authors:
- Pranay Prakash
---

The best workflow engine is not a drag-and-drop UI or a YAML DAG; it is a programming language itself, according to Vercel's new Workflow SDK. This approach allows developers to write sequential code that transparently becomes durable and stateful, a significant leap from traditional explicit DAG frameworks like Airflow. This is a game-changer for building reliable, long-running processes in distributed systems. It means you can focus on business logic using familiar constructs, rather than grappling with complex orchestration and state management challenges.

The insight here is that an abstract syntax tree already is a DAG, and durable execution engines like Temporal proved this concept could work. Vercel is pushing this further with a serverless-native TypeScript SDK, abstracting away the operational complexities of maintaining separate workflow infrastructure.

This paradigm fundamentally simplifies how you design and implement resilient systems, letting your code dictate the flow naturally. It is a powerful move for developer productivity.
