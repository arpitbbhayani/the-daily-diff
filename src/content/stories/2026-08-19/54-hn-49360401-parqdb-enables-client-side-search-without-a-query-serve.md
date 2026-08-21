---
title: ParqDB Enables Client-Side Search Without a Query Server
source: hn
url: https://search.parqdb.io/
date: '2026-08-19'
tags:
- catchup
- client-side-search
- hn
- ivf-lvq8-index
- minilm
- object-storage
- parqdb
- parquet
- vector-embeddings
- wasm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49360401'
comments: https://news.ycombinator.com/item?id=49360401
why_read: This text introduces ParqDB, an innovative architecture for building a serverless
  search engine. Readers will learn how to perform vector-based search directly in
  the browser using WASM, MiniLM embeddings, and object storage, without a dedicated
  query server.
authors:
- petrizhang
---

Imagine a world where vector search happens entirely in your browser, without a dedicated query server. ParqDB achieves this with a truly serverless approach that redefines LLM infrastructure.

The system builds IVF-LVQ8 indexes from MiniLM embeddings, publishes them to object storage as immutable Parquet files, and then lets your browser do the heavy lifting. Queries are embedded client-side, using WASM to fetch only necessary byte ranges and perform ranking locally.

This architecture is a game-changer for privacy-preserving RAG and on-device semantic search, proving that robust, scalable vector capabilities are possible without complex backend services. It highlights a clever blend of web technologies, data formats, and distributed storage principles. Stop running servers and start running vector search where it matters most: directly at the edge.
