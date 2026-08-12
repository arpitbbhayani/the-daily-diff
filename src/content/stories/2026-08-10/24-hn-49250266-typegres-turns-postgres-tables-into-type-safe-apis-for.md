---
authors:
- ryanrasti
comments: https://news.ycombinator.com/item?id=49250266
date: '2026-08-10'
depth_score: 8
hn_id: '49250266'
image: /infographics/24-hn-49250266.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- api-framework
- catchup
- data-boundaries
- hn
- postgres
- sql-over-rpc
- typegres
- typescript
title: Typegres turns Postgres tables into type-safe APIs for clients
url: https://typegres.com/
utility_score: 8
why_read: Read this to learn about Typegres, a framework that enables building type-safe,
  composable SQL APIs over Postgres by treating tables as classes and enforcing strict
  data boundaries. It explains how to decouple your public interface from your database
  schema and control client queries.
---

Building robust, type-safe APIs on top of PostgreSQL can be a challenge, particularly when dealing with schema evolution and client-side query composition. Typegres 0.3 offers an innovative solution.

This TypeScript framework maps your Postgres tables directly to classes, allowing clients to compose their own queries within defined boundaries. The magic here is twofold: it provides full type safety, catching potential errors at compile-time, and it decouples your public API interface from your internal database schema.

The project leverages Cap'n Web RPC for secure communication, ensuring that clients can only perform operations you explicitly allow. This approach brings encapsulation principles directly to your data layer, providing a safer and more maintainable way to expose complex database interactions.

For senior engineers tackling backend API design, Typegres provides a genuinely fresh perspective on how to manage data access, enhance developer productivity, and improve system resilience with Postgres.