---
title: Tgrep delivers fast regex search in large codebases via trigram indexing
source: github
url: https://github.com/microsoft/tgrep
date: '2026-09-04'
tags:
- catchup
- client-server-architecture
- code-search-performance
- github
- large-codebases
- regex-search
- trigram-index
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49562928'
comments: https://news.ycombinator.com/item?id=49562928
why_read: This explains how tgrep accelerates regex search in large codebases and
  monorepos using a pre-built trigram index and a client/server model, demonstrating
  significant speedups compared to traditional grep tools.
authors:
- peterfication
---

Tgrep from Microsoft is a game-changer for anyone dealing with huge codebases. Traditional grep tools scan every file, which is painfully slow in a 100k+ file monorepo. Tgrep completely flips this by pre-building a trigram index.

This means searches are nearly instant because the system only touches the small subset of files that could possibly match your regex. The performance gains are significant: up to 52 times faster than ripgrep on large repositories like gecko-dev.

It uses a smart client/server architecture, so you start a server once, index your repo, and then enjoy instant searches forever. This is not just a minor improvement; it is a fundamental shift in how you can efficiently navigate and understand vast amounts of code.

Stop waiting for your searches to complete. This tool provides immediate, practical utility for engineering teams.
