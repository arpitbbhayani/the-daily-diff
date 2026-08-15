---
title: We turned off Pub/Sub and nobody noticed
source: hn
url: https://incident.io/blog/we-turned-off-pub-sub-and-nobody-noticed
date: '2026-08-13'
tags:
- catchup
- chaos-engineering
- event-driven-systems
- google-cloud-pub-sub
- high-availability
- hn
- message-broker
- redundancy
- system-resilience
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49285325'
comments: https://news.ycombinator.com/item?id=49285325
why_read: This post describes how incident.io added a secondary message broker to
  increase system availability and resilience, enabling them to turn off Google Cloud
  Pub/Sub without customer impact. Readers will learn about the challenges and benefits
  of building highly resilient messaging infrastructure.
authors:
- Patrick Hamann
- Mike Fisher
---

Building event-driven systems that can truly withstand outages is a challenge. Incident.io pulled off an impressive feat: they successfully turned off Google Cloud Pub/Sub, and not a single customer noticed.

Their solution involved introducing a secondary message broker, Kafka, alongside Pub/Sub. The article dives into the specifics of their event adapter, dynamic load balancing, and a unique fairness-weighted scheduling system that ensures graceful degradation and seamless failover.

This is not just a theoretical concept; it is a battle-tested blueprint for achieving extreme fault tolerance in mission-critical messaging infrastructure. It showcases how meticulous system design and chaos engineering practices can directly translate into higher availability and meet stringent SLAs.
