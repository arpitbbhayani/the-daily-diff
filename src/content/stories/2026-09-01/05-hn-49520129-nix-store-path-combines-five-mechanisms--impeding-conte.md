---
title: Nix Store Path Combines Five Mechanisms, Impeding Content Addressing
source: hn
url: https://nrd.sh/blog/store-was-never-the-point.html
date: '2026-09-01'
tags:
- build-time-binding
- catchup
- closure-discovery
- co-installation
- content-addressing
- hash-embedding
- hn
- nix
- nix-store
- runtime-binding
- storage-key
section: engineering
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49520129'
comments: https://news.ycombinator.com/item?id=49520129
why_read: This post dissects the Nix store model, arguing its five-in-one mechanism
  is a critical flaw that prevents true content addressing. Readers will gain a deep
  understanding of Nix's limitations and how a simpler, more capable system could
  be built.
authors:
- ssernikk
---

Nix has undeniably brought groundbreaking ideas to software reproducibility, but its most iconic feature, the /nix/store path, is arguably its greatest flaw. It is not an insight, but a significant cost.

This design choice bundles five distinct mechanisms into one opaque trench coat, creating unnecessary complexity and, more critically, making true content addressing an impossibility. Many assume the /nix/store is what defines Nix's power, but this piece argues it fundamentally caps the model's potential.

Imagine a system that offers all of Nix's guarantees without the store's overhead, allowing upstream software to build unmodified. This article shows such a system is not only possible but largely exists in production today. This is a critical read for anyone deeply invested in reproducible builds or package management paradigms.
