---
title: Cloudflare's 1.1.1.1 now validates post-quantum DNSSEC signatures
source: hn
url: https://blog.cloudflare.com/post-quantum-dnssec-1111/
date: '2026-09-10'
tags:
- catchup
- cloudflare
- dnssec
- hn
- ml-dsa-44
- post-quantum-cryptography
- quantum-threat
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49643281'
comments: https://news.ycombinator.com/item?id=49643281
why_read: This explains why post-quantum DNSSEC is crucial for future internet security
  and how Cloudflare is tackling the challenges of its large-scale implementation.
authors:
- HieronymusBosch
---

Cloudflare's 1.1.1.1 resolver now validates DNSSEC signatures using ML-DSA-44, a NIST-standardized post-quantum algorithm. This is a critical step towards securing the internet's naming infrastructure against future quantum attacks.

The main challenge? Post-quantum signatures are significantly larger. Each ML-DSA-44 signature is a hefty 2,420 bytes, often exceeding typical DNS-over-UDP limits. This requires careful engineering to ensure reliable delivery without breaking existing network assumptions and client software.

Engineers need to recognize the importance of early, large-scale testing for such foundational changes. The experience with post-quantum TLS showed that widespread client adoption takes years, and unforeseen bugs related to larger message sizes frequently emerge. Cloudflare is proactively addressing these system-level challenges.

This effort highlights the complexities of evolving core internet protocols to maintain long-term security.
