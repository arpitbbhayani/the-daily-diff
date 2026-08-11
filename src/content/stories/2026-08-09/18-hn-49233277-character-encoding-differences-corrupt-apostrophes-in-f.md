---
title: Character encoding differences corrupt apostrophes in file sharing
source: hn
url: https://www.johndcook.com/blog/2026/08/07/corrupted-apostrophes/
date: '2026-08-09'
tags:
- catchup
- character-encoding
- file-sharing
- hn
- mojibake
- shift-jis
- utf-8
- windows-1252
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49233277'
comments: https://news.ycombinator.com/item?id=49233277
why_read: This text explains a common problem of corrupted characters (mojibake) when
  sharing files between devices due to different character encodings. Readers will
  learn how different encodings like UTF-8, Windows-1252, and Shift-JIS can misinterpret
  bytes, leading to garbled text.
authors:
- ibobev
---

Ever seen an apostrophe magically transform into `â€™` or `痴`? This is not random corruption; it is a predictable nightmare rooted in character encoding mismatches, and it can plague your data pipelines.

This article breaks down a specific instance where a single UTF-8 right single quote (U+2019) gets mangled. It shows exactly how its UTF-8 bytes (`E2 80 99`) are misinterpreted as three Windows-1252 characters, or even as a Shift-JIS character.

Understanding these byte-level misinterpretations is crucial for any engineer dealing with data integrity across different systems. The provided Python code makes it easy to reproduce and truly grasp why your `’` becomes a `痴`.
