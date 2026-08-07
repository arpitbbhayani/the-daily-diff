---
title: celld provides self-hosted distributed Durable Objects with explicit failure
  domains
source: hn
url: https://celld.dev/
date: '2026-08-05'
tags:
- catchup
- celld
- distributed-systems
- durable-objects
- failure-domain
- hn
- legibility
- self-hosting
- sqlite
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49183364'
comments: https://news.ycombinator.com/item?id=49183364
why_read: This article explains how celld enables self-hosted, distributed Durable
  Objects by using S3 and SQLite/LTX. Readers will learn how this approach provides
  explicit control over failure domains and improves the legibility of system failures.
authors:
- mirzap
---

This project proposes a fascinating alternative to traditional distributed consensus. Imagine building strongly consistent distributed objects without needing complex membership protocols or failure detectors. Celld achieves this by leveraging an S3 bucket as a coordinator for atomic ownership claims.

Each "cell" runs on its own VM, and its SQLite state is continuously shipped to S3 as LTX segments. Losing a node means another VM can acquire the lease and restore the cell in seconds. This shifts the failure domain explicitly to your own infrastructure and storage provider, making debugging failures much more transparent than with opaque vendor-managed services.

This approach offers a fresh perspective on distributed state management and high availability, making system design trade-offs more explicit and controllable.
