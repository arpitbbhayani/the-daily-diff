---
title: Qbix Server achieves superior performance as a pure PHP web server
source: hn
url: https://qbixserver.com
date: '2026-09-18'
tags:
- api-documentation
- catchup
- cluster-replication
- cron
- hn
- logging
- microservices
- performance
- pure-php
- qbix-server
- tls
- web-server
- websockets
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49749789'
comments: https://news.ycombinator.com/item?id=49749789
why_read: This text introduces Qbix Server, a pure PHP web server claiming superior
  performance to existing solutions without requiring extensions. Readers will learn
  about its integrated features, such as WebSockets, microservice isolation, and cluster
  replication, and understand its architectural advantages for high-throughput PHP
  applications.
authors:
- EGreg
---

A new contender claims the title of the world's fastest PHP web server: Qbix Server. Written entirely in PHP, it boasts 14x throughput over traditional php-fpm setups, outperforming established solutions like Swoole and FrankenPHP without requiring extensions or Docker.

The secret lies in its architecture: persistent, copy-on-write workers that achieve astonishing memory efficiency (120KB per worker for 400 workers on 200MB) and near-instantaneous state resets. It is a paradigm shift, integrating what typically requires nginx, fpm, Node, and Redis into a single, optimized process.

This project demonstrates profound system design choices, including WebSocket support, microservice isolation, and even cluster replication, all from a pure PHP codebase. It directly tackles the performance bottlenecks many PHP developers face.

This is an eye-opening example of what is possible with innovative system architecture.
