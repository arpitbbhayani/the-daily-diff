---
title: Dynamic shredding of semi-structured JSON yields massive speedups
source: hn
url: https://pydantic.dev/articles/dynamic-shredding-2026-01-26
date: '2026-10-11'
tags:
- catchup
- dynamic-shredding
- hn
- opentelemetry
- query-optimization
- semi-structured-data
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50048490'
comments: https://news.ycombinator.com/item?id=50048490
why_read: Read this to understand how dynamic shredding dramatically accelerates analytical
  queries on semi-structured OpenTelemetry data. You will gain a clear mental model
  of how decomposing arbitrary JSON attributes into columnar structures eliminates
  query bottlenecks.
authors:
- Adrian Garcia Badaracco
---

Querying arbitrary JSON attributes inside high-volume telemetry tables is notoriously brutal on database engines. When fields remain packed as unstructured JSON text or binary blobs, the query engine must scan the entire blob row by row, parse the payload in memory, and extract target keys on every single predicate filter.

The team behind Logfire solved this by implementing dynamic JSON shredding for OpenTelemetry traces and spans. Rather than persisting incoming key-value attributes as opaque JSON columns, the system inspects ingested records and decomposes frequently accessed keys into dedicated columnar storage paths.

This approach converts expensive row-oriented JSON parsing into vectorizable, compressed columnar scans with built-in min-max index skipping. Queries targeting specific nested attributes that previously timed out after 30 seconds now return in under one second.

The most effective optimization is often removing serialization overhead before query execution even begins.
