---
title: LuaDB is a lightweight, embeddable, zero-dependency RDBMS in pure Lua
source: github
url: https://github.com/jncastilho/luadb
date: '2026-08-28'
tags:
- acid-transactions
- b-tree
- catchup
- embedded-database
- game-development
- github
- jsonb
- lua
- luadb
- luajit
- rdbms
- replication
- sql
- wal
- zero-dependency
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49485379'
comments: https://news.ycombinator.com/item?id=49485379
why_read: Read this to understand LuaDB, a unique, lightweight, zero-dependency RDBMS
  built in pure Lua. It covers its advanced features for embedded applications and
  game development.
authors:
- jncastilho
---

Imagine building a full-fledged relational database engine from scratch in pure Lua, complete with B+Trees, Write-Ahead Logging for ACID transactions, and even multi-region master-master replication. LuaDB is exactly that, and it is a masterclass in database systems engineering.

What makes this truly remarkable is the technical ambition: a pluggable Virtual File System layer that can use S3 object storage, a native JSONB engine, and even a PostgreSQL wire protocol gateway. The project also tackles complex distributed systems challenges like conflict resolution in active-active replication using Hybrid Logical Clocks.

This project offers an incredibly deep dive into how database internals are engineered, demonstrating a unique approach to portability and functionality. It is a goldmine for understanding storage engines, transaction systems, and distributed data consistency in a very concrete, open-source example.
