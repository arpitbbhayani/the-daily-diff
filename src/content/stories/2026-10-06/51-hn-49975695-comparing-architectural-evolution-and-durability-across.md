---
title: Comparing architectural evolution and durability across Dynamo database systems
source: hn
url: https://brooker.co.za/blog/2025/08/15/dynamo-dynamodb-dsql.html
date: '2026-10-06'
tags:
- aurora-dsql
- catchup
- consistent-hashing
- distributed-databases
- durability
- dynamo
- dynamodb
- hn
section: databases
is_news: false
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49975695'
comments: https://news.ycombinator.com/item?id=49975695
why_read: Read this to understand the architectural differences and durability mechanisms
  across Dynamo, DynamoDB, and Aurora DSQL. It offers deep insights into the design
  trade-offs made across generations of AWS distributed databases.
authors:
- Marc Brooker
---

Amazon Dynamo, DynamoDB, and Aurora DSQL share similar names and ancestry, but they make radically different architectural trade-offs to achieve durability and consistency. Marc Brooker breaks down how these three foundational storage engines evolved across nearly two decades of distributed systems design.

Classic Dynamo relied on decentralized consistent hashing with quorum-based replication across a ring of peer nodes. It sacrificed strict consistency to guarantee write availability under network partitions. In contrast, DynamoDB abandoned the peer-to-peer ring in favor of a partitioned architecture using Paxos leader-follower replication groups. This shift gave DynamoDB predictable single-digit millisecond latency while enforcing strict consistency and automated partition management.

Aurora DSQL pushes this evolution further by decoupling transactional computation from storage. It uses distributed commit logs and optimistic concurrency control to support distributed SQL transactions without requiring a centralized coordinator.

Understanding how these systems handle host failures and data replication reveals how AWS engineering shifted from decentralized eventual consistency toward strongly consistent, serverless primitives.
