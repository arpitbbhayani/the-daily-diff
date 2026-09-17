---
title: A 40-year-old kernel bug found at DEFCON 34
source: hn
url: https://yuvalino.com/how-can-you-not-be-romantic-about-unix-domain-sockets
date: '2026-09-15'
tags:
- catchup
- code-signing-bypass
- debugging
- defcon
- hn
- ios-sandbox
- kernel-bug
- multi-processing
- unix-domain-sockets
- virtual-machine
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49716008'
comments: https://news.ycombinator.com/item?id=49716008
why_read: Learn how a developer debugged an unexpected crash during a live demo at
  DEFCON 34, which led to the discovery of a 40-year-old kernel bug in UNIX domain
  sockets. This piece offers insights into complex iOS security challenges and custom
  virtual machine implementations for multi-processing.
authors:
- Yuval Hanoch Hirschenbein Sadde
---

A 40-year-old kernel bug, lurking in BSD Unix domain socket inode allocation, was recently uncovered live on stage at DEFCON 34. This is a story about how fundamental system components can harbor deep, subtle flaws for decades.

The bug manifested only on a freshly booted iOS device running a custom VM that overrides process creation for multi-processing. It highlights the incredible complexity of OS internals and how seemingly minor details in resource management, like inode allocation, can have profound impacts on system stability and security.

Understanding such long-standing issues improves your foundational knowledge of systems. This is a masterclass in debugging and deep dive into the hidden layers of the operating system that senior engineers can appreciate.
