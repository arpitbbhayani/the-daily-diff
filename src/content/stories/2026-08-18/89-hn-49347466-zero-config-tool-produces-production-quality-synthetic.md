---
authors:
- ammarmalik17
comments: https://news.ycombinator.com/item?id=49347466
date: '2026-08-18'
depth_score: 7
hn_id: '49347466'
image: /infographics/89-hn-49347466.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- catchup
- data-consistency
- data-generation
- hn
- postgresql
- referential-integrity
- schema-inference
- synthetic-data
title: Zero-config tool produces production-quality synthetic PostgreSQL data
url: https://weavori.com
utility_score: 9
why_read: Read this to understand how a zero-configuration tool can generate production-quality
  synthetic PostgreSQL data, maintaining schema relationships, data distributions,
  and referential integrity automatically. You will learn about features like distribution-aware
  generation, cross-column consistency, and a formula engine.
---

Generating realistic PostgreSQL test data while maintaining foreign key integrity and data distributions is a major headache. Weavori steps in as a zero-config CLI tool that intelligently introspects your schema to create synthetic data that mirrors your production environment.

It is not just about filling tables; Weavori understands relationships, inferring column types and names to ensure "first_name" becomes a name and "zip" becomes a ZIP code. Critically, it guarantees referential integrity, so all foreign keys point to valid parents, and even maintains statistical distributions (e.g., 70 percent active statuses if that is your production ratio).

This tool could eliminate countless hours of manual data setup and debugging, making local development and testing significantly more reliable and efficient. It is a smart approach to a pervasive database engineering challenge.