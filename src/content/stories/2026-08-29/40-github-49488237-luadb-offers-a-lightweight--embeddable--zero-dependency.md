---
title: LuaDB offers a lightweight, embeddable, zero-dependency RDBMS
source: github
url: https://github.com/jncastilho/luadb
date: '2026-08-29'
tags:
- acid-transactions
- b-tree
- catchup
- embedded-database
- github
- lua
- rdbms
- replication
- sql
- zero-dependency
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49488237'
comments: https://news.ycombinator.com/item?id=49488237
why_read: Discover LuaDB, a unique lightweight and zero-dependency RDBMS written entirely
  in Lua. This overview provides insight into its architecture, advanced features
  like ACID transactions and multi-region replication, and ideal use cases for game
  development and embedded systems.
authors:
- jncastilho
---

Imagine a full RDBMS, built from scratch, entirely in Lua, with zero external dependencies. LuaDB does exactly this, offering ACID transactions, a B+Tree index, WAL, and even multi-region master-master replication.

This project is not just a curiosity; it is a masterclass in database internals. You can delve into the source to understand how a pluggable Virtual File System can support local disk, in-memory RAM, or S3 object storage, or how Hybrid Logical Clocks resolve replication conflicts.

It demonstrates incredible architectural depth, proving that sophisticated database engineering can be achieved with minimal dependencies. This is perfect for those who want to truly understand how database systems are built.
