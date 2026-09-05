---
authors:
- eivanov89
comments: https://news.ycombinator.com/item?id=49549943
date: '2026-09-03'
depth_score: 9
hn_id: '49549943'
image: /infographics/54-hn-49549943.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- asynchronous-io
- catchup
- hn
- io-uring
- process-management
- resource-lifecycle
title: Io_uring I/O Can Outlive a Reaped Process
url: https://blog.ydb.tech/is-there-i-o-after-death-what-happens-to-io-uring-when-a-process-dies-92c65354873f
utility_score: 8
why_read: This explores the intricate behavior of io_uring operations, specifically
  how they can persist after their initiating process is reaped. Readers will gain
  insight into advanced resource management challenges and potential system stability
  implications.
---

If you are building high-performance I/O applications on Linux, you need to understand a critical, subtle detail about `io_uring`: its I/O operations can surprisingly outlive the process that initiated them. This is not always intuitive and can lead to serious resource management issues.

This deep dive explains how `io_uring`'s decoupled submission and completion phases mean that an I/O request, once submitted to the kernel, can continue executing even if the user-space process that submitted it has been reaped. This might result in completions to non-existent memory or zombie states.

This kernel behavior has profound implications for designing robust storage engines and distributed systems. Ignoring it could lead to subtle bugs, resource leaks, or unexpected crashes in high-load scenarios.