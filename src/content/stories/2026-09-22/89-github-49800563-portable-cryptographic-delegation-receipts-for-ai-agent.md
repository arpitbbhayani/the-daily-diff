---
title: Portable Cryptographic Delegation Receipts for AI Agent Actions
source: github
url: https://github.com/scopetrail/scopetrail
date: '2026-09-22'
tags:
- ai-agents
- catchup
- cryptographic-signature
- delegation-receipts
- github
- stateless-verification
- verifiable-credentials
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49800563'
comments: https://news.ycombinator.com/item?id=49800563
why_read: This text introduces Scopetrail, a system for generating cryptographically
  signed, portable delegation receipts for AI agents. Readers will learn how these
  receipts provide tamper-proof evidence of delegated authority and actions, enabling
  stateless verification.
authors:
- mrjimmy1
---

The rise of AI agents introduces a critical challenge: how do you audit what an agent did on your behalf, especially in multi-hop scenarios? ScopeTrail offers a compelling solution with cryptographically signed delegation receipts.

This library captures the full delegation context – who authorized, what was delegated, when, and what action was taken – and seals it into a signed, portable JSON-LD receipt. The key is stateless verification: any verifier can check the receipt without contacting the original issuer.

Leveraging Node.js's built-in crypto, Ed25519, and JCS, ScopeTrail provides a robust, zero-dependency mechanism. This is a game-changer for building trust and accountability into your agentic AI systems, turning vague "agent acted" into verifiable proof.
