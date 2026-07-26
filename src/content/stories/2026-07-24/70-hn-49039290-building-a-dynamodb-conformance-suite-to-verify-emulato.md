---
authors:
- Martin Hicks
comments: https://news.ycombinator.com/item?id=49039290
date: '2026-07-24'
depth_score: 8
hn_id: '49039290'
image: /infographics/70-hn-49039290.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- conformance-testing
- dynamo-db
- dynoxide
- emulators
- ground-truth
- hn
title: Building a DynamoDB Conformance Suite to Verify Emulator Behavior
url: https://martinhicks.dev/articles/dynoxide-conformance-suite
utility_score: 8
why_read: Read this to understand why a DynamoDB conformance suite is crucial for
  emulators and how one can be built to ensure compatibility and correctness, ground-truthed
  against real DynamoDB.
---

A real challenge in building "compatible" services is true conformance. AWS offers no official suite for DynamoDB, leaving emulator developers guessing. One engineer decided this was unacceptable.

They built a comprehensive conformance suite from scratch, now with over 950 tests. Critically, these tests were ground-truthed against the actual DynamoDB service. The results are stark: their own Rust-based Dynoxide passes everything, while AWS's official DynamoDB Local fails 42 tests.

This project highlights the significant effort required for true compatibility in distributed systems and offers an invaluable tool for ensuring your DynamoDB-compatible services behave exactly as expected. It is a masterclass in thorough engineering.