---
title: RonDB delivers 100 million key lookups per second with Python REST API
source: hn
url: https://www.rondb.com/post/the-process-to-reach-100m-key-lookups-per-second-with-rest-api-and-python-clients
date: '2026-09-15'
tags:
- aws
- catchup
- cost-efficiency
- hn
- key-lookups
- performance
- python-clients
- rest-api
- rondb
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49710003'
comments: https://news.ycombinator.com/item?id=49710003
why_read: Read this to understand how RonDB achieved over 100 million key lookups
  per second on AWS using Python and REST API, and learn about its significant cost
  advantages over DynamoDB.
authors:
- The RonDB Team
---

Pushing database performance boundaries to 100 million key lookups per second is a monumental engineering task, especially when using REST APIs and Python clients on AWS. The RonDB team achieved this by meticulously optimizing their system.

Their detailed breakdown reveals key learnings, including infrastructure choices, client batching strategies, and specific performance issues they resolved. They managed to deliver 104.5 million key lookups per second with five integer features per record, and 96.4 million with mixed features, pushing 125 Gbit per second of JSON data.

This accomplishment involved 6 data nodes, 36 REST API servers, and 22 clients, demonstrating a finely tuned distributed system. The article also provides concrete latency numbers, with average lookups at 1.93 milliseconds, and significantly, claims a 99.99995% lower cost compared to DynamoDB for this scale.

If you are designing high-throughput data systems, this is a masterclass in performance engineering.
