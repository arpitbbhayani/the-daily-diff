---
title: DynamoDB restore times are highly unpredictable
source: hn
url: https://www.thisandthat.chat/blog/how-long-a-dynamodb-restore-takes/
date: '2026-09-15'
tags:
- aws
- catchup
- data-restore
- dynamodb
- empirical-study
- hn
- performance-variability
- recovery-plan
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49711255'
comments: https://news.ycombinator.com/item?id=49711255
why_read: This article provides empirical data on DynamoDB point-in-time restore times,
  exposing significant unpredictability and discrepancies with AWS documentation.
  Readers will learn that restore times can be much longer than expected and are highly
  variable, which is crucial for robust recovery planning.
authors:
- Jeff Reynar
---

Planning DynamoDB disaster recovery? Do not trust generic documentation. A team ran 65 Point-in-Time Recovery (PITR) restores and found significant unpredictability and contradictions with AWS's published guidance.

For example, the 20-minute minimum restore time quoted by AWS was wrong by a factor of five in their tests. Even more surprisingly, excluding secondary indexes, often recommended to speed up restores, actually made recovery six to nine times slower for their workloads.

This empirical research provides critical, actionable data for anyone relying on DynamoDB. It underscores the importance of validating cloud vendor claims and building your recovery plans based on real-world testing. Your RTO might be much longer than you think.
