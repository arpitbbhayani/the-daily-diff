---
title: PyPI's infrastructure and costs are managed using AWS and Fastly caching
source: hn
url: https://pyfound.blogspot.com/2026/08/how-aws-powers-pypi-and-psf.html
date: '2026-08-19'
tags:
- aws
- catchup
- cdn
- cost-management
- fastly
- hn
- infrastructure
- pypi
- python-software-foundation
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49361313'
comments: https://news.ycombinator.com/item?id=49361313
why_read: This article details how the Python Software Foundation supports PyPI's
  massive scale and manages infrastructure costs by combining AWS services with Fastly's
  edge caching and AWS Open Source Credits. Readers will gain insight into architectural
  decisions for high-traffic open-source projects.
authors:
- Jacob Coffee
---

PyPI, the Python Package Index, handles over six billion requests daily, with package egress reaching 10 petabytes per day. What does it take to run an open-source platform at this astronomical scale? It is a masterclass in distributed systems architecture.

Crucially, nearly 99% of this traffic is served at the edge by Fastly, dramatically reducing the load on their AWS origin. The remaining 1% hits an AWS backend featuring EC2 (mostly Graviton), RDS for PostgreSQL, and OpenSearch, all managed efficiently through AWS Open Source Credits.

This breakdown offers concrete insights into designing highly scalable, cost-optimized systems for immense traffic, using a real-world example that impacts millions of developers.
