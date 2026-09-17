---
authors:
- Sachin Malhotra
comments: https://news.ycombinator.com/item?id=49714174
date: '2026-09-15'
depth_score: 8
hn_id: '49714174'
image: /infographics/31-hn-49714174.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- agentic-coding
- catchup
- code-generation
- continuous-integration
- hn
- scaling
- test-impact-analysis
title: Anthropic scaled test impact analysis for agentic coding in CI
url: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
utility_score: 8
why_read: This article describes how Anthropic successfully scaled its test impact
  analysis service amidst a 25x increase in CI job volume due to agentic coding. Readers
  will gain insight into the architectural challenges and solutions for high-throughput
  CI systems.
---

Agentic coding is not just about writing more code; it is also about dramatically changing your engineering infrastructure. Anthropic saw a 25x increase in CI job volume over six months because their Claude agent was authoring 80 percent of their code.

This kind of scale exposed critical bottlenecks in their test impact analysis service, forcing them to completely rethink its architecture. They initially patched the service three times, but those fixes failed rapidly, lasting 70, 29, and then less than one day.

The real solution involved blowing up the existing architecture and designing a horizontally scaled test selection system, a strategy they anticipate will become an industry standard. This experience offers crucial lessons for any team integrating AI agents into their development workflow, showing that new code generation capabilities demand equally novel CI/CD scaling strategies.

Your CI system must evolve as fast as your agents generate code.