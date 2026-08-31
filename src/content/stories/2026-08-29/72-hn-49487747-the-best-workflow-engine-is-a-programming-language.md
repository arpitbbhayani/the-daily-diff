---
title: The best workflow engine is a programming language
source: hn
url: https://vercel.com/blog/the-best-workflow-engine-is-a-programming-language
date: '2026-08-29'
tags:
- catchup
- directed-acyclic-graph
- durable-execution
- hn
- programming-language
- temporal
- workflow-engine
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49487747'
comments: https://news.ycombinator.com/item?id=49487747
why_read: This article argues that a programming language is the best workflow engine
  for durable, stateful logic. Readers will learn why existing code structures inherently
  support workflow orchestration and offer a superior developer experience than explicit
  DAG frameworks.
authors:
- Pranay Prakash
---

Stop drawing your workflow DAGs by hand; your programming language is already the best workflow engine. Vercel makes a compelling case that durable execution, like that offered by Temporal, allows you to express complex, stateful logic directly in sequential code.

This paradigm shift moves away from cumbersome, declarative graph definitions found in tools like Airflow. Instead, you write normal code, and the underlying engine handles durability, retries, and state management across unreliable infrastructure.

This approach not only simplifies development and improves the developer experience but also provides a more robust and scalable solution for orchestrating long-running processes in distributed systems. It is a fundamental rethink of how we build reliable workflows.
