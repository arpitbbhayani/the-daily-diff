---
title: Operating systems learned to wait efficiently with Epoll and Kqueue
source: hn
url: https://thecodinggopher.substack.com/p/epoll-and-kqueue-how-operating-systems
date: '2026-09-20'
tags:
- catchup
- efficient-waiting
- epoll
- hn
- i/o-multiplexing
- kqueue
- operating-systems
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49778467'
comments: https://news.ycombinator.com/item?id=49778467
why_read: Read this to understand how modern operating systems achieve efficient I/O
  waiting. You will learn about the mechanisms and benefits of epoll and kqueue for
  event notification.
authors:
- adletbalzhanov
---

Understanding how operating systems handle I/O efficiently is foundational for building high-performance systems. This article delves into epoll and kqueue, two mechanisms that revolutionized asynchronous I/O.

Before these, developers relied on approaches like select() and poll(), which scaled poorly with many connections due to their O(N) complexity in checking descriptors. Epoll and kqueue introduced event-driven, kernel-level mechanisms that notify applications only when I/O is ready, significantly reducing overhead.

These primitives are the bedrock for modern web servers, proxies, and many other scalable backend services. A deep dive into their internals teaches you why they are so effective and how to truly leverage them for concurrency.
