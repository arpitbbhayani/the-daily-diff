---
title: Neon Object Storage Integrates Files with Postgres Branching
source: hn
url: https://neon.com/blog/building-neon-object-storage
date: '2026-08-06'
tags:
- branch-aware
- catchup
- copy-on-write
- hn
- neon-object-storage
- postgres-branching
- s3-compatible
section: databases
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49200898'
comments: https://news.ycombinator.com/item?id=49200898
why_read: This article introduces Neon Object Storage, an S3-compatible store that
  extends Neon's branching capabilities to include files. Readers will learn how it
  enables unified branching for both database data and object storage with benefits
  like isolation and copy-on-write.
authors:
- Carlota Soto
---

Imagine branching your entire database, not just its schema and data, but also all associated files in S3-compatible object storage. Neon has done just that, introducing a "branch-aware" object store that forks when your Postgres database branches.

This means creating a new branch gives you an isolated copy of both your database and your buckets/objects at that point in time. It uses a copy-on-write mechanism, so storage costs only increase when a branch diverges, not on initial creation.

This architectural choice streamlines development workflows dramatically. Think about ephemeral environments for pull requests or isolated agent runs where data and files consistently reflect a specific state. It simplifies testing, ensures consistency, and allows for quick, disposable environments without affecting production or sibling branches. This is a significant step forward in managing complex application state.
