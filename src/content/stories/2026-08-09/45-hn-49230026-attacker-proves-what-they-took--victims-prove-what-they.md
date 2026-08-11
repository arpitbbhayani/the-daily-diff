---
title: Attacker proves what they took, victims prove what they logged
source: hn
url: https://stillig.net/posts/prove-what-they-took/
date: '2026-08-09'
tags:
- catchup
- data-breach
- disclosure-asymmetry
- hn
- incident-response
- logging
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49230026'
comments: https://news.ycombinator.com/item?id=49230026
why_read: This article reveals the critical asymmetry in data breach disclosure, showing
  why robust logging is essential for organizations to counter attacker claims. Readers
  will understand the strategic importance of logging beyond regulatory compliance.
authors:
- Johannes Stillig
---

When a data breach occurs, an attacker possesses an undeniable advantage: they can prove exactly what data they stole, because they have it. As a defender, you only have one source of truth to counter their claims or understand the scope of impact: your logs.

This creates a profound asymmetry in incident response. Without thorough, immutable logging, your denials are just press releases, while the attacker's claims come with undeniable proof. It is not about perfect prevention, but about verifiable truth.

This article underscores why robust logging and audit trails are not just 'nice-to-haves' but foundational engineering practices. You will learn to think about designing systems where the ability to prove what happened, or did not happen, is built-in, directly informing your observability and incident readiness.
