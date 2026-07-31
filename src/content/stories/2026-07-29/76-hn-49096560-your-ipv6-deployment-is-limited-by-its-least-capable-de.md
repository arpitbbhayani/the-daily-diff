---
authors:
- spidee-spiro
comments: https://news.ycombinator.com/item?id=49096560
date: '2026-07-29'
depth_score: 8
hn_id: '49096560'
image: /infographics/76-hn-49096560.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- aws
- catchup
- cloud-architecture
- dependency-management
- eks
- hn
- ipv4-charges
- ipv6
- network-engineering
title: Your IPv6 deployment is limited by its least-capable dependency
url: https://kb.isp6.net/how-we-built-isp6-ipv6-first-eks/
utility_score: 9
why_read: This report details the current state of IPv6-first EKS deployments on AWS,
  explaining the financial incentives and the persistent challenges posed by IPv4
  dependencies. Readers will gain insights into which AWS services still require IPv4
  and their cost implications.
---

Deploying IPv6-first on AWS EKS is finally financially compelling due to new IPv4 charges, but it is far from a smooth ride. A recent field report highlights that you are only as IPv6 as your least capable dependency, often finding hidden IPv4 requirements in unexpected services.

This deep dive exposes specific AWS services that still force IPv4 reliance, like certain payment APIs or container registries. Understanding these limitations is crucial for platform engineers planning migrations, as it helps preempt integration headaches and budget for residual IPv4 costs.

The article offers actionable insights into what works, what does not, and how significant cost savings can be achieved by meticulously identifying and addressing these IPv4 drag-ons in your infrastructure. It is a pragmatic guide for navigating the complexities of modern cloud networking.