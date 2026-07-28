---
authors:
- chadfowler
comments: https://news.ycombinator.com/item?id=49062786
date: '2026-07-26'
depth_score: 7
hn_id: '49062786'
image: /infographics/69-hn-49062786.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-capacity-delegation
- catchup
- cryptographic-keys
- freeq
- hn
- multi-agent-systems
title: Delegating bounded AI capacity to agents requires token sharing
url: https://freeq.at/blog/share-the-tokens-not-the-api-key/
utility_score: 8
why_read: This post explains why directly sharing API keys is problematic for multi-agent
  systems. It introduces the concept of delegating bounded AI capacity using tokens
  for secure and controlled resource usage.
---

The emerging challenge of managing AI capacity and access in multi-agent workspaces is getting a novel solution: sharing tokens, not API keys. This article introduces a system where AI agents possess their own cryptographic keys, enabling fine-grained, auditable delegation of resources.

Instead of agents borrowing human credentials, they operate with scoped identities, similar to how human teammates are granted access. This design allows for controlled allocation of AI allowances, ensuring proper attribution, easy revocation, and precise control over agent spending.

For architects building LLM infrastructure and multi-agent systems, this provides a compelling paradigm shift in security and resource management. It moves beyond traditional permission flags to a more robust, identity-based approach crucial for scalable and trustworthy AI deployments.