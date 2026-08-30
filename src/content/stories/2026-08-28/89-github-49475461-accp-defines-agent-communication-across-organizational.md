---
title: ACCP defines agent communication across organizational boundaries using email
source: github
url: https://github.com/RupertCloud/Agentmail/blob/main/docs/accp/SPEC.md
date: '2026-08-28'
tags:
- accp
- agent-communication
- catchup
- email-protocol
- github
- interoperability
- mime
- software-agents
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49475461'
comments: https://news.ycombinator.com/item?id=49475461
why_read: This specification introduces ACCP, a protocol for autonomous software agents
  to exchange structured messages across organizational boundaries. Readers will learn
  how ACCP builds upon existing email standards to enable secure and defined agent-to-agent
  communication.
authors:
- amonte
---

Designing communication protocols for multi-agent systems is hard, especially across organizational boundaries. What if the solution was already in your inbox?

This proposal for the Agent Communication Context Protocol (ACCP) suggests using the existing, federated email system (RFC 5322 and MIME) as the transport layer. It adds the missing pieces agents need: machine-readable payloads, conversation correlation, declared intent, capability discovery, and loop control.

This is a surprisingly elegant approach to agent interoperability. By building on a ubiquitous, federated standard, ACCP sidesteps complex new infrastructure while enabling robust, secure agent-to-agent interactions. It acknowledges that a human should be able to read an agent's communication in an ordinary mail client, bridging the gap between automated systems and human oversight.

It is a clever example of re-purposing robust existing infrastructure for novel AI agent problems.
