---
authors:
- yito88
comments: https://news.ycombinator.com/item?id=49137858
date: '2026-08-01'
depth_score: 8
hn_id: '49137858'
image: /infographics/29-hn-49137858.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- concurrency-bugs
- database-testing
- embedded-systems
- hn
- jepsen
- unit-testing
- verification
title: Verification tools reveal hidden bugs that unit tests miss
url: https://igel-data.com/blog/verification-found-two-bugs/
utility_score: 9
why_read: This article explains why passing unit tests do not guarantee system correctness
  and introduces verification as a method to find subtle, concurrent bugs that traditional
  tests miss. Readers will learn the fundamental difference between these testing
  approaches and the value of tools like Jepsen Lite.
---

Your tests are green, but is your database truly correct? This piece highlights a critical distinction: traditional unit tests check what you *thought* of, while verification tools check fundamental correctness properties even against unexpected concurrent interleavings.

The author describes how their embedded key-value store, IgelDB, passed all unit tests, including concurrent writes and crash recovery. Yet, a custom "Jepsen Lite" tool, designed to generate random concurrent operations and check for invariant violations, immediately exposed two subtle, identical concurrency bugs.

This is a powerful reminder that robust systems, especially databases, demand more than just test coverage. You need tools that can throw chaos at your system and ensure core properties hold, no matter the execution order. It is about defining "correct" and letting the checker find where your system deviates.

You will gain practical insights into applying Jepsen-style verification to uncover elusive concurrency issues, shifting your perspective from merely testing predicted outcomes to verifying systemic integrity.