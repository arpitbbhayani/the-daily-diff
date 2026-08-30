---
authors:
- Robert Escriva
comments: https://news.ycombinator.com/item?id=49475194
date: '2026-08-28'
depth_score: 9
hn_id: '49475194'
image: /infographics/07-hn-49475194.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- agent-swarms
- catchup
- concurrency-control
- database-transactions
- distributed-systems
- hn
- knowledge-bases
- shared-state
title: Agent swarms create costly distributed systems problems for shared knowledge
url: https://www.trychroma.com/engineering/transactions
utility_score: 9
why_read: This text explains why managing agent swarms and their shared knowledge
  bases is a challenging distributed systems problem. Readers will learn why common
  concurrency control solutions are inefficient and costly for agent-written knowledge,
  particularly concerning database transactions.
---

Treating agent swarms as a pure distributed systems problem is a critical shift, especially when agents modify shared knowledge. Traditional database transactions often fall short, primarily because aborting an agent's work means discarding potentially minutes of expensive LLM reasoning and paying to redo it.

The key insight is optimizing for "goodput" rather than just avoiding conflicts. When agents produce natural language, diffs and merges are not as straightforward as with code. This demands rethinking concurrency control, moving beyond simple git-like merges or database aborts that are cheap for code but ruinously expensive for agent reasoning.

This piece offers a compelling argument for new transaction models tailored to agent workloads, focusing on preserving paid-for reasoning. It is a must-read for anyone building serious multi-agent systems.