---
title: Conveyor builds software factory for verifying agent-written code intent
source: github
url: https://github.com/kidus-tiliksew/conveyor
date: '2026-08-22'
tags:
- agent-code
- catchup
- code-verification
- conveyor
- github
- product-intent
- requirements-traceability
- software-factory
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49399837'
comments: https://news.ycombinator.com/item?id=49399837
why_read: Read this to understand how a software factory approach, specifically Conveyor,
  can solve the challenge of verifying AI-generated code against product intent. It
  provides insights into managing and tracing agent-written code from requirements
  through deployment.
authors:
- Kidus Tiliksew
---

The bottleneck for AI agents is not generating code, it is ensuring that code matches product intent and adheres to process. This project introduces a "software factory" approach to agent-written code that tackles this head-on.

The core idea: make agents "file paperwork" by queuing work from requirements, system design documents, and decisions. Human operators then confirm these documents and approve plans. This shifts the inspection from every line of code to critical process points, making agent output traceable and manageable.

This is a genuinely novel take on agent governance. Instead of simply letting agents run wild, it integrates them into a disciplined, human-supervised workflow. This approach ensures high-quality output and makes AI agents a practical part of a production development pipeline, aligning with robust engineering practices.

If you are building with AI agents, controlling their output becomes a paramount concern, and this offers a powerful pattern to consider.
