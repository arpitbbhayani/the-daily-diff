---
title: Amazon S3's disk-based design creates architectural limitations
source: hn
url: https://btrblocks.com/blog/s3_is_the_future_and_the_past/
date: '2026-09-25'
tags:
- amazon-s3
- architectural-limitations
- catchup
- cloud-architecture
- data-storage
- disk-assumptions
- hn
- stateless-compute
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49851693'
comments: https://news.ycombinator.com/item?id=49851693
why_read: This article explains how Amazon S3, despite its widespread adoption, imposes
  significant architectural limitations due to its outdated disk-based design assumptions.
  Readers will learn the trade-offs of building data systems on S3 and the common
  workarounds required.
authors:
- Viktor Leis
---

Amazon S3 is the bedrock of modern cloud architecture, yet its original design predates many of the hardware advancements we now take for granted, especially the prevalence of SSDs. This creates an "architectural tax" that every system built on S3 must contend with.

The article argues that S3's properties, like tens of milliseconds latency and less than 100 MB/s per request, are inherent to its disk-based heritage. This forces engineers to build complex caching layers, batch small writes, and rely on separate metadata stores like DynamoDB to overcome these limitations.

Understanding these fundamental constraints is critical for any senior engineer designing scalable data systems. It is not about abandoning S3, but rather recognizing its original purpose and intelligently designing around its historical trade-offs to leverage its immense capacity and durability effectively.

Architecting with S3 requires deep insight into its past to shape your system's future.
