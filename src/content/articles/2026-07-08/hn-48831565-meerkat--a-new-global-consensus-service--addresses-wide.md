---
title: Meerkat, a New Global Consensus Service, Addresses Wide-Area Network Challenges
source: hn
url: https://blog.cloudflare.com/meerkat-introduction/
date: '2026-07-08'
tags:
- catchup
- cloudflare
- distributed-systems
- global-consensus
- hn
- meerkat
- quepaxa
- raft
- strong-consistency
- wide-area-networks
score: 256
hn_id: '48831565'
comments: https://news.ycombinator.com/item?id=48831565
why_read: This text introduces Meerkat, Cloudflare's new distributed consensus service,
  explaining its design to overcome the limitations of traditional algorithms like
  Raft in wide-area networks.
authors:
- James Larisch
- Bob Halley
- "Jo\xE3o Pedro Leite"
author: James Larisch
---

Cloudflare has introduced Meerkat, a new globally distributed consensus service, addressing a critical challenge in maintaining strong consistency across their 330+ global data centers. Meerkat leverages the QuePaxa algorithm, published in 2023.

Traditional consensus algorithms like Raft struggle in wide-area networks due to leader election reliance and timeout issues, which lead to availability incidents. Cloudflare's new approach specifically targets these unpredictable latencies.

QuePaxa helps Meerkat provide strong consistency guarantees while ensuring high availability, even when data centers or network links fail. This represents a significant advancement in building resilient distributed systems at a global scale.

Mastering global consensus is key for truly scalable infrastructure.
