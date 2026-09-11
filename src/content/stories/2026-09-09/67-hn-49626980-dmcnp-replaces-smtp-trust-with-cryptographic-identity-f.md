---
title: DMCNP replaces SMTP trust with cryptographic identity for verifiable email
source: hn
url: https://dmcn.dev/
date: '2026-09-09'
tags:
- catchup
- cryptographic-identity
- decentralized-email
- dmcnp
- email-security
- end-to-end-encryption
- hn
- sender-authentication
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49626980'
comments: https://news.ycombinator.com/item?id=49626980
why_read: Read this to understand how the DMCNP protocol provides verifiable sender
  identity and end-to-end encryption for email, addressing fundamental security flaws
  of traditional SMTP.
authors:
- mertenvg
---

Traditional email's trust model is fundamentally broken, relying on best guesses and post-hoc spam filters. The DMCN Protocol offers a radical redesign: your email address becomes a cryptographic keypair, enabling end-to-end encryption and verifiable sender identity from the start.

This is a deep dive into distributed system design. Identity verification occurs through DNS records published by the domain itself, eliminating the need for a central authority or a server that can read your mail. Messages are sealed to the recipient's public key on your device.

For senior engineers, this protocol presents a fascinating case study in building trust into decentralized communication. It fundamentally changes how we think about identity and privacy in messaging, moving beyond patching SMTP's inherent weaknesses to creating a secure-by-design architecture.
