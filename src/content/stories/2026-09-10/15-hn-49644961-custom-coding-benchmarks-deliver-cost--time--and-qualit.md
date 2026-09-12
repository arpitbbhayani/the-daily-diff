---
title: Custom Coding Benchmarks Deliver Cost, Time, and Quality Benefits
source: hn
url: https://byobench.ai/buildyourownbenchmark/
date: '2026-09-10'
tags:
- agentic-setups
- catchup
- coding-benchmarks
- cost-reduction
- hn
- performance-metrics
- pull-request-evaluation
- software-quality
- task-routing
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49644961'
comments: https://news.ycombinator.com/item?id=49644961
why_read: This article explains why public coding benchmarks are ineffective and demonstrates
  an approach to building custom, internal benchmarks using merged PRs. Readers will
  learn how to evaluate agentic setups for cost, time, and quality, and how granular
  routing can significantly optimize performance.
authors:
- oaa36
---

Public benchmarks for coding agents are often misleading. A team discovered that creating custom, internal benchmarks from their own merged pull requests yielded far superior results for evaluating agentic setups.

This bespoke benchmarking approach, which measures models, harnesses, and skills against real-world engineering tickets, allowed them to route tasks dynamically. They found setups that were both cheaper and faster than frontier models, sometimes reducing costs by 5x to two orders of magnitude and cutting completion times in half.

The key insight is that no single agent setup wins everywhere. Different combinations perform optimally across various task types, necessitating granular routing.

Building your own benchmarks provides actionable data directly relevant to your codebase, workflows, and conventions. This is a game-changer for anyone building or integrating AI coding agents.
