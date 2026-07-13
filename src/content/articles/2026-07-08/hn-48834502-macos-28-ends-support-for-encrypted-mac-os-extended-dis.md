---
title: macOS 28 Ends Support for Encrypted Mac OS Extended Disks
source: hn
url: https://support.apple.com/en-us/125615
date: '2026-07-08'
tags:
- apfs
- catchup
- disk-encryption
- disk-utility
- hn
- mac-os-extended
- macos-28
score: 48
hn_id: '48834502'
comments: https://news.ycombinator.com/item?id=48834502
why_read: This document informs users about the deprecation of encrypted Mac OS Extended
  volumes in macOS 28 and later. Readers will learn how to check their disk format
  and the necessary steps to ensure compatibility.
authors:
- Lihh27
author: Lihh27
---

Big news for macOS users and system architects: macOS 28 is dropping support for encrypted HFS+ volumes. This means any existing encrypted Mac OS Extended disks will either need to be decrypted or entirely reformatted to APFS for future compatibility.

This is not just a minor update; it is a significant shift in core OS storage management. It highlights the ongoing evolution of file systems and the challenges of migrating large data sets when fundamental underlying technologies change.

For engineers, this underscores the importance of understanding file system capabilities and future-proofing data storage solutions. Proactive planning for such deprecations can save significant headaches and ensure data integrity across system upgrades.
