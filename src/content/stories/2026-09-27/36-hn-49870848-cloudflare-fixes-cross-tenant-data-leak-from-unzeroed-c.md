---
title: Cloudflare fixes cross-tenant data leak from unzeroed container storage
source: hn
url: https://www.bleepingcomputer.com/news/security/cloudflare-fixes-containers-cross-tenant-flaw-exposing-customer-data/
date: '2026-09-27'
tags:
- block-allocation
- catchup
- cloudflare-containers
- data-leak
- hn
- multi-tenancy
- thin-provisioning
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49870848'
comments: https://news.ycombinator.com/item?id=49870848
why_read: Read this to understand how unzeroed storage blocks in multi-tenant container
  infrastructure can expose sensitive customer data across workloads. You will learn
  the specific block allocation mechanics that led to cross-tenant data recovery.
authors:
- Bill Toulas
---

Multi-tenant container isolation often fails not at the kernel namespace layer, but in the storage layer. A recent vulnerability in Cloudflare Containers allowed workloads on shared physical hosts to recover residual data from other tenants. Researchers found cross-tenant data across 18 of 24 container placements, exposing raw SQLite database files, environment credentials, and directory tables.

The root cause was a subtle block allocation flaw in the underlying thin-provisioned storage pool. When a container root disk volume was deleted, its 64 KiB physical storage blocks returned to a shared pool without being zeroed out. When a new container wrote a small 4 KiB payload, the storage subsystem allocated a reused 64 KiB block but only overwrote the first 4 KiB, leaving the remaining 60 KiB of previous customer data completely readable.

Building secure multi-tenant infrastructure requires zero-trust storage boundaries. You cannot rely on lazy zeroing or partial block overwrites when sharing physical block devices among untrusted workloads.
