---
title: Git metadata solutions using CRDTs encounter shared design issues
source: hn
url: https://replicated.live/blog/meta
date: '2026-09-04'
tags:
- catchup
- convergent-evolution
- crdt
- git-metadata
- hn
- scm
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49566032'
comments: https://news.ycombinator.com/item?id=49566032
why_read: This article explores how different CRDT-based solutions for Git project
  metadata, like git-bug and Beagle, are converging in design and identifies three
  key shared issues, offering insights into their architectural challenges.
authors:
- gritzko
---

Storing project metadata like issues and labels in Git is notoriously difficult. But what if we used Conflict-free Replicated Data Types (CRDTs) to extend Git's core capabilities?

This article delves into how various projects, including git-bug, Radicle COBs, GitButler git-meta, and Beagle, are tackling this by embedding CRDT objects into Git's object database. It highlights the architectural implications of integrating these distributed data types, comparing op-based versus state-based CRDTs in a Git context.

Understanding these approaches provides valuable insights into building robust, eventually consistent systems for collaboration. You will learn about the convergent evolution of these designs and the inherent challenges of creating a non-idiomatic sub-store within Git.
