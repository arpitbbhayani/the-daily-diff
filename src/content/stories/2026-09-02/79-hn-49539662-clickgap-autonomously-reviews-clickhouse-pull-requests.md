---
title: ClickGap autonomously reviews ClickHouse pull requests for quality assurance
source: hn
url: https://clickhouse.com/blog/clickgap-autonomous-qa-for-clickhouse
date: '2026-09-02'
tags:
- ai-agents
- autonomous-qa
- catchup
- clickgap
- clickhouse
- defect-detection
- hn
- pull-request-review
- regression-testing
- software-quality
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49539662'
comments: https://news.ycombinator.com/item?id=49539662
why_read: This article explains how ClickGap, an autonomous QA agent, effectively
  reviews ClickHouse pull requests post-merge. Readers will learn about its capabilities
  in designing tests, bisecting regressions, and automatically filing fixes, preventing
  defects from reaching users.
authors:
- Lareb Zafar
---

Autonomous QA is often talked about, but ClickHouse has deployed a production-ready AI agent named ClickGap that redefines the practice. This agent reviews every pull request, designs and executes tests, bisects regressions, and even files issues and pull requests without human approval.

In just five months, ClickGap filed 500 issues and opened 200 PRs, many leading to immediate fixes. This is not just theoretical; it is a live system significantly improving code quality and developer productivity.

This detailed engineering post offers a pragmatic blueprint for leveraging AI agents in your QA pipeline, demonstrating how to move past "AI-generated slop" to genuinely impactful autonomous engineering.
