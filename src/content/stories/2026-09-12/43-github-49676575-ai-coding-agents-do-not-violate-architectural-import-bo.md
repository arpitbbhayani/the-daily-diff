---
title: AI coding agents do not violate architectural import boundary rules
source: github
url: https://github.com/Tommkruix/agentrulebench
date: '2026-09-12'
tags:
- ai-coding-agents
- architectural-rules
- catchup
- github
- import-boundary
- null-result
- reproducible-benchmark
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49676575'
comments: https://news.ycombinator.com/item?id=49676575
why_read: This repository presents a reproducible benchmark that tests a widely held
  claim about AI coding agents violating architectural import-boundary rules. Readers
  will learn about a significant null result, indicating that current agents did not
  drift from tested conventions, and can use the provided harness and data to verify
  the findings.
authors:
- Tommkruix
---

Do AI coding agents truly respect your architectural rules? A new, reproducible benchmark called AgentRuleBench just delivered a surprising null result on an important test.

Many engineers worry that AI agents might drift from established architectural conventions, such as importing UI components into backend request-entry files. This benchmark rigorously tested that hypothesis across three major AI agent vendors and various conditions.

The finding? Current agents, even in deliberately baited tasks, did not violate these inferred import-boundary rules. This suggests that while concerns about architectural drift are valid, current-generation agents might be more disciplined than we give them credit for.

This project provides the harness, pre-registration, and raw data, allowing you to replicate the findings yourself. Understanding these capabilities and limitations is crucial as we integrate AI into our coding workflows.
