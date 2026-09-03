---
authors:
- zozotk
comments: https://news.ycombinator.com/item?id=49528451
date: '2026-09-01'
depth_score: 8
hn_id: '49528451'
image: /infographics/61-hn-49528451.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- aether
- benchmarking
- block-storage
- catchup
- ceph-rbd
- cephfs
- fio
- hn
- shared-filesystem
- write-performance
title: Aether's shared filesystem commits writes faster than block storage
url: https://zozoo.io/aether-shared-filesystem-faster-than-block-storage/
utility_score: 8
why_read: This post reveals unexpected benchmarking results where a shared filesystem
  outperformed block storage in write commits. Readers will gain insight into specific
  performance characteristics of CephFS vs. Ceph RBD and how to approach storage evaluation.
---

You expect block storage to be faster than a shared filesystem, right? Think again when it comes to CephFS versus Ceph RBD. An in-depth benchmark reveals that CephFS actually commits writes 30 percent faster than RBD on the exact same cluster. This is a counter-intuitive but critical finding for anyone designing distributed storage solutions. 

This surprising result stems from how each system handles fsync operations and data journaling. CephFS leverages its metadata server (MDS) to optimize these operations, which can be more efficient than the block-level fsync handling of an underlying ext4 on RBD. Understanding these architectural nuances is key to selecting the right storage for your application's I/O patterns. 

Dive in to uncover the detailed benchmarks and learn how these differences manifest in real-world performance, empowering you to make better-informed decisions for your next-generation distributed systems.