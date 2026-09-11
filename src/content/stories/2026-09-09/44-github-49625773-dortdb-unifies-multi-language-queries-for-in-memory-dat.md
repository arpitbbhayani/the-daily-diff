---
title: DortDB unifies multi-language queries for in-memory data
source: github
url: https://github.com/filipjezek/dortdb
date: '2026-09-09'
tags:
- catchup
- dortdb
- github
- in-memory-data
- javascript
- multi-language-queries
- query-engine
- shared-algebra
section: databases
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49625773'
comments: https://news.ycombinator.com/item?id=49625773
why_read: This introduces DortDB, a novel query engine that unifies multi-language
  queries (SQL, Cypher, XQuery) for in-memory JavaScript data, explaining how it compiles
  them to a shared algebra for efficient, in-place execution.
authors:
- Filip Jezek
---

Querying complex in-memory data structures in applications often means writing imperative loops or custom parsers. DortDB changes that by offering a multi-language query engine for JavaScript data already in your app's memory.

It supports SQL, Cypher, and XQuery, and you can even mix them in a single query. The core innovation is compiling all these languages into one shared algebra, enabling a single optimizer and executor for cross-model queries.

This means you get powerful, optimized declarative querying over arrays, DOM trees, and graphs without moving data to a separate database process. It is a highly practical solution for sophisticated in-app data manipulation, enhancing developer productivity and application performance.

You get database-like query capabilities right where your data resides.
