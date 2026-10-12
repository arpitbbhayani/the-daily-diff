---
title: Common replication assumptions underestimate data loss in large clusters
source: hn
url: https://martin.kleppmann.com/2017/01/26/data-loss-in-large-clusters.html
date: '2026-10-11'
tags:
- catchup
- data-durability
- disk-failure
- distributed-storage
- hn
- jbod
- replication-factor
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '50047093'
comments: https://news.ycombinator.com/item?id=50047093
why_read: Read this to understand why naive independence assumptions fail when calculating
  disk failure risks in distributed systems. You will gain a realistic mental model
  of how replication factors impact actual data durability.
authors:
- Martin Kleppmann
---

A standard three-way replication factor sounds nearly invulnerable until you calculate the combinatorial probability across a thousand-node storage cluster.

Common wisdom assumes that because the failure probability of three independent disks within a short window is astronomically small, your data is safe. That math only holds if each block of data is restricted to a fixed trio of disks. When a distributed storage system scatters chunks randomly across hundreds of nodes, any combination of three simultaneous disk failures anywhere in the cluster can trigger permanent data loss.

As cluster size grows, the number of distinct node triplets explodes combinatorially. In a cluster of one thousand disks, losing any three disks at once has an enormous chance of hitting at least one shared data block unless you constrain the replication topology.

To survive at scale, systems must use declustered replication or explicit copyset replication rather than random placement.

Topology design matters far more than simply bumping your replication factor.
