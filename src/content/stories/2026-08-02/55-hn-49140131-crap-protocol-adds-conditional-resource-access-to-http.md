---
authors:
- Lord Ajax
comments: https://news.ycombinator.com/item?id=49140131
date: '2026-08-02'
depth_score: 8
hn_id: '49140131'
image: /infographics/55-hn-49140131.jpg
interest_score: 8
novelty_score: 9
section: systems
source: hn
tags:
- api-agents
- application-policy
- catchup
- challenge-response
- conditional-resource-access
- hn
- http-protocol
title: CRAP protocol adds conditional resource access to HTTP
url: https://ajaxdavis.dev/crap/
utility_score: 8
why_read: This introduces the Conditional Resource Access Protocol (CRAP), addressing
  HTTP's inability to 'ask questions' before fulfilling requests. Readers will understand
  how CRAP enables dynamic application policy enforcement for API interactions, especially
  with autonomous agents.
---

HTTP's standard responses - authenticate, refuse, or fulfill - fall short when AI agents interact with APIs. What if an API needs to ask a question before proceeding, not just reject a request?

The Conditional Resource Access Protocol (CRAP) is a fascinating new proposal to fill this gap. It introduces a 430 status code and a challenge-response mechanism, allowing servers to request additional, arbitrary application-level policy information from agents before processing a request. Think "What are you going to do with this data?" or "Who authorized this specific action?"

This is a genuinely novel approach to API design, directly addressing the complexities introduced by autonomous AI agents. For system designers working on agent-facing APIs, this protocol could be a game-changer, moving beyond ad-hoc solutions to a standardized way for agents to handle dynamic policy. It offers a structured way to manage access based on context, not just identity.