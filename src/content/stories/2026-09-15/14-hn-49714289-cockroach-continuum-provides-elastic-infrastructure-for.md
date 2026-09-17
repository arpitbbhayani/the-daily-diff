---
title: Cockroach Continuum provides elastic infrastructure for agentic database estates
source: hn
url: https://www.cockroachlabs.com/blog/continuum-architecture/
date: '2026-09-15'
tags:
- agentic-workloads
- catchup
- cockroach-continuum
- database-estate-management
- disaggregated-storage
- elastic-database-architecture
- hn
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49714289'
comments: https://news.ycombinator.com/item?id=49714289
why_read: This article explains why agentic workloads create a database estate management
  problem and how Cockroach Continuum addresses it through elastic infrastructure.
  Readers will learn about specific architectural solutions for consolidating and
  operating many databases efficiently without increasing infrastructure or DBA effort.
authors:
- Isaac Wong
---

Agentic AI workloads are creating a new challenge: managing massive 'database estates' with thousands of isolated, bursty databases. Cockroach Labs' new 'Continuum' architecture offers a compelling solution, moving beyond traditional scaling to elastic estate management.

Continuum achieves this through disaggregated storage, separating compute and storage for independent scaling, and 'Virtual Clusters' that consolidate isolated databases on shared hosts. This tackles the critical problem of provisioning, operating, and retiring large numbers of databases without a proportional increase in infrastructure or DBA effort.

The internal 'Mica' system, running Claude and CockroachDB, served as a proving ground, supporting over 3,000 internal applications. This showcases the architecture's ability to provide scale, consistency, and reliability for agentic workflows where bad data leads to bad decisions.

This is a deep dive into practical, scalable database architecture for the AI era. You will gain invaluable insights into building robust transactional substrates for the next generation of AI-driven applications.
