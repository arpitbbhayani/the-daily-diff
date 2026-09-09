---
title: Rust structs define key encoding for KV databases
source: github
url: https://github.com/orbsh/okm
date: '2026-09-07'
tags:
- catchup
- compile-time-checks
- data-modeling
- ddl
- declarative-macros
- github
- key-value-store
- object-keyspace-mapping
- orm
- rust-type-system
- schema-correctness
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49594867'
comments: https://news.ycombinator.com/item?id=49594867
why_read: Read this to understand how Object-Keyspace Mapping (OKM) offers ORM-like
  declarative schema definition for key-value stores. You will learn how Rust's type
  system can enforce schema correctness at compile-time, improving data modeling and
  coordination.
authors:
- orbsh
---

Imagine combining the declarative power of an ORM with Redis-level speed and PostgreSQL-grade durability. That is the promise of OKM, a new Rust library for Object-Keyspace Mapping.

OKM challenges the traditional SQL DDL model by shifting schema correctness from runtime database engines to the compile-time compiler using Rust's robust type system. This means your data layout rules are enforced *before* deployment, catching errors earlier and enhancing team coordination.

This project is not just another data access layer; it represents a novel approach to KV storage engine design. It provides deep insights into encoding principles, index strategies, and how to achieve zero-cost semantic data layers through clever use of Rust macros.
