---
title: Azure API connections suffer five full cross-tenant compromises
source: hn
url: https://binsec.no/posts/2026/10/one-root-case
date: '2026-10-05'
tags:
- api-connections
- azure-api-management
- azure-logic-apps
- catchup
- cloud-security
- cross-tenant-compromise
- hn
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49962506'
comments: https://news.ycombinator.com/item?id=49962506
why_read: Learn how architectural flaws and input validation edge cases in Azure API
  Connections enabled full cross-tenant backend access. It provides clear insight
  into the systemic risks of shared multi-tenant infrastructure.
authors:
- Binary Security AS
---

Multi-tenant cloud architectures rely on robust boundary isolation, yet subtle design flaws in centralized API broker layers can dismantle that trust completely. A deep dive into Azure Logic Apps and API Connections demonstrates how five distinct cross-tenant flaws allowed arbitrary access to backend services like Azure Key Vault and SQL databases across completely unrelated customer tenants.

The underlying mechanism stems from how the central API Management tier handles connector metadata and token exchange. Instead of enforcing rigid cryptographic isolation at the storage and dispatch layers, the architecture placed heavy reliance on input validation and path sanitization. When edge cases bypassed those parameter filters, requests could reference internal connection IDs belonging to other tenants without valid authorization.

Securing complex distributed systems requires defense in depth rather than perimeter validation alone. When building multi-tenant infrastructure, teams must ensure that authorization checks occur at the exact point of resource access, backed by cryptographically bound tenant identities that cannot be spoofed through shared proxy hops.
