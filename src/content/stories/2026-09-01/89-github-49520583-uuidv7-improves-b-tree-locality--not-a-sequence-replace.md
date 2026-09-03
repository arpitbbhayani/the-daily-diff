---
authors:
- janbjorge
comments: https://news.ycombinator.com/item?id=49520583
date: '2026-09-01'
depth_score: 8
hn_id: '49520583'
image: /infographics/89-github-49520583.jpg
interest_score: 8
novelty_score: 7
section: databases
source: github
tags:
- b-tree
- catchup
- data-locality
- github
- information-leakage
- sequences
- uuidv4
- uuidv7
title: UUIDv7 improves B-tree locality, not a sequence replacement
url: https://gist.github.com/janbjorge/bc453f0810ac81ef238d6adbf8f4989b
utility_score: 9
why_read: This text provides a concise comparison of UUIDv7, UUIDv4, and sequences,
  explaining their differences in B-tree insertion patterns and information leakage.
  It helps developers understand the trade-offs for choosing an identifier type.
---

Choosing your primary key strategy goes beyond just "unique identifier". A deep dive into UUIDv7 versus traditional database sequences reveals critical trade-offs that impact performance, data locality, and even security.

UUIDv7 provides time-clustered identifiers, offering better B-tree insertion patterns than random UUIDv4s, which significantly reduces page splits and improves query performance. However, sequences still win on raw locality and smaller storage footprint.

This analysis details how each choice affects indexing, the potential for information leakage through exposed IDs, and the practical implications for efficient cursor-based pagination. It is crucial knowledge for designing scalable database systems.