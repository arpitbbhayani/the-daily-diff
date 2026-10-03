---
title: Systems fail when tracking timestamps instead of causal dependencies
source: hn
url: https://artemandreenko.com/blog/there-is-no-now/
date: '2026-09-23'
tags:
- catchup
- causality
- concurrency
- distributed-systems
- hn
- state-synchronization
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49819966'
comments: https://news.ycombinator.com/item?id=49819966
why_read: Read this to understand why precise timestamps cannot replace causal dependency
  tracking in concurrent and distributed systems.
authors:
- Artem Andreenko
---

Distributed systems rarely fail because wall-clock time is imprecise. They fail because the system records when an event occurred while discarding what state the event actually depended on.

Consider an automated deployment pipeline where an agent generates version 17 of a change. An engineer reviews it, but before clicking approve, the agent produces version 18. The worker sees a fresh approval and ships version 18, deploying unreviewed code to production even though every timestamp was perfectly sequential.

Clock synchronization cannot fix this failure mode. True causality requires tracking explicit state dependencies rather than physical timestamps. When decoupling systems with queues or asynchronous workers, pass causal references instead of relying on chronological ordering.

Tracking state versions and explicit preconditions is the only way to ensure distributed actions remain coherent.
