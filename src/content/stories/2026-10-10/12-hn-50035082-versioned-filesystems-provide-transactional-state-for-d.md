---
title: Versioned filesystems provide transactional state for disposable sandboxes
source: hn
url: https://www.shayon.dev/post/2026/283/versioned-filesystem-for-disposable-sandboxes/
date: '2026-10-10'
tags:
- blob-storage
- catchup
- copy-on-write
- database-transactions
- hn
- sandboxing
- versioned-filesystems
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50035082'
comments: https://news.ycombinator.com/item?id=50035082
why_read: Read this to understand how versioned storage enables stateful workflows
  across ephemeral sandboxes. You will learn how to design snapshot-based branch isolation
  and integrate hot disk caching with cold S3 storage.
authors:
- shayonj
---

Ephemeral execution sandboxes solve security isolation, but they break down the moment workflows require persistent state across steps. When agents or batch scripts execute, they constantly interact with local SQLite files, cloned Git repositories, or embedded DuckDB analytics. If every sandbox is completely discarded after execution, managing that mutable data becomes an architectural bottleneck.

Tines resolved this by treating execution runs like database transactions on top of a custom copy-on-write filesystem. Each execution step receives an isolated snapshot, commits changes upon success, and aborts cleanly on failure without leaking uncommitted state to downstream tasks. Volume branches can fork instantaneously off any historical snapshot without copying physical bytes.

The storage layer tiers active data on fast local storage while offloading cold snapshots directly to S3. Instead of forcing processes to stream every individual I/O call over high-latency object store APIs, local blocks are indexed and flushed asynchronously.

Treating the filesystem as a versioned transaction log is the cleanest way to bridge ephemeral compute and persistent agent state.
