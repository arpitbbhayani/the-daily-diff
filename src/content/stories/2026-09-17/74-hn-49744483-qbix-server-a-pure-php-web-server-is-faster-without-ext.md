---
title: Qbix Server a Pure PHP Web Server Is Faster Without Extensions
source: hn
url: http://qbixserver.com/
date: '2026-09-17'
tags:
- api-documentation
- catchup
- cluster-replication
- hn
- microservice-isolation
- no-extensions
- performance-optimization
- php-framework-compatibility
- php-web-server
- websockets
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49744483'
comments: https://news.ycombinator.com/item?id=49744483
why_read: This text introduces Qbix Server, a pure PHP web server claiming significant
  speed advantages over alternatives without extensions. Readers will discover a solution
  that offers high throughput, WebSocket support, and simplified microservice architecture
  for PHP applications.
authors:
- EGreg
---

A new PHP web server called Qbix Server claims to deliver over 10 times the performance of existing solutions like Swoole and FrankenPHP, running on unmodified PHP code. This is achieved by consolidating all typical web stack components - Nginx, FPM, Node, Redis, and Docker - into a single, pure PHP process.

This architecture leverages persistent workers, each requiring a mere 120KB of memory, allowing 400 workers to run on just 200MB. The result is a reported 1,060 requests per second compared to FPM's 78, drastically improving throughput for applications like WordPress or Laravel.

The key insight here is the dramatic simplification of the deployment stack and the efficient use of resources through process consolidation and shared state for features like WebSockets. It presents a genuinely novel approach to scaling PHP applications that could significantly reduce operational complexity and cost.

This is not just an incremental improvement; it is a fundamental rethinking of the PHP runtime environment.
