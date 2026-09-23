---
title: Local AI agent autonomously builds full-stack application on single GPU
source: github
url: https://github.com/anglepoiselife/Self-Directed-Agent/blob/main/INTRODUCTION.md
date: '2026-09-21'
tags:
- autonomous-agent
- catchup
- full-stack-development
- github
- gpu-computing
- large-language-model
- local-inference
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49794239'
comments: https://news.ycombinator.com/item?id=49794239
why_read: This text details a successful experiment where a local AI agent autonomously
  built a full-stack application on a single GPU, demonstrating practical AI capabilities
  in software engineering and hardware constraints.
authors:
- anglepoiselife
---

Imagine an AI agent building a full-stack application, debugging its own code, and verifying the UI 
 all without human intervention, running on a single RTX 5090 for 24 hours. This GitHub project showcases exactly that, using Qwen 3.8 27B and a custom deterministic orchestration harness.

The genius lies in the "smart harness" that manages strict context windows (32k tokens split for prompt/generation) and handles build failures and debugging. It installed prerequisites, created database schemas, wrote over 50 source files for a PostgreSQL + Spring Boot + React/Vite SaaS, and validated the UI via automated browser testing. This is not just a demo; it is a blueprint for practical autonomous engineering.

This project offers critical insights into making AI agents genuinely productive for software development, illustrating how effective context engineering and robust orchestration are far more impactful than just model size. It moves the needle on what is possible with local, open-weight models for self-directed engineering tasks.
