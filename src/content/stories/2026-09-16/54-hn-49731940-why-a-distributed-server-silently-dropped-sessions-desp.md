---
title: Why a distributed server silently dropped sessions despite green health checks
source: hn
url: https://datasignalslab.com/blog/my-mcp-server-dropped-one-call-in-four/
date: '2026-09-16'
tags:
- catchup
- distributed-requests
- health-check-design
- hn
- mcp-server
- session-management
- silent-failure
- stateful-sessions
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49731940'
comments: https://news.ycombinator.com/item?id=49731940
why_read: This article explains how a combination of stateful sessions and distributed
  request handling can lead to silent call drops in a server, even when standard health
  checks report everything is fine. Readers will learn the importance of designing
  health checks that truly validate end-to-end functionality in complex distributed
  systems.
authors:
- runvouch
---

Your "green" health checks might be lying to you. A recent incident revealed an MCP server dropping one in four calls, all while every health check passed with flying colors. The root cause? In-memory session state meeting a distributed request router.

The platform (Apify Standby) was routing requests for the same session across different process instances. A session created on Process A would then see its subsequent requests land on Process B, which, having no knowledge of that session, would correctly report "Session not found." The server returned a valid HTTP 200 JSON-RPC error, making it invisible to standard monitoring.

This is a potent reminder that stateless health checks are insufficient for stateful services in load-balanced environments. You must design session affinity or distributed state management from the outset, and ensure your monitoring probes the actual application state, not just basic liveness.
