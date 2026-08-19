---
title: How a Public MCP Storefront Closed an IdempotencyMissing Finding in a Day
source: hn
url: https://www.getnexum.dev/blog/nexum-004-fabian-williams
date: '2026-08-17'
tags:
- api-design
- catchup
- hn
- idempotency-missing
- mcp-spec
- mutating-operations
- nexum-004
- retry-behavior
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49329849'
comments: https://news.ycombinator.com/item?id=49329849
why_read: This case study details how a real-world IdempotencyMissing issue was discovered
  and fixed in an MCP storefront. It highlights the critical importance of idempotency
  keys in API design, particularly when dealing with default retry logic in client
  SDKs.
authors:
- Fabian Williams
---

Idempotency bugs are insidious, especially in distributed systems, but they take on a new criticality in the world of AI agents. A recent case study highlights how a production MCP-callable storefront had a duplicate-execution flaw, allowing agents to double-issue bundles and emails.

The core problem was a missing Idempotency-Key in the tool's inputSchema. What makes this particularly insightful is that existing runtime guards, like rate limits and cost ceilings, completely failed to catch it because they operate at a different layer than the logical operation's idempotence.

This is a sharp reminder that agent retries (often default in LLM SDKs) necessitate robust API design. Static analysis, even "by hand" in this case, proved invaluable in catching this systemic design flaw before it caused significant issues. A crucial lesson for anyone building agentic workflows.
