---
title: Cushion offers CouchDB features in Deno KV via PouchDB adapter
source: hn
url: https://jsr.io/@mikehall314/cushion
date: '2026-08-30'
tags:
- catchup
- couchdb
- deno-kv
- document-database
- hn
- map-reduce-views
- optimistic-concurrency
- pouchdb
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49498995'
comments: https://news.ycombinator.com/item?id=49498995
why_read: This document introduces Cushion, a PouchDB adapter for Deno KV. Readers
  will learn how to leverage CouchDB-style features like optimistic concurrency and
  map-reduce views within Deno's built-in key-value store.
authors:
- mikehall314
---

Building a full-featured document database on a simple key-value store like Deno KV sounds like a challenge, but Cushion delivers. It brings the full power of PouchDB 

PouchDB's robust features like revision trees, automatic conflict resolution, and map-reduce views are all implemented directly against Deno KV. This means you get production-grade document storage with optimistic concurrency out-of-the-box, ideal for modern, offline-first applications.

This project is a masterclass in building a sophisticated storage layer, showing how to leverage an underlying key-value store for advanced database functionalities, including replication.
