---
title: ClickGap autonomously ensures quality for ClickHouse development
source: hn
url: https://clickhouse.com/blog/clickgap-autonomous-qa-for-clickhouse
date: '2026-08-27'
tags:
- ai-agents
- autonomous-qa
- catchup
- clickgap
- hn
- pull-request-review
- regression-testing
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49463006'
comments: https://news.ycombinator.com/item?id=49463006
why_read: This article details how ClickHouse implemented ClickGap, an autonomous
  AI agent, to perform automated quality assurance for merged code. Readers will learn
  about its capabilities in test design, regression bisection, and automated issue
  resolution.
authors:
- Lareb Zafar
---

ClickHouse has pioneered ClickGap, an autonomous AI QA agent that reviews every pull request merged into their performance-critical C++ database. This agent designs tests, executes them against real builds, bisects regressions to the commit, and even files issues and pull requests in the public tracker without human approval.

The team consciously avoided the "AI slop" problem experienced by others, where AI generates low-quality bug reports. ClickGap's five months in production show roughly 500 issues filed and 200 PRs opened, with over half the issues closed as completed.

This is a major step beyond typical AI-assisted QA, demonstrating how an agent can reliably identify and help fix defects in a complex, high-performance system. It offers profound insights into practical, high-impact AI agent deployment in engineering.
