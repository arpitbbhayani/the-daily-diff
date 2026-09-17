---
authors:
- Sebastien Burel
comments: https://news.ycombinator.com/item?id=49712640
date: '2026-09-15'
depth_score: 7
hn_id: '49712640'
image: /infographics/47-github-49712640.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- embedded-engine
- github
- javascript
- llm-agents
- state-persistence
- swift
- tool-calling
title: KaozKit embeds JavaScript LLM agents in Swift applications
url: https://github.com/sebastien-burel/KaozKit
utility_score: 8
why_read: This project description introduces KaozKit, a solution for embedding autonomous
  JavaScript LLM agents directly into Swift applications. Readers will learn how KaozKit
  facilitates state persistence, tool calling, and memory management for these agents.
---

Deploying LLM agents in resource-constrained or mobile environments presents unique challenges. KaozKit offers a genuinely novel solution: JavaScript LLM agents running on an embedded microcontroller engine within Swift apps.

What stands out is the ingenious use of the XS engine, typically for microcontrollers, now driving sophisticated LLM agents. This approach enables features like state snapshotting, meaning your agents can persist their full state across app restarts.

This is critical for building robust, "resident" agents that maintain memory and context without relying on constant external API calls. The ability to run agents locally with confined tools also opens doors for enhanced privacy and offline capabilities.

Engineers interested in edge AI or mobile-first agentic applications should absolutely look into this pragmatic engineering.