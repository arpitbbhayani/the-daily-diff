---
title: Trigram-indexed grep enables fast regex search in large codebases
source: github
url: https://github.com/microsoft/tgrep
date: '2026-09-07'
tags:
- catchup
- code-search
- developer-tools
- github
- large-codebases
- regex-search
- tgrep
- trigram-index
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49598380'
comments: https://news.ycombinator.com/item?id=49598380
why_read: This explains why traditional grep tools are slow on large codebases and
  how tgrep solves this with a trigram index and client/server architecture, making
  searches instant.
authors:
- porridgeraisin
---

Searching massive codebases can be a productivity killer, but Microsoft's Tgrep offers a game-changing solution. This trigram-indexed grep tool, leveraging a client/server architecture, delivers searches up to 52 times faster than ripgrep on large repositories.

Its secret lies in pre-building a trigram index, drastically reducing the files scanned per query. Imagine starting a server once and then getting instant search results forever.

For engineers managing large monorepos or integrating AI coding agents, this tool is a huge leap forward. It is not just about speed; it is about fundamentally improving how developers interact with their code.

This is a prime example of applying clever system design to a fundamental engineering problem.
