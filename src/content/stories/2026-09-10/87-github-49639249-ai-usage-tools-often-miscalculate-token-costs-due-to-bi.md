---
title: AI usage tools often miscalculate token costs due to billing bugs
source: github
url: https://github.com/roy-tong/AgentMeasure/blob/main/campaigns/audit-report-2026-09.md
date: '2026-09-10'
tags:
- ai-usage-tools
- audit
- billing-bugs
- catchup
- github
- token-accounting
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49639249'
comments: https://news.ycombinator.com/item?id=49639249
why_read: This report reveals systematic billing errors in many AI usage tools, providing
  concrete examples and identifying five specific bug classes. Readers will learn
  common pitfalls in AI cost reporting and how to verify their own tools.
authors:
- roy-tong
---

Your AI cost dashboards are likely wrong. A recent audit of ~110 AI usage tools found over 45 verified token-accounting bugs, potentially inflating your LLM bills without you realizing it.

These are not minor glitches; they are systemic issues. Five common bug classes include miscounting assistant messages, incorrect context window handling, and prompt truncation errors. The report provides concrete examples and verifiable findings.

This means that if you are managing LLM infrastructure, you need to scrutinize how your usage is being measured. Understanding these common pitfalls is crucial for accurate cost optimization and effective budget management in AI deployments.
