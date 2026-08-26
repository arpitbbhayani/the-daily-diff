---
title: Walgit provides a stateless Git server using object storage
source: github
url: https://github.com/tobi/walgit
date: '2026-08-24'
tags:
- catchup
- distributed-systems
- git-server
- github
- object-storage
- s3-compatible
- single-binary
- stateless
section: systems
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49420598'
comments: https://news.ycombinator.com/item?id=49420598
why_read: This describes Walgit, a unique Git server design that leverages object
  storage to achieve statelessness, high scalability, and simplified deployment with
  a single binary. Readers will learn how to build or understand a resilient Git hosting
  solution without traditional databases or complex state management.
authors:
- tobi
---

What if a Git server needed no database, no leader, and maintained no local state that mattered? Walgit reimagines Git infrastructure, operating as a single binary backed entirely by an S3-compatible object store.

This architecture handles smart HTTP fetch and push, Git LFS, and even bundle-uri clones, scaling effortlessly to repositories larger than the machine it runs on. Every Walgit instance acts as a disposable cache, with the object bucket as the singular, immutable source of truth.

This is a paradigm shift for anyone managing Git at scale. It offers unprecedented resilience and simplicity, radically reducing operational overhead and complexity for distributed version control systems. It is a truly elegant design for a notoriously complex service.
