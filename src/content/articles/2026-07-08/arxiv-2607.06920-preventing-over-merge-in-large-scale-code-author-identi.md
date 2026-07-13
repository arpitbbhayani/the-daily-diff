---
title: Preventing Over-Merge in Large-Scale Code Author Identity Resolution
source: arxiv
url: http://arxiv.org/abs/2607.06920v1
date: '2026-07-08'
tags:
- arxiv
- author-identity-aliasing
- betweenness-cut
- catchup
- cs.SE
- data-scalability
- mega-clusters
- over-merge-problem
- per-edge-classifier
- world-of-code
arxiv_id: '2607.06920'
categories: cs.SE
why_read: This text details a methodology for resolving author identities at extreme
  scale, tackling the complex 'over-merge' problem with a hybrid graph and machine
  learning approach. It offers valuable lessons on building robust data systems and
  maintaining data quality in massive, distributed code repositories.
authors:
- Audris Mockus
---

Canonicalizing author identities across billions of commits is a monumental task, and the "World of Code" dataset with its 107 million distinct author strings proves it. The core problem is not missed merges, but over-merging, where bots or shared accounts create "mega-clusters" of unrelated identities.
A new methodology tackles this by employing a betweenness cut over the exact union graph, combined with a per-edge classifier trained on 2.6 million GitHub no-reply identifiers. This sophisticated approach filters dormant cross-project shingle groups.
The largest cluster, which previously spanned millions, was reduced to under 7,000 members while gold recall increased from 0.44 to 0.70. This demonstrates the power of combining structural analysis with machine learning for robust identity resolution at an unprecedented scale.
