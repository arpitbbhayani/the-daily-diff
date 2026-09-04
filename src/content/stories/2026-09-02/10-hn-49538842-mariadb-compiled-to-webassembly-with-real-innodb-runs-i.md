---
title: MariaDB compiled to WebAssembly with real InnoDB runs in browser
source: hn
url: https://lite4mariadb.shyim.de/
date: '2026-09-02'
tags:
- browser
- catchup
- foreign-keys
- hn
- indexeddb
- innodb
- mariadb
- nodejs
- pthreads
- transactions
- vector-search
- webassembly
- window-functions
section: databases
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49538842'
comments: https://news.ycombinator.com/item?id=49538842
why_read: Read this to understand how a full MariaDB database, including its InnoDB
  storage engine, can run directly in a browser or Node.js environment via WebAssembly,
  offering serverless database capabilities with full SQL features.
authors:
- shyim
---

Running a full relational database with InnoDB transactions and crash recovery directly in your browser or Node.js environment is no longer science fiction. Lite4MariaDB compiles MariaDB to WebAssembly, delivering a ~17MB module with robust capabilities.

This is not a lightweight shim; it is the *real* InnoDB engine, complete with foreign keys, window functions, CTEs, JSON support, and native vector search. Imagine the possibilities for offline-first applications, interactive data exploration, or even running complex logic directly on the client side without a backend roundtrip.

The project leverages WebAssembly and pthreads to achieve this, pushing the boundaries of what is possible in client-side data management. It is a significant step towards truly distributed, embedded database functionality.
