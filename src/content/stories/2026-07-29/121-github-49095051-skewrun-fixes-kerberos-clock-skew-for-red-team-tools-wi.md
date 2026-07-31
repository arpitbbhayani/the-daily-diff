---
authors:
- JVBotelho
comments: https://news.ycombinator.com/item?id=49095051
date: '2026-07-29'
depth_score: 8
hn_id: '49095051'
image: /infographics/121-github-49095051-skewrun-fixes-kerberos-clock-skew-for-red-team-tools-wi.jpg
interest_score: 8
novelty_score: 8
section: systems
source: github
tags:
- active-directory
- catchup
- clock-skew
- github
- kerberos
- libfaketime
- red-teaming
- time-discovery
title: Skewrun fixes Kerberos clock skew for red team tools without root
url: https://github.com/JVBotelho/skewrun
utility_score: 7
why_read: Read this to understand how Skewrun addresses Kerberos clock skew errors
  for red teams, enabling them to execute tools like Impacket from desynchronized
  Linux machines without requiring root privileges.
---

Solving Kerberos clock skew issues in a distributed environment can be a pain, especially without root access. Skewrun introduces an ingenious, open-source approach that dynamically discovers the Domain Controller's time and then uses `libfaketime` (via `LD_PRELOAD`) to correct the clock skew on a per-process basis.

This means you can run tools that are sensitive to time synchronization from a desynchronized machine, tricking them into operating with the correct domain time. The elegance lies in its ability to achieve this at the application layer without requiring system-wide clock changes or elevated privileges.

It is a fantastic example of leveraging low-level system hooks to solve a complex distributed systems problem. This technique has implications far beyond red teaming, offering a blueprint for sophisticated process environment control.