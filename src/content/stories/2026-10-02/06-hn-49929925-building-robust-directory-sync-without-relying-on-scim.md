---
title: Building robust directory sync without relying on SCIM
source: hn
url: https://www.firezone.dev/blog/building-reliable-directory-sync
date: '2026-10-02'
tags:
- access-control
- catchup
- directory-sync
- hn
- identity-providers
- scim
- user-management
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49929925'
comments: https://news.ycombinator.com/item?id=49929925
why_read: Learn why standard SCIM implementations struggle with identity management
  and how custom sync engines handle complex user and group state transitions.
authors:
- jamilbk
image: /infographics/06-hn-49929925.jpg
---

Implementing directory synchronization for enterprise access control sounds straightforward until you encounter the real-world limitations of SCIM. Most identity providers implement SCIM with inconsistent webhook deliveries, partial schema support, and poor handling of nested group hierarchies.

To ensure reliable synchronization, identity state should be treated as an eventually consistent distributed cache. Polling provider APIs using state reconciliation and cursor-based pagination prevents missing transient deletion events that standard webhooks often drop.

Flattening nested group memberships into fast lookups requires deterministic graph traversal and local idempotency keys. Without this, permission propagation can introduce race conditions across critical application routes.

Designing synchronization around state diffs rather than ephemeral events builds far more resilient enterprise systems.
