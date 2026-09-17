---
title: Namespace achieves instant container image loading via on-demand fetching
source: hn
url: https://namespace.so/blog/container-image-loading
date: '2026-09-15'
tags:
- bootable-disk
- catchup
- compute-surfaces
- container-image-loading
- hn
- latency-reduction
- oci-registry
- on-demand-fetching
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49713840'
comments: https://news.ycombinator.com/item?id=49713840
why_read: This explains how Namespace drastically reduced container image loading
  latency. Readers will learn a novel approach that transforms image loading from
  a full download into an instant mount-like operation, fetching data only as needed.
authors:
- anner_
---

Tired of slow container image loading blocking your CI/CD or devboxes? Namespace developed a clever technique to make container image loading near-instant, cutting latency from minutes to milliseconds. They achieved this by treating images not as downloads, but as bootable disks that mount instantly.

The core idea involves pre-baking each image into a bootable disk and replicating it across compute regions. On boot, the VM starts immediately, fetching pages only as their blocks are read. Any missing blocks trigger a background fetch rather than blocking the system.

This is a smart re-architecture of a fundamental distributed systems problem. It provides excellent insights into optimizing critical infrastructure components and improving overall developer productivity. Consider how on-demand fetching could transform other data-heavy operations.
