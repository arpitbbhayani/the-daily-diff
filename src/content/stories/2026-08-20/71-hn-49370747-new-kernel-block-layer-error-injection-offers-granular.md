---
title: New kernel block-layer error injection offers granular control for testing
source: hn
url: https://lwn.net/Articles/1086344/
date: '2026-08-20'
tags:
- block-layer-error-injection
- catchup
- debugfs
- fault-injection
- hn
- i/o-errors
- linux-kernel
- software-testing
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49370747'
comments: https://news.ycombinator.com/item?id=49370747
why_read: This article explains how a new patch series enhances Linux kernel block-layer
  error injection. Readers will understand the limitations of previous methods and
  the improved, granular control offered for testing hardware failures.
authors:
- Haris Iqbal
---

How do you test your storage code against every conceivable hardware failure? Simply waiting for disks to break is not a strategy.

LWN.net reports on a new Linux kernel patch series for block-layer error injection. Unlike previous methods, this new interface allows engineers to precisely select which operation fails, what status code is returned, and directly target a specific disk.

This level of granular fault injection is a game-changer for building and verifying truly resilient systems. It moves beyond generic error testing to enable comprehensive, targeted validation of storage reliability.
