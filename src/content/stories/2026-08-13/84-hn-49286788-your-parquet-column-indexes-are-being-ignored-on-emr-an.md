---
title: Your Parquet Column Indexes Are Being Ignored on EMR and Glue
source: hn
url: https://dustinsmith.info/blog/aws-parquet-column-index/
date: '2026-08-13'
tags:
- catchup
- column-indexes
- data-pruning
- emr
- glue
- hn
- parquet
- spark
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49286788'
comments: https://news.ycombinator.com/item?id=49286788
why_read: Readers will discover that AWS Spark runtimes on EMR and Glue ignore Parquet
  column indexes, leading to significantly less efficient data scanning. This article
  provides a detailed investigation and proof of this performance issue.
authors:
- Dustin Smith
---

If you are running Spark jobs on AWS EMR or Glue, a subtle performance pitfall might be silently hurting your data scans. Parquet column indexes, designed to accelerate queries by skipping data at a fine-grained level, appear to be ignored by the AWS Spark runtime's vectorized reader.

This means that even with perfectly clustered data, your queries might be scanning significantly more data than necessary. While row-group pruning still happens, the crucial page-level pruning offered by column indexes is missing in action, leading to scans that can be orders of magnitude less efficient than on stock Apache Spark.

The original investigation revealed that on EMR 7.13 and Glue 5.0, queries were scanning 93% of tables where only 10% should have been touched. This is a critical insight for anyone optimizing data pipelines on AWS, as it points to a platform-specific deviation from expected Parquet behavior.
