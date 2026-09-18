---
title: Vortex is one format for any shape of data, fast and small
source: hn
url: https://spiraldb.com/blog/vortex-one-format-for-any-shape
date: '2026-09-16'
tags:
- apache-arrow
- catchup
- columnar-data-format
- complex-data
- data-formats
- extensibility
- hn
- vortex
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49731613'
comments: https://news.ycombinator.com/item?id=49731613
why_read: This text introduces Vortex, a new columnar data format designed to efficiently
  handle complex and varied data shapes. Readers will learn about the limitations
  of existing formats like Parquet and how Vortex offers an extensible, fast, and
  compact alternative.
authors:
- ConnorTsui20
---

Modern data formats struggle with complex data types such as high-dimensional embeddings or deeply nested JSON, often forcing engineers into awkward storage compromises.

Vortex, a new columnar data format, aims to solve this by providing a unified, extensible approach built in Rust and compatible with Apache Arrow. It is designed so the format adapts to your data, not the other way around, enabling efficient storage and querying of complex shapes.

This format offers a zero-copy design, which means faster data access and processing. It is a significant step forward for analytical databases and any system dealing with diverse, modern data, including LLM infrastructure where embedding storage is key.
