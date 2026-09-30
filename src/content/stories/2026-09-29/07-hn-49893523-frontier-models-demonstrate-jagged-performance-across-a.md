---
title: Frontier models demonstrate jagged performance across agentic tasks
source: hn
url: https://www.fig.inc/blog/astra-opus-5-5-and-other-frontier-models-demonstrate-jagged-performance-across-sota-agentic-tasks-from-web-browsing-to-robotics/
date: '2026-09-29'
tags:
- agentic-tasks
- benchmark-evaluation
- catchup
- hn
- jagged-performance
- ridge-dataset
- robotics
- web-automation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49893523'
comments: https://news.ycombinator.com/item?id=49893523
why_read: Read this to understand why average benchmark scores fail to capture task-level
  model variance across digital and physical domains. You will learn how model updates
  and task-specific fit alter performance unpredictably.
authors:
- Yangyue Wang
- Harshvardhan Sikka
- Pranav Guruprasad
- Sudipta Chowdhury
image: /infographics/07-hn-49893523.jpg
---

Aggregate benchmark scores for frontier models hide a critical failure mode: model performance profiles are deeply jagged across specific tasks.

A new evaluation of frontier models across web automation and physical workflows shows that in almost every model comparison, the lower-scoring model successfully solves tasks that the higher-scoring model fails. Even more striking, minor model updates frequently leave the aggregate average score unchanged while completely reshaping which individual tasks succeed or fail.

When designing reliable AI agent systems, relying on headline leaderboard averages is dangerous. Production harnesses require fine-grained, task-level regression suites to catch silent capability shifts before deployment.
