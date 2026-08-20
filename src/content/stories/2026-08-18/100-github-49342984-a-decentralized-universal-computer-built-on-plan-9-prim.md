---
title: A decentralized universal computer built on Plan 9 primitives
source: github
url: https://github.com/Skills03/c9
date: '2026-08-18'
tags:
- catchup
- decentralized-computer
- filesystem-as-compute
- github
- go-programming-language
- namespaces
- plan-9
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49342984'
comments: https://news.ycombinator.com/item?id=49342984
why_read: This text introduces a decentralized universal computer model where folders
  represent machines, leveraging Plan 9's "everything is a file" philosophy. Readers
  will learn how a unified namespace simplifies distributed system interaction and
  resource management.
authors:
- RIshabh235
---

Imagine a distributed system where every folder is a computer and navigating your file system means traversing a network of machines. The 'c9' project brings this vision to life by building a decentralized universal computer, deeply inspired by Plan 9's 'everything is a file' philosophy.

This system, implemented in Go, uses 9P over TLS and per-user namespaces to create a unified view of compute resources. Commands like `cd /sanjeev` literally enter Sanjeev's machine namespace, and `/cpu/ctl` manages CPU quotas as a file. This is a radical re-imagining of distributed operating systems.

It allows for seamless job execution; your local workspace stages to a node before a job runs and syncs back afterwards, eliminating manual transfer steps. This design fundamentally abstracts away the network, making distributed computation feel local and integrated.

Exploring c9 offers profound insights into how we might design the next generation of resilient and highly transparent distributed computing environments.
