---
title: Interactive Linux OOM handler pauses processes, prompts user for action
source: github
url: https://github.com/phiresky/linux-oom-psi-ask
date: '2026-08-20'
tags:
- catchup
- github
- interactive-memory-management
- linux-oom
- process-pausing
- psi-trigger
- userspace-tool
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49372387'
comments: https://news.ycombinator.com/item?id=49372387
why_read: This tool presents an alternative, interactive approach to Linux Out-Of-Memory
  (OOM) situations, allowing users to make informed decisions instead of automatic
  process termination. Readers will learn how it utilizes PSI triggers and process
  pausing for better memory management control.
authors:
- phiresky
---

The Linux OOM killer is notoriously aggressive and often unpredictable. What if you could intervene during an Out-Of-Memory event instead of just letting the kernel take over? A new tool, `psi-ask`, changes that paradigm.

Inspired by macOS, `psi-ask` acts as an interactive userspace OOM handler. When memory pressure builds, it intelligently pauses the top memory consumers and presents you with a dialog, showing pressure charts and allowing you to terminate specific processes or take other actions before the system spirals.

This is a deep dive into Linux internals, leveraging kernel Pressure Stall Information (PSI) and cgroup monitoring. For any engineer responsible for system stability or debugging elusive memory leaks, this offers a level of control and insight that has been sorely missing, making OOM situations far more manageable and debuggable.
