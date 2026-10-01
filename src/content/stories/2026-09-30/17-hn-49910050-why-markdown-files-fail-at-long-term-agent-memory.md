---
title: Why markdown files fail at long-term agent memory
source: hn
url: https://past.dev/blog/md-files-vs-memory-api-beam-10m
date: '2026-09-30'
tags:
- agent-memory
- beam-benchmark
- catchup
- hn
- llm-agents
- temporal-reasoning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49910050'
comments: https://news.ycombinator.com/item?id=49910050
why_read: Read this to understand why naive markdown-based storage breaks down when
  managing complex, evolving agent memory over long contexts.
authors:
- The past.dev team
---

Storing agent memory in flat Markdown files breaks down quickly as context horizons expand past a few thousand tokens. While appending notes to a scratchpad works for simple single-session tasks, it fails to handle temporal invalidation, out-of-order events, and privacy boundaries.

When evaluating long-term memory across 10 million tokens on the BEAM benchmark, raw context stuffing scores below 26 percent, while dedicated memory architectures reach over 85 percent. Flat files create fundamental ordering paradoxes. If an agent appends an older retroactive fact into a notes file, the language model interprets the newest entry in the file as current ground truth. Furthermore, flat text files cannot enforce granular access control when private communications mix with public organizational data.

Solving long-horizon agent memory requires treating memories as structured, timestamped entities with provenance rather than unstructured text blobs.
