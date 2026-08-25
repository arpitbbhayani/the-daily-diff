---
title: A Tale of Two Flink Autoscalers
source: hn
url: https://netflixtechblog.com/a-tale-of-two-flink-autoscalers-e9f6a1b1492b?source=rss-c3aeaf49d8a4------2
date: '2026-08-23'
tags:
- autoscaling
- catchup
- flink
- hn
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49408561'
comments: https://news.ycombinator.com/item?id=49408561
why_read: This text likely discusses and compares two different approaches to autoscaling
  within Apache Flink. Readers will understand the distinct characteristics and implications
  of each autoscaler.
authors:
- sbulaev
---

Designing effective autoscalers for distributed stream processing platforms like Apache Flink is notoriously difficult, balancing responsiveness with stability and cost. Netflix, a pioneer in large-scale data processing, has shared their journey.

They detail the evolution and trade-offs of two distinct Flink autoscalers. You will learn about the architectural decisions, operational challenges, and practical solutions they implemented to handle dynamic workloads for critical real-time data pipelines.

This is not just theory; it is a deep dive into production-grade systems, offering concrete lessons that are directly applicable if you are wrestling with scalability, resource management, or cost optimization for your own stream processing infrastructure.
