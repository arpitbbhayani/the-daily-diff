---
title: Verifying agent identity offline in sub-millisecond speeds with ANS
source: hn
url: https://www.godaddy.com/resources/news/dont-trust-verify-offline-sub-millisecond-agent-verification-with-ans
date: '2026-09-23'
tags:
- agent-name-service
- agent-verification
- catchup
- cryptographic-identity
- dpop
- hn
- mtls
- oauth-2-0
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49810933'
comments: https://news.ycombinator.com/item?id=49810933
why_read: Learn how the Agent Name Service enables fast, offline cryptographic verification
  for AI agents. It explains how decoupling identity, proof of possession, and authorization
  secures communication with minimal overhead.
authors:
- tmuhlestein
---

Securing AI agents requires treating identity, possession, and authorization as separate concerns. Agent Name Service (ANS) solves this problem by verifying agent identities cryptographically in both directions in under a millisecond, completely offline.

Instead of creating heavy centralized verification bottlenecks, ANS uses existing standards like mTLS or DPoP alongside OAuth 2.0. The entire handshake relies on only two additional HTTP headers, keeping network overhead minimal and performance predictable.

Revocation is managed through short-lived status tokens with a default one-hour time-to-live. This design prevents unauthorized or corrupted agent versions from staying active for months while waiting for long-lived certificates to expire.

Decoupling identity from permissions lets backend systems authenticate autonomous agents cleanly before processing any sensitive payloads.
