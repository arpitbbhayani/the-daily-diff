---
authors:
- Farid Zakaria
comments: https://news.ycombinator.com/item?id=49415271
date: '2026-08-24'
depth_score: 9
hn_id: '49415271'
image: /infographics/01-hn-49415271.jpg
interest_score: 9
novelty_score: 10
section: systems
source: hn
tags:
- catchup
- elf
- executable-format
- hn
- nix
- self
- sqlelf
- sqlite
title: Your executable is a SQLite database
url: https://fzakaria.com/2026/08/23/your-executable-is-a-sqlite-database
utility_score: 8
why_read: This article introduces the radical idea of using SQLite as an executable
  format instead of ELF. Readers will learn about the author's prototype, SELF, and
  how it challenges traditional notions of executable structures.
---

Imagine if your executable was not just a binary, but a SQLite database. This provocative idea rethinks how programs are structured and analyzed, proposing to replace the traditional ELF format with a SQLite database.

The author, Farid Zakaria, developed a prototype called SELF (Structured Executable & Linkable Format) and even a tool, `sqlelf`, that lets you query ELF files using SQL. This means you could run `SELECT name FROM elf_symbols` instead of fiddling with `readelf` and `grep`.

This is a fundamental shift in systems programming, merging database principles with executable design. It unlocks immense possibilities for declarative binary analysis, improved security, and potentially novel linking and loading mechanisms.

This is not just a theoretical exercise; it is a glimpse into a potential future for executable formats, offering deep insights for any engineer keen on low-level systems and database internals.