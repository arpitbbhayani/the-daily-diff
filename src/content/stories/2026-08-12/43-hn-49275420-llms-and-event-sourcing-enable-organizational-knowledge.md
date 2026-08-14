---
title: LLMs and event sourcing enable organizational knowledge graphs
source: hn
url: https://blog.arkency.com/maintaining-an-organizational-knowledge-graph-with-an-llm-and-event-sourcing/
date: '2026-08-12'
tags:
- catchup
- event-sourcing
- hn
- llm
- organizational-knowledge-graph
- organizational-memory
- unstructured-data
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49275420'
comments: https://news.ycombinator.com/item?id=49275420
why_read: This text explains how to combine LLMs and event sourcing to build a persistent
  organizational knowledge graph. Readers will learn how this approach addresses the
  challenge of capturing and retaining insights from unstructured organizational communication.
authors:
- pdabrowski6
---

Organizational knowledge often gets lost in chat threads and meeting notes. Imagine a system where an LLM turns that chaos into a structured knowledge graph, backed by event sourcing for reliability and auditability. This post dives into building exactly that.

The authors detail "Planet Arkency," a multi-tenant knowledge graph that uses LLMs to ingest and process unstructured data from various sources. The key is how it combines the LLM's natural language understanding with event sourcing via Rails Event Store.

This provides an immutable audit trail of knowledge evolution and ensures durability, a crucial aspect of any system you need to rely on. It is a fantastic example of applied AI meeting robust system design principles to solve a real-world problem.

Learn to build intelligent systems that remember what your organization forgets.
