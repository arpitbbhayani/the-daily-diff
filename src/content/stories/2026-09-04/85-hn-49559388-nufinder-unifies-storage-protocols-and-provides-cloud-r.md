---
title: nuFinder unifies storage protocols and provides cloud RAID capabilities
source: hn
url: https://nufinder.org/
date: '2026-09-04'
tags:
- catchup
- cloud-storage
- data-redundancy
- data-synchronization
- file-manager
- hn
- network-protocol
- raid-array
- s3-compatible-storage
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49559388'
comments: https://news.ycombinator.com/item?id=49559388
why_read: This document introduces nuFinder, a file manager that unifies access to
  local and diverse cloud storage providers. Readers will learn about its unique feature
  of creating self-healing RAID arrays across multiple, even mixed, cloud buckets,
  enhancing data resilience.
authors:
- LouisvilleGeek
---

Imagine building a self-healing, fault-tolerant storage array out of disparate S3-compatible buckets, even from different cloud providers. NuFinder has done just that, implementing real RAID 1, 5, and 6 capabilities directly within a macOS file manager.

This system design allows data to be striped and mirrored across multiple cheap object storage services, reconstructing data live from parity during degraded reads. The ability to mix providers freely—one member on AWS, another on Wasabi—showcases a highly flexible and robust approach to distributed storage.

This project is a masterclass in applying distributed systems principles to create novel, highly durable storage solutions, offering deep insights into fault-injection testing and data integrity across cloud boundaries.
