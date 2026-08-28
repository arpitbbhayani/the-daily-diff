---
title: macOS fork() causes high CPU due to os_log_preferences_refresh
source: hn
url: https://www.formal.ai/blog/dont-use-fork-macos/
date: '2026-08-26'
tags:
- catchup
- cpu-usage
- fork
- hn
- macos
- network-extension
- os-log-preferences-refresh
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49451493'
comments: https://news.ycombinator.com/item?id=49451493
why_read: This post explains a specific high CPU usage issue on macOS related to `fork()`
  and network extensions. Readers will learn about the `_os_log_preferences_refresh`
  function's role in this problem.
authors:
- Drew Gregory
---

Developers, beware: `fork()` on macOS is exhibiting extremely harmful behavior, causing child processes to spin with 98 percent CPU utilization. This is not a theoretical edge case; it is hitting applications that leverage Network Extensions and even `_pthread_atfork_child_handlers`.

The culprit is a combination of OS-level functions that get triggered unexpectedly in the post-fork child context, leading to persistent, high-cost cycles. The article provides a detailed call graph and reproducible code, unmasking why standard `fork()` usage can cripple performance on Apple's platform.

If you build system-level Go applications or interact with macOS networking, this deep dive is essential. You will learn specific debugging techniques and gain insights into subtle OS behaviors that could be silently degrading your application's performance.
