---
title: How a Linux system call travels to the kernel and its exceptions
source: hn
url: https://www.freecodecamp.org/news/how-a-system-call-actually-works-in-linux/
date: '2026-09-10'
tags:
- catchup
- clock-gettime
- hn
- kernel
- linux
- strace
- system-call
- userspace
- x86-64
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49650876'
comments: https://news.ycombinator.com/item?id=49650876
why_read: This article explains the intricate process of how a system call traverses
  from userspace to the Linux kernel and back. Readers will learn why certain functions,
  like clock_gettime, bypass the kernel entirely, gaining a deeper understanding of
  system call mechanics on x86-64.
authors:
- Chris Roy
---

Ever wondered what happens behind the scenes when your C program makes a system call on Linux? This deep dive breaks down the x86-64 system call mechanism, from userspace to kernel. 

You will trace the journey of a `write()` call, understanding the exact assembly instructions and kernel functions involved. It also reveals why some seemingly obvious system calls, like `clock_gettime()`, often do not even enter the kernel, bypassing significant overhead. 

This level of understanding is invaluable for anyone optimizing high-performance systems or diagnosing tricky low-level bugs. You will gain a solid grasp of fundamental OS interactions crucial for robust system design.
