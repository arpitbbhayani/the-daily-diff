---
title: Fast Drilldown Dashboards from Single Parquet File in Browser
source: hn
url: https://www.hamiltonulmer.com/customer-dashboards-r2-hyparquet/
date: '2026-08-24'
tags:
- browser-analytics
- catchup
- data-cube
- hn
- hyparquet
- object-storage
- parquet
- range-queries
section: databases
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49416652'
comments: https://news.ycombinator.com/item?id=49416652
why_read: This post explores a novel, minimalist approach to building fast, customer-facing
  analytics dashboards. Readers will learn how to leverage object storage, Parquet
  files, and browser-based tools like Hyparquet to create drilldown dashboards without
  a dedicated database or query engine.
authors:
- Hamilton Ulmer
---

You can build fast, interactive drilldown dashboards without a traditional database or even a dedicated query engine. The secret weapon? Parquet files on object storage combined with a browser-based JavaScript reader like Hyparquet.

This approach leverages object storage for raw data and serves pre-aggregated Parquet data cubes. When a user drills down, Hyparquet performs efficient range scans directly in the browser, fetching only the necessary data slices.

This means you eliminate the complexity and cost of backend database infrastructure for analytics, leading to significantly simpler deployments and faster performance for customer-facing dashboards. It is a smart architectural trade-off that dramatically reduces your infrastructure footprint.
