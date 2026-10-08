---
title: Bitsql emulates SQL Server for faster continuous integration tests
source: github
url: https://mirekrusin.com/bitsql/
date: '2026-10-07'
tags:
- catchup
- ci-cd
- database-emulator
- github
- integration-testing
- moonbit
- sql-server
- tds-protocol
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49990188'
comments: https://news.ycombinator.com/item?id=49990188
why_read: Read this to understand how a memory-only TDS emulator can drastically slash
  CI startup time and container memory footprint for SQL Server test suites.
authors:
- mirekrusin
---

Running real Microsoft SQL Server containers inside CI test suites often imposes massive resource penalties. A typical SQL Server Docker image takes over 600 megabytes to download, consumes more than a gigabyte of idle memory, and requires several seconds to cold boot before running the first test.

Bitsql addresses this bottleneck by implementing an in-memory TDS wire protocol emulator compiled from MoonBit. At only 13.7 megabytes and idling at roughly 5 megabytes of RAM, it boots in approximately 144 milliseconds while directly answering client connections from standard ORMs like Prisma, Sequelize, and TypeORM.

While an emulator cannot replicate every edge case of an enterprise storage engine, using wire-compatible mock databases in transient integration tests removes major infrastructure bloat from daily development pipelines.
