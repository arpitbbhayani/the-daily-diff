---
authors:
- Martin Kleppmann
comments: https://news.ycombinator.com/item?id=49046082
date: '2026-07-25'
depth_score: 9
hn_id: '49046082'
image: /infographics/04-hn-49046082.jpg
interest_score: 9
novelty_score: 8
section: databases
source: hn
tags:
- apache-kafka
- apache-samza
- catchup
- database-architecture
- hn
- immutable-data
- stream-processing
title: Apache Samza turns database architecture inside out for improved systems
url: https://martin.kleppmann.com/2015/03/04/turning-the-database-inside-out.html
utility_score: 9
why_read: Understand how Apache Samza can invert traditional database architecture,
  leveraging immutable fact streams and distributed processing. Learn about the benefits
  of this approach, including simpler code, enhanced scalability, and improved robustness
  for your applications.
---

Turning the database inside out sounds like a radical idea, but Martin Kleppmann's 2015 piece is still essential reading for any senior engineer grappling with data scalability and real-time processing. He argues for moving away from mutable global state in databases to an architecture built on always-growing collections of immutable facts.

This approach frames all data changes as streams of events, with Apache Kafka serving as the durable commit log. Processing these streams in real-time with frameworks like Apache Samza allows for immense flexibility and performance gains.

You will find that this paradigm simplifies your application code, boosts scalability, and enhances robustness. It is a foundational concept for modern event-driven and stream-first architectures, offering enduring insights into building resilient distributed systems.