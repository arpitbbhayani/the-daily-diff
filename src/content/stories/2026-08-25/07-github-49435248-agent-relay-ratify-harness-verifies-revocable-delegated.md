---
title: Agent Relay Ratify harness verifies revocable delegated authority offline
source: github
url: https://github.com/identities-ai/ratify-agent-relay-harness
date: '2026-08-25'
tags:
- agent-relay
- catchup
- delegated-authority
- github
- offline-verification
- ratify
- reproduction-harness
- revocable-authority
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49435248'
comments: https://news.ycombinator.com/item?id=49435248
why_read: This text introduces a reproduction harness for the Agent Relay x Ratify
  Phase 2 engagement, demonstrating how an open protocol like Ratify enables offline
  verification of revocable and bounded delegated authority. Readers will learn about
  a practical setup for testing delegated authority in multi-party systems.
authors:
- chuks
---

Enabling AI agents to collaborate across different companies presents a huge trust and security challenge. How do you delegate authority, ensure it is used correctly, and revoke it when necessary, all while maintaining verifiability?

The 'Agent Relay x Ratify' project offers a compelling solution. This GitHub repository provides a reproduction harness to demonstrate a cross-company AI agent handoff, where authority is granted narrowly, further narrowed on delegation, and even revoked mid-operation. The key is an open protocol for delegated authority that is bounded to a named resource, revocable in-flight, and verifiable offline.

This means a receiving party can independently check who authorized what, for how long, without needing live connections to the authorizing company. This level of auditability and control is paramount for deploying robust, multi-company AI agent workflows, moving beyond simple API calls to true autonomous collaboration with accountability.

This is not just theory; it is a practical blueprint for building trust in decentralized agent systems.
