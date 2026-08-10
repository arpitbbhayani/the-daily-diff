---
title: Livelymerge Object Model Uses Automerge as Program Heap
source: hn
url: https://www.inkandswitch.com/livelymerge/notebook/lm-03/
date: '2026-08-08'
tags:
- automerge
- catchup
- collaboration
- hn
- livelymerge
- object-model
- persistence
- program-heap
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49226397'
comments: https://news.ycombinator.com/item?id=49226397
why_read: This note introduces the Livelymerge project's object model, which uses
  an Automerge document as a program's heap. Readers will learn about the novel opportunities
  for persistence and collaboration this approach enables, alongside its key challenges.
authors:
- Alex Warth
- Dan Ingalls
- Peter Van Hardenberg
---

Imagine your program's entire heap being persistent and collaborative by default. Livelymerge is exploring just this: using an Automerge (CRDT) document as the foundational data store for a running program.

This offers fascinating opportunities for automatic persistence and seamless real-time collaboration, where every object modification is a CRDT operation. The article delves into the specific object model design required to make this paradigm a reality, tackling significant challenges like consistency in multi-user environments and performance at scale.

You will gain insight into a truly unique architectural choice for distributed applications, pushing the boundaries of how we think about shared state. This approach could redefine how persistent, collaborative software is engineered.
