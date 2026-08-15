---
title: Excessive IO caused by systemd-journald
source: github
url: https://github.com/systemd/systemd/issues/40262
date: '2026-08-13'
tags:
- bug
- catchup
- excessive-io
- github
- logging
- systemd-journald
- xfs
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49290215'
comments: https://news.ycombinator.com/item?id=49290215
why_read: Read this to understand a specific bug where systemd-journald causes excessive
  disk I/O, particularly when logging to an XFS filesystem. It details the conditions
  and provides log examples for diagnosis.
authors:
- XANi
---

A single log line in systemd-journald can generate an astounding 49KB+ on ext4 and 110KB+ on btrfs of disk writes. This is not a typo; it is a serious performance issue that can cripple your system's I/O.

This GitHub issue uncovers a fundamental problem where basic logging operations are orders of magnitude more expensive than expected. It reveals how critical understanding low-level system interactions, especially with journaling filesystems, is for maintaining scalable and performant infrastructure.

You will gain insight into how underlying system components can unexpectedly inflate resource usage. This knowledge is invaluable for debugging obscure performance bottlenecks and making informed decisions about your logging infrastructure.

Do not underestimate the silent killers in your system.
