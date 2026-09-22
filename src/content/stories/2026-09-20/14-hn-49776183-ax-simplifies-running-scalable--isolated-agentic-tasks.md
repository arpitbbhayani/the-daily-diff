---
title: AX simplifies running scalable, isolated agentic tasks declaratively
source: hn
url: https://agentexecutor.io/
date: '2026-09-20'
tags:
- agentic-tasks
- ax
- catchup
- declarative-configuration
- hn
- sandboxing
- scalable-execution
- task-isolation
- workload-management
- workspace-management
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49776183'
comments: https://news.ycombinator.com/item?id=49776183
why_read: This text introduces AX, a system designed to manage agentic tasks, a new
  kind of workload. Readers will learn how AX uses declarative primitives to provide
  strict isolation, easy workspace setup, and scalable execution for these stateful
  tasks.
authors:
- rochansinha
---

AI agents are not just another microservice or batch job. They are a new kind of workload, accumulating state, demanding strict isolation, and interacting with external APIs and tools, which presents unique orchestration challenges. Google's AX addresses these by providing a declarative open-source orchestrator. 

AX lets you define agentic tasks with clear sandboxing, CPU/memory limits, network fencing, and workspace setup for Git repos or skills. This level of isolation and control is crucial for running untrusted agent code safely and efficiently at scale, preventing runaway costs and security risks. 

If you are building production-grade agentic systems, understanding how to manage these new workloads declaratively for scalability and reliability is key. This project offers a blueprint for agent infrastructure that makes it practical.
