---
title: ESP32-S3 microcontrollers achieve website load balancing and failover
source: github
url: https://github.com/Novotarskyi/ivan-bohun
date: '2026-08-15'
tags:
- catchup
- embedded-systems
- esp32-s3
- failover
- github
- high-availability
- load-balancing
- self-hosting
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49307171'
comments: https://news.ycombinator.com/item?id=49307171
why_read: This text demonstrates an innovative, self-hosted web server architecture
  built on ESP32-S3 microcontrollers. Readers will learn about implementing robust
  load balancing, failover, and TLS termination without cloud services.
authors:
- Kyrylo Novotarskyi
---

Serving a website from a cluster of ESP32 microcontrollers on a shelf is not just a hack; it is a masterclass in distributed systems engineering. This project builds a custom load balancer with leader election and virtual-MAC failover on tiny hardware, achieving high availability without any cloud services.

The system ensures that if the active "blade" fails, another takes over the virtual MAC address in under four seconds, maintaining seamless service. This demonstrates fundamental principles of fault tolerance and distributed consensus in a highly resource-constrained environment.

It challenges conventional wisdom on web infrastructure, proving that innovative engineering can yield robust, resilient systems using unexpected components, and offers deep insights into hardware-level networking and system architecture.
