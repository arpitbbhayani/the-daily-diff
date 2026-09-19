---
title: Nerdlog provides a simple, fast alternative for querying logs
source: hn
url: https://dmitryfrank.com/projects/nerdlog/article
date: '2026-09-17'
tags:
- catchup
- distributed-systems
- graylog
- hn
- log-management
- log-querying
- nerdlog
- performance
- splunk
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49745933'
comments: https://news.ycombinator.com/item?id=49745933
why_read: This article details the frustrations with complex and slow log management
  solutions like Graylog and Splunk, presenting Nerdlog as a simple, high-performance
  alternative for querying millions of log messages.
authors:
- Dmitry Frank
---

Frustrated with slow logging tools like Splunk, one engineer decided to build their own alternative: Nerdlog. This is a deep dive into the design and implementation choices for handling millions of log messages per hour.

The article breaks down agent scripts, log source management, and crucially, efficient filtering methods. It explores different indexing strategies, like line number and byte offset indexes, to achieve fast time-range queries on raw log files.

This is an invaluable read for anyone struggling with logging performance or considering building custom observability tools. You will gain concrete insights into the trade-offs involved in designing a scalable and performant logging system.
