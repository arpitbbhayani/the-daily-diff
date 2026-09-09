---
title: brw provides semantic browser control for agents using stable references
source: hn
url: https://brw.donworks.co.uk
date: '2026-09-07'
tags:
- agent-automation
- catchup
- chrome-dev-tools-protocol
- hn
- mcp
- semantic-browser-control
- stable-references
- web-interaction
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49604261'
comments: https://news.ycombinator.com/item?id=49604261
why_read: This text introduces brw, a semantic browser control tool that enables agents
  to interact with the real web more efficiently. Readers will learn how brw utilizes
  stable references and real Chrome instances to overcome common limitations of other
  agent browsers.
authors:
- Revitt
---

Building AI agents that reliably interact with the web has been a challenge due to brittle CSS selectors and expensive pixel re-reading. A new open-source tool, Brw, offers a compelling alternative by providing semantic browser control through "stable refs" over a real Chrome instance.

Brw exposes a simple HTTP JSON API, allowing agents to act from persistent, semantic references (like `e17` in the example) instead of fragile selectors or screenshot analysis. This design dramatically cuts down on token usage and turns per task, making agentic web automation faster and more robust. Your agents get a clear observation after each action, knowing precisely what happened.

This is a significant step forward for applied AI. By bridging to your authenticated Chrome profile, Brw allows agents to navigate complex, logged-in dashboards, overcoming a major hurdle for many existing agentic browser solutions. If you are building web-interacting agents, this is a must-explore.
