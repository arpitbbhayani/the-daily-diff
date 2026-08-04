---
authors:
- Sergey Veletskiy
comments: https://news.ycombinator.com/item?id=49147311
date: '2026-08-02'
depth_score: 8
hn_id: '49147311'
image: /infographics/29-hn-49147311.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- clickhouse
- geosharding
- hn
- loghouse
- multicloud
- scaling
title: Scaling LogHouse to a quadrillion rows across three clouds
url: https://clickhouse.com/blog/a-quadrillion-rows-across-the-three-cloud-scaling-loghouse
utility_score: 8
why_read: Read this to understand how ClickHouse Cloud's internal logging platform,
  LogHouse, scaled to handle a quadrillion rows across multiple cloud providers. You
  will learn about the challenges of high-volume data ingestion and the effectiveness
  of geosharding as a solution.
---

Scaling a logging system to 1.59 quadrillion rows and 431 PiB across three major cloud providers is a monumental task. ClickHouse's engineering team details how they achieved this with their LogHouse platform, focusing on impressive architectural choices.

The core challenge was the write path, hitting peaks of 80 GiB/s and 190 million rows per second. Their solution involved aggressive geosharding, keeping writes local to regions to minimize cross-region egress costs and allow independent scaling. This approach enabled near-linear growth as demand increased.

This is not merely an incremental improvement; it is a battle-tested blueprint for managing truly massive, multi-cloud data ingestion and query loads. Anyone dealing with petabyte-scale analytics or distributed log aggregation will find the specific trade-offs and solutions invaluable for their own system design.

You will gain concrete strategies for optimizing write-heavy distributed databases.