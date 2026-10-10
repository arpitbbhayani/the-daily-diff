---
title: Hospital team structures make autonomous coding agents reliable
source: hn
url: https://www.cockroachlabs.com/blog/experiment-running-hospital-code/
date: '2026-10-09'
tags:
- agentic-workflows
- catchup
- cockroachdb
- coding-agents
- database-migrations
- hn
- software-reliability
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '50021899'
comments: https://news.ycombinator.com/item?id=50021899
why_read: Read this to understand how structuring autonomous coding agents into specialized
  medical-style roles can safely accelerate complex software migrations. You will
  learn how Cockroach Labs used structured reviews and planning to cut migration tooling
  time from months to days.
authors:
- Adam Storm
- Rafi Shamim
image: /infographics/04-hn-50021899.jpg
---

Most multi-agent coding experiments fail because engineers treat agents like solo developers rather than an assembly line that requires strict verification. Cockroach Labs tackled this challenge by organizing their autonomous pipeline around a teaching hospital metaphor, assigning clear roles to triage, planning, execution, and review.

Over five months and more than one million lines of code written, the team logged only seven total reverts. In one benchmark task, adding full IBM Db2 source support to their migration tooling took under forty-eight hours and about four thousand dollars in tokens. An equivalent manual effort for Oracle in 2024 took nine months and cost one hundred sixty thousand dollars.

The real breakthrough here was not model capability, but guardrail architecture. Mandatory pre-execution planning reviews, isolated Docker test environments, and separate verification stages prevented typical hallucinations from reaching the main branch.

Reliable agentic software engineering is fundamentally an orchestration problem, not a prompting problem.
