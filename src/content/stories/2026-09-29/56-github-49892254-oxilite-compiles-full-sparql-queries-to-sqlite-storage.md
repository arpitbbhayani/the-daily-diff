---
title: Oxilite compiles full SPARQL queries to SQLite storage
source: github
url: https://github.com/Volland/oxilite
date: '2026-09-29'
tags:
- catchup
- cloudflare-d1
- github
- graph-databases
- oxigraph
- rdf-database
- sparql
- sqlite
section: databases
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49892254'
comments: https://news.ycombinator.com/item?id=49892254
why_read: Learn how Oxilite enables SPARQL 1.1 query execution directly on top of
  SQLite, allowing RDF graph workloads to run across serverless edge platforms like
  Cloudflare D1 and Turso.
authors:
- Volland
---

Running semantic graph databases in production usually demands specialized native storage engines like RocksDB, which introduces significant operational friction in serverless and edge environments. Oxilite takes a different architectural route by compiling SPARQL 1.1 queries and updates directly into standard SQL executed over SQLite.

By compiling graph patterns, property paths, and graph mutations down to optimized relational queries, Oxilite allows teams to run full RDF stores, RDFS reasoning, and SHACL validation anywhere SQLite operates. It functions across bundled libsqlite3, Turso, and Cloudflare D1 environments. The engine also layers openCypher, Datalog, and vector search over the exact same underlying relational tables without requiring dedicated graph cluster infrastructure.

Translating expressive declarative graph semantics into relational execution plans makes lightweight graph capabilities accessible across edge deployments without the operational burden of dedicated storage engines.
