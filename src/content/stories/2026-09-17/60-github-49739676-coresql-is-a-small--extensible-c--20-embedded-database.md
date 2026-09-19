---
authors:
- morishuz
comments: https://news.ycombinator.com/item?id=49739676
date: '2026-09-17'
depth_score: 8
hn_id: '49739676'
image: /infographics/60-github-49739676.jpg
interest_score: 8
novelty_score: 7
section: databases
source: github
tags:
- c++20
- catchup
- durable-files
- embedded-database
- extensible-database
- github
- relational-core
- sql
title: CoreSQL is a small, extensible C++20 embedded database
url: https://github.com/morishuz/CoreSQL
utility_score: 8
why_read: Read this to understand the design principles of CoreSQL, a small and extensible
  C++20 embedded database. It highlights how a database can be built with clear boundaries
  and robust extensibility without external dependencies like SQLite.
---

Building an embedded database from the ground up in modern C++ is a challenging but incredibly insightful endeavor. CoreSQL, a new experimental project in C++20, offers a unique look into such an architecture, all without the baggage of an SQLite dependency.

This project emphasizes a small, understandable core, clocking in at around 11,000 lines. Its design explicitly separates storage and transaction management from SQL parsing and domain-specific behaviors, achieved through a highly extensible API. You can register custom types, scalar functions, aggregates, and even index providers, making it adaptable for niche use cases.

For senior engineers interested in database internals or system design, this is a goldmine. It demonstrates practical patterns for building high-performance, purpose-built data stores, even including bundled add-ons for JSON, dates, and vectors, which is particularly relevant for applied AI and RAG systems needing efficient local data storage.