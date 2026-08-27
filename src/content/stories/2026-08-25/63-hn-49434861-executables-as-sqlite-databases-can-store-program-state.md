---
title: Executables as SQLite databases can store program state transactionally
source: hn
url: https://fzakaria.com/2026/08/24/actually-queryable-executables
date: '2026-08-25'
tags:
- catchup
- executables
- hn
- program-state
- single-file-applications
- sqlite
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49434861'
comments: https://news.ycombinator.com/item?id=49434861
why_read: This article demonstrates how executables can be structured as SQLite databases
  to store all program state transactionally within the single executable file itself.
  Readers will learn about the benefits of this approach for simplifying application
  deployment and state management, as showcased by a webserver proof-of-concept.
authors:
- Farid Zakaria
---

What if your executable was not just a program, but also its own transactional database? This mind-bending concept explores an executable *being* a SQLite database, allowing the running program to store all its mutable state 

— like logs or user data — directly within its own binary file. The author details how binfmt_misc can map segments, allowing the OS to treat the SQLite file as an executable. This collapses the entire application, its data, and its state into a single, queryable file. Imagine self-httpd, a web server that contains its code, website, routes, and visitor logs all within its own binary, updating them transactionally.

This is not merely theoretical; it is a working proof-of-concept. It challenges conventional wisdom about application deployment, state management, and file systems. It also has profound implications for simplifying distributed systems and creating highly portable, self-healing applications.

This innovative approach turns every program into a self-contained, queryable artifact, fundamentally reshaping how we think about binary tooling and transactional storage.
