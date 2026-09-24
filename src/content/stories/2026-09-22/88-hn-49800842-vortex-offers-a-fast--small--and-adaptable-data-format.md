---
title: Vortex offers a fast, small, and adaptable data format
source: hn
url: https://spiraldb.com/blog/vortex-one-format-for-any-shape
date: '2026-09-22'
tags:
- apache-arrow
- catchup
- columnar-data
- complex-data
- data-formats
- extensibility
- hn
- vortex
- zero-copy
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49800842'
comments: https://news.ycombinator.com/item?id=49800842
why_read: This text explains the limitations of current columnar data formats when
  handling complex data and introduces Vortex, a new extensible format designed to
  accommodate any data shape efficiently.
authors:
- surprisetalk
---

Existing columnar data formats like Parquet are struggling with the explosion of complex data types like embeddings, images, and deeply nested JSON. They force data into rigid structures, leading to inefficient storage and querying.

Vortex, a new open-source columnar format built in Rust, offers a compelling solution. It is designed from the ground up to be extensible and zero-copy compatible with Apache Arrow, allowing it to adapt to any data shape while remaining fast and space-efficient.

This approach flips the script: instead of fitting your data to the format, the format fits your data. For any engineer dealing with modern data lakes or analytical systems, this is a significant architectural leap forward.
