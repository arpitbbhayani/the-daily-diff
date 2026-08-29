---
title: Pure PHP web server offers 100x more traffic capacity
source: github
url: https://github.com/Qbix/webserver
date: '2026-08-27'
tags:
- catchup
- concurrency
- github
- memory-efficiency
- nginx-alternative
- performance-optimization
- php-web-server
- websockets
section: systems
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49470697'
comments: https://news.ycombinator.com/item?id=49470697
why_read: This post introduces Qbix Server, a pure PHP web server that claims to handle
  100x more concurrent traffic than nginx+php-fpm. Readers will learn about its architectural
  advantages and significant performance improvements for PHP applications, especially
  in terms of memory usage and throughput.
authors:
- EGreg
---

A new pure-PHP web server, Qbix webserver 1.0, is challenging the traditional Nginx+PHP-FPM stack by claiming it can handle 100 times more traffic at similar memory footprints. This is a bold claim that could redefine how PHP applications scale. 

The secret lies in its architecture: a single process leveraging Copy-On-Write (COW) persistent workers. This design choice dramatically slashes memory per worker from 30-60MB (duplicated) down to approximately 200KB (COW, measured), enabling up to 5,000 concurrent PHP processes with 1GB of RAM compared to just 24 for FPM. 

While throughput for a small number of workers is comparable, the efficiency gains become massive at scale, yielding a 7x throughput increase when comparing setups with equivalent memory. This is not just an incremental improvement; it is a fundamental rethinking of the PHP serving model, potentially offering a blueprint for more resource-efficient backend services.
