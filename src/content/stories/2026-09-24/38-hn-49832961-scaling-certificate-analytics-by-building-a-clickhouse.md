---
title: Scaling certificate analytics by building a ClickHouse data warehouse
source: hn
url: https://letsencrypt.org/2026/09/17/clickhouse.html
date: '2026-09-24'
tags:
- catchup
- certificate-issuance
- clickhouse
- data-warehouse
- hn
- infrastructure-scaling
- log-analysis
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49832961'
comments: https://news.ycombinator.com/item?id=49832961
why_read: Learn how Let's Encrypt transitioned from fragile log-parsing scripts to
  a self-hosted ClickHouse data warehouse to handle high-volume analytics efficiently.
authors:
- Lena Underwood
---

Running analytics directly against transactional databases or bloated SaaS log aggregators eventually breaks down at scale.

Let's Encrypt processes between six and ten million certificate issuances each day, generating massive log streams that quickly overwhelmed legacy parsing scripts and SaaS budgets. To solve this, the engineering team deployed a dedicated, self-hosted ClickHouse data warehouse across three bare-metal servers equipped with 32-core AMD EPYC processors, 384 gigabytes of memory, and 100 terabytes of raw NVMe storage.

Ingesting structured certificate telemetry directly into ClickHouse columnar storage allowed them to store one hundred days of full operational history while utilizing only fourteen percent of raw disk capacity. Columnar compression and vectorized execution turn expensive ad-hoc log parsing into sub-second aggregations.

Columnar data warehouses remain the most cost-effective architecture for massive log analytics.
