---
title: Jev-cli analyzes system artifacts with TypeSafe AI for calibrated answers
source: github
url: https://github.com/joshLong145/jev-cli
date: '2026-09-21'
tags:
- ai-decision-model
- catchup
- cli-tool
- github
- jev-cli
- json-analysis
- structured-answers
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49786725'
comments: https://news.ycombinator.com/item?id=49786725
why_read: This tool helps you analyze JSON, NDJSON, and JSONC system artifacts using
  an AI decision model to get typed, calibrated answers. You will learn how to leverage
  AI for structured log analysis with confidence scores.
authors:
- Josh Long
---

A common challenge with integrating LLMs into automated workflows is the lack of reliable, structured output. Jev-CLI tackles this head-on by providing a Python CLI wrapper that delivers typesafe, calibrated AI answers with certainty scores.

This tool analyzes JSON and NDJSON system artifacts, returning not just prose, but structured data with a quantified certainty for each answer. Critically, every answer is anchored back to the specific lines it originated from. This dramatically improves auditability and trust in AI-generated decisions.

For engineers building tools that require reliable AI interpretation of structured logs or configurations, Jev-CLI presents a significant step forward. It transforms raw LLM output into something far more predictable and actionable, enabling you to gate on confidence levels for critical operations.
