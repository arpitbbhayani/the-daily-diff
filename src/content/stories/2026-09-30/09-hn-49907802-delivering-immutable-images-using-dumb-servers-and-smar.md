---
title: Delivering immutable images using dumb servers and smart clients
source: hn
url: https://amutable.com/blog/distributing-images-quarry
date: '2026-09-30'
tags:
- catchup
- hn
- immutable-images
- package-management
- quarry
- software-delivery
- static-hosting
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49907802'
comments: https://news.ycombinator.com/item?id=49907802
why_read: Learn how Quarry shifts complexity to smart clients and dumb static servers
  to enable cheap, highly mirrorable software delivery.
authors:
- Aleksa Sarai
image: /infographics/09-hn-49907802.jpg
---

Complex server-side package managers introduce state drift, complex dynamic API endpoints, and heavy operational overhead. Quarry takes the opposite approach for distributing immutable OS images by enforcing a dumb server, smart client architecture.

Instead of computing dynamic manifests on the fly, update payloads and signatures are served strictly as static blobs from inexpensive CDN storage. The smart logic moves entirely to the client, which handles granular cryptographic verification, integrity checks, and mirror resolution.

This shift simplifies edge caching, keeps egress infrastructure cheap, and prevents the package distributor from acting as a centralized certificate authority bottleneck.

Pushing state verification to the client transforms complex distribution infrastructure into simple, cache-friendly static file hosting.
