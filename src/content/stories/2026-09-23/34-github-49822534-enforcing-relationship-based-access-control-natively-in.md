---
title: Enforcing relationship based access control natively in PostgreSQL
source: github
url: https://github.com/paulharter/letter
date: '2026-09-23'
tags:
- access-control
- authorization
- catchup
- github
- planner-hook
- postgresql-extension
- rebac
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49822534'
comments: https://news.ycombinator.com/item?id=49822534
why_read: Read this to understand how letter implements fine-grained, relationship-based
  access control inside PostgreSQL using planner hooks and triggers. It provides a
  practical approach to row-level permissions driven directly by data relationships
  rather than static role grants.
authors:
- paulharter
---

Enforcing relationship-based access control (ReBAC) usually forces a painful architectural split. You either run an external permission engine like SpiceDB or Ory Keto, or you push complex join-heavy permission logic into application code. Letter brings this access model directly into PostgreSQL through a native extension.

The extension handles read security transparently using a PostgreSQL query planner hook (letter.enforce_reads). Instead of relying on static table grants, the planner rewrites queries to enforce rules based on row graph relationships, such as allowing access only if a user belongs to a parent workspace. Write operations are simultaneously guarded using native triggers.

Moving authorization into the query planner prevents permission drift and eliminates out-of-band authorization round trips across the network. For backend engineers managing multi-tenant schemas, this is a clean alternative to hand-rolled Row-Level Security policies that often degrade planner performance.

Pushing graph authorization into the database planner reduces latency and simplifies application services.
