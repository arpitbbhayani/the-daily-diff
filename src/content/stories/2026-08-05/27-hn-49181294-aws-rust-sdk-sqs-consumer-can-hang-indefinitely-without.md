---
title: AWS Rust SDK SQS consumer can hang indefinitely without timeout
source: hn
url: https://encore.dev/blog/message-queue-hangs
date: '2026-08-05'
tags:
- aws-rust-sdk
- catchup
- dead-connections
- hn
- long-polling
- request-timeout
- sqs
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49181294'
comments: https://news.ycombinator.com/item?id=49181294
why_read: This article reveals a critical default configuration in the AWS Rust SDK
  where SQS consumers can hang indefinitely due to missing request timeouts. Readers
  will learn the root cause of this silent failure, its implications for system reliability,
  and the precise fix to prevent it.
authors:
- Ivan Cernja
---

Your SQS consumer can hang forever by default, a silent killer in distributed systems. The AWS Rust SDK ships without a request timeout, leaving `ReceiveMessage` calls vulnerable to indefinite hangs if a connection silently dies.

This behavior means a consumer appears healthy while the queue backs up, leading to critical production issues that are difficult to debug. The article details how to fix this with one carefully placed timeout.

Understanding such subtle failure modes is crucial for building robust systems. This is a must-read for any senior engineer designing or operating distributed message queues.
