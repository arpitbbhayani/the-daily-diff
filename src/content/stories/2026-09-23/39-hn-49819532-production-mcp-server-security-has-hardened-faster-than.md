---
title: Production MCP server security has hardened faster than expected
source: hn
url: https://les-k.github.io/field-notes.html
date: '2026-09-23'
tags:
- catchup
- destructive-tools
- hn
- model-context-protocol
- path-traversal
- server-security
- tool-registration
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49819532'
comments: https://news.ycombinator.com/item?id=49819532
why_read: Read this to understand the practical security posture of real-world MCP
  servers based on empirical code review. You will learn why actual vulnerabilities
  are narrower and more specific than common fear-based narratives suggest.
authors:
- Leslie Kadenge
---

Model Context Protocol (MCP) servers are rapidly becoming the standard interface for connecting LLMs to production databases, cloud infrastructure, and internal tools. A recent source audit of 13 production MCP servers shows that the ecosystem has hardened significantly faster than many feared, but distinct failure modes still persist.

The real vulnerability surface is not arbitrary prompt injection, but weak enforcement of read-only boundaries and subtle path traversal bugs inside tool resolvers. Many servers declare a tool as read-only in metadata without enforcing immutable constraints at the database driver or transport layer.

Building secure MCP tools requires treating model arguments as completely untrusted input and enforcing access control inside the handler execution boundary rather than relying on schema descriptions.
