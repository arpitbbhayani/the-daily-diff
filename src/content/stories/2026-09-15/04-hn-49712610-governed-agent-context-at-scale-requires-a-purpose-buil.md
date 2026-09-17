---
title: Governed agent context at scale requires a purpose-built graph database
source: hn
url: https://blog.getzep.com/why-we-built-a-graph-database-service-for-agent-memory/
date: '2026-09-15'
tags:
- agent-memory
- catchup
- context-unification
- data-governance
- graph-database
- hn
- knowledge-graphs
- scalable-architecture
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49712610'
comments: https://news.ycombinator.com/item?id=49712610
why_read: This text explains why a general-purpose graph database is insufficient
  for scaled agent memory and how Zep's Konig offers a specialized solution. Readers
  will understand the benefits of a purpose-built graph database for managing unified,
  governed, and temporal agent context.
authors:
- roseway4
---

Building robust AI agents often hits a wall when it comes to managing their vast and complex memory. General-purpose graph databases struggle with the unique demands of agent context at scale. Zep's solution, Konig, offers a groundbreaking, purpose-built graph database service for this very problem.

Konig is engineered to handle millions of temporal, governed knowledge graphs, often in cold storage, while maintaining sub-100ms p95 retrieval latencies even when scaling to tens of millions of graphs. This is achieved by innovatively tracking cost to activity, evicting idle graphs to object storage, and serving hot graphs from RAM.

Moreover, it fuses vector, full-text, graph, and pattern signals within a single query, providing a comprehensive, ranked answer. This level of integrated intelligence, combined with built-in governance and per-graph isolation, presents a powerful blueprint for any senior engineer tackling scalable LLM infrastructure and multi-agent systems.
