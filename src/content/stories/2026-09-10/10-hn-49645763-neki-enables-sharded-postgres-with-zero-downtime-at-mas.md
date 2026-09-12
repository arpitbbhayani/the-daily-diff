---
title: Neki enables sharded Postgres with zero downtime at massive scale
source: hn
url: https://neki.dev/
date: '2026-09-10'
tags:
- catchup
- database-router
- high-availability
- hn
- horizontal-scaling
- online-schema-changes
- sharded-postgres
- zero-downtime-resharding
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49645763'
comments: https://news.ycombinator.com/item?id=49645763
why_read: Read this to understand how PlanetScale's Neki product provides a sharded
  Postgres solution for extreme scale. You will learn about its architecture for handling
  hundreds of millions of QPS and petabytes of data with zero-downtime resharding.
authors:
- handfuloflight
---

PlanetScale has unveiled Neki, a sharded PostgreSQL solution designed to push the limits of database scalability. This system allows scaling PostgreSQL past a single machine to handle petabytes of data and over 100 million queries per second, all while maintaining 0 downtime.

Neki achieves this through a sophisticated architecture involving a router, sidecars, and a control plane that orchestrate multiple 'real Postgres' shards. Critical features include zero-downtime resharding, which enables rebalancing capacity without application rewrites or maintenance windows, and online schema changes that coordinate across shards.

For engineers tackling massive data workloads, Neki offers a compelling look at how to scale a traditional relational database horizontally, providing practical solutions to complex distributed database challenges.
