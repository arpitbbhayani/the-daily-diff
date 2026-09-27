---
authors:
- czxtm
comments: https://news.ycombinator.com/item?id=49843708
date: '2026-09-25'
depth_score: 7
hn_id: '49843708'
image: /infographics/50-github-49843708.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: github
tags:
- ai
- architectural-rules
- catchup
- code-quality
- github
- linter
- static-analysis
title: Adhere uses AI to enforce non-standard architectural rules
url: https://github.com/darkmatter/adhere
utility_score: 9
why_read: This describes Adhere, a linter powered by TypeSafe AI that enforces complex,
  non-standard architectural and business logic rules that traditional linters cannot
  verify. Readers will learn about a novel approach to static analysis for deeper
  code quality.
---

Linters have long been indispensable for code quality, but what about architectural rules or business logic constraints that traditional tools simply cannot catch? A new linter, 'adhere', is leveraging an AI model (Jev) to enforce these semantic rules.

You define rules in natural language, like "business logic must live in services," and the AI analyzes your code, providing a calibrated probability for rule breaches. This moves beyond syntactic checks to truly understand code structure and intent.

This project represents a significant leap in developer productivity by bringing AI to static analysis, enabling automated enforcement of higher-level design principles that previously relied on manual reviews.