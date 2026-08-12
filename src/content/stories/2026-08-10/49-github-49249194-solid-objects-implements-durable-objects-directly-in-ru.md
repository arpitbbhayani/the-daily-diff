---
title: Solid Objects implements Durable Objects directly in Ruby on Rails
source: github
url: https://github.com/cardmagic/solid_objects
date: '2026-08-10'
tags:
- actor-model
- catchup
- cloudflare-durable-objects
- database-backed
- github
- ruby-on-rails
- serialized-turns
- solid-objects
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49249194'
comments: https://news.ycombinator.com/item?id=49249194
why_read: This text introduces Solid Objects, a Ruby on Rails port of Cloudflare's
  Durable Objects. Readers will learn how to implement addressable, durable objects
  with serialized turns in a Rails application using only its existing database, without
  needing external services like Redis or Cloudflare.
authors:
- cardmagic
---

You can bring the power of Cloudflare Durable Objects directly into your Rails application, without needing Redis, a Cloudflare account, or a separate actor service. This open-source project, Solid Objects, leverages your existing MySQL, PostgreSQL, or SQLite database.

It allows you to build addressable objects with durable state and serialized turns, concepts usually reserved for dedicated distributed systems. This approach simplifies state management for complex, concurrent operations within a familiar Rails environment.

This is a significant win for engineers looking to implement robust, scalable stateful services without adding complex infrastructure dependencies. It shows how existing RDBMS capabilities can be stretched to support sophisticated distributed patterns.
