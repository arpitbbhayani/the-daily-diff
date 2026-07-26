---
authors:
- birdculture
comments: https://news.ycombinator.com/item?id=49037653
date: '2026-07-24'
depth_score: 8
hn_id: '49037653'
image: /infographics/52-hn-49037653.jpg
interest_score: 8
novelty_score: 9
section: databases
source: hn
tags:
- b-tree-indexes
- catchup
- durable-storage
- hn
- local-first
- prolog
- sql-engine
- transactions
title: AsaDB a Local-First Prolog SQL Engine
url: https://asa-db.kocoygroup.site/
utility_score: 7
why_read: This text introduces AsaDB, a local-first SQL engine built with SWI-Prolog.
  Readers will learn about its unique combination of logic programming, durable local
  storage, and key features like transactions and B+Tree indexes.
---

This project, AsaDB, presents a fascinating take on database engine design: a full SQL engine built entirely in SWI-Prolog. It is a local-first system that includes durable storage, 4KB slotted pages, typed heap records, a bounded buffer pool, and persistent B+Tree indexes.

What makes this unique is the integration of logic programming with classic relational database concepts like DDL, DML, transactions, and integrity-verified backups. Exploring this architecture can offer senior engineers fresh perspectives on query optimization, storage engine design, and how different programming paradigms can tackle these complex challenges.

It is a prime example of rethinking established system components from a new angle.