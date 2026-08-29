---
title: Physical replication improves Iceberg table throughput nearly tenfold
source: hn
url: https://www.prequel.co/blog/physical-replication-for-iceberg-tables/
date: '2026-08-27'
tags:
- catchup
- data-replication
- hn
- iceberg
- open-table-formats
- physical-replication
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49466282'
comments: https://news.ycombinator.com/item?id=49466282
why_read: This article details how a table-aware, partition-aware physical replication
  design for Iceberg tables led to nearly a 10x throughput improvement. Readers will
  understand the approach and its advantages over data federation for cross-cloud
  data sharing.
authors:
- Conor McCarter
---

Achieving 9x throughput improvements for cross-cloud data replication on Iceberg tables is not trivial, and this deep dive into Prequel's approach offers crucial insights. They opted for table-aware, partition-aware physical replication, a significant departure from standard logical methods or pure data federation.

The core idea here is to move beyond just metadata or logical changes and replicate the underlying data files in a highly optimized, parallel fashion, leveraging Iceberg's file structure awareness. This avoids the overheads of row-by-row logical replication and gives substantial gains in latency and throughput for large datasets.

Understanding the trade-offs between data federation, logical, and physical replication for modern data lake formats like Iceberg is essential for any senior engineer designing scalable data architectures. This post breaks down how they built a solution that makes these systems perform at their peak.
