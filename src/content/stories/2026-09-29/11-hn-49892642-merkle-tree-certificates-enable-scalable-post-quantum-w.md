---
title: Merkle tree certificates enable scalable post-quantum Web PKI
source: hn
url: https://blog.cloudflare.com/pq-ca-with-mtcs/
date: '2026-09-29'
tags:
- catchup
- certificate-authority
- certificate-transparency
- hn
- merkle-tree-certificates
- post-quantum-cryptography
- web-pki
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49892642'
comments: https://news.ycombinator.com/item?id=49892642
why_read: Understand how Merkle Tree Certificates solve the performance bottlenecks
  of deploying post-quantum cryptography across Internet infrastructure.
authors:
- torutofu
image: /infographics/11-hn-49892642.jpg
---

Upgrading the global Web Public Key Infrastructure to post-quantum cryptography is not as simple as swapping in larger keys. Standard post-quantum signatures create massive certificate chains that drastically inflate TLS handshakes, threatening severe performance penalties across the internet.

Cloudflare is addressing this bottleneck by building a certificate authority based on Merkle Tree Certificates. Instead of sending bulky cryptographic signatures on every TLS handshake, servers supply a compact Merkle inclusion proof tied to a shared, transparent log root. This approach treats transparency as an intrinsic property rather than an auxiliary requirement.

By offloading verification weight into verifiable tree structures, TLS connection overhead stays minimal even when moving to quantum-resistant primitives. The initiative targets inclusion in the Chrome Quantum-Resistant Root Store by 2027 while keeping certificate issuance free.

Decoupling validation size from signature algorithm size is the exact architectural shift needed to make post-quantum encryption practical at internet scale.
