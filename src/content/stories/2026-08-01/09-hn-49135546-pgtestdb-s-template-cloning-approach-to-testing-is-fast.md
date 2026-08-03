---
authors:
- Brandur
comments: https://news.ycombinator.com/item?id=49135546
date: '2026-08-01'
depth_score: 7
hn_id: '49135546'
image: /infographics/09-hn-49135546.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- database-testing
- go-testing
- hn
- pgtestdb
- postgres-template-databases
- schema-isolation
- testing-speed
title: pgtestdb's template cloning approach to testing is fast
url: https://brandur.org/fragments/pgtestdb
utility_score: 9
why_read: This article explains how pgtestdb leverages Postgres template databases
  to achieve significantly faster testing for Go applications compared to other common
  methods, detailing the underlying mechanics and performance benefits.
---

Are your PostgreSQL integration tests painfully slow? The usual advice is to use test transactions or schema-based isolation, but those have their own limitations and overheads.

A better approach might be leveraging PostgreSQL's built-in template databases. The pgtestdb Go package showcases how creating a new database from a template is much faster than running migrations from scratch, or even using heavyweight Docker-based solutions.

Under the hood, Postgres efficiently copies materialized heap, index, and catalog files in 8 kB page chunks. This is a game-changer for developer productivity, letting you get instant feedback without sacrificing isolation or the ability to test listen/notify features.

This simple feature can shave minutes off your CI/CD pipeline.