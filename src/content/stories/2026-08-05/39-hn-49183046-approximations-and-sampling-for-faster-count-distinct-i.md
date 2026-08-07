---
authors:
- Elizabeth Garrett Christensen
comments: https://news.ycombinator.com/item?id=49183046
date: '2026-08-05'
depth_score: 8
hn_id: '49183046'
image: /infographics/39-hn-49183046.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- approximation
- catchup
- count-distinct
- hn
- large-datasets
- performance
- postgres
- sampling
title: Approximations and Sampling for Faster COUNT DISTINCT in Postgres
url: https://www.snowflake.com/en/blog/engineering/postgres-count-distinct-approximation/
utility_score: 9
why_read: Read this to learn how to significantly speed up slow COUNT DISTINCT queries
  in Postgres by using various approximation and sampling techniques. It provides
  practical comparisons of methods for different use cases and data sizes.
---

COUNT(DISTINCT) queries in Postgres can grind your database to a halt, especially on large tables. This article dives into practical solutions that often get overlooked: approximations and sampling. You can dramatically improve query performance by accepting an almost-right answer.

The author provides a hands-on guide to using features like TABLESAMPLE and probabilistic data structures such as HyperLogLog. They show concrete examples and benchmarks, revealing how you can reduce query times from seconds to milliseconds without sacrificing too much accuracy.

This is not about complex tuning; it is about smart trade-offs. Learn how to implement these techniques and transform your slow analytical queries into blazing-fast operations, directly applicable to your next performance optimization task.