---
title: Tgrep uses trigram index for fast regex search in large codebases
source: github
url: https://github.com/microsoft/tgrep
date: '2026-09-09'
tags:
- catchup
- client-server-architecture
- code-search
- github
- large-codebases
- performance
- regex-search
- tgrep
- trigram-index
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49630216'
comments: https://news.ycombinator.com/item?id=49630216
why_read: This explains how tgrep achieves significantly faster regex searches in
  large codebases compared to traditional tools like grep or ripgrep, by using a pre-built
  trigram index and a client/server architecture.
authors:
- adamnemecek
---

Searching massive codebases can be a real pain, with standard tools like `grep` and `ripgrep` often scanning every file, leading to slow `O(total bytes)` queries. Microsoft's `tgrep` flips this on its head with a Rust-based implementation that uses trigram indexing.

By pre-building an index, `tgrep` only touches files that could possibly match your search, enabling instant results after the initial indexing. This client/server architecture delivers up to 52 times faster performance than `ripgrep` on large repositories.

The insights here are incredibly valuable for any senior engineer. The principles of indexing for query optimization apply directly to database systems and RAG architectures, and `tgrep` is even designed for integration with AI coding agents. This is a powerful example of how smart system design can solve performance bottlenecks.
