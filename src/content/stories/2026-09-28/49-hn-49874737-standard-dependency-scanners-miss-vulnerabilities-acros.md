---
title: Standard dependency scanners miss vulnerabilities across MCP server boundaries
source: hn
url: https://anas-security-portfolio.vercel.app/google-mcp-ssrf.html
date: '2026-09-28'
tags:
- call-graph-analysis
- catchup
- cve-2026-14540
- hn
- model-context-protocol
- server-side-request-forgery
- software-composition-analysis
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49874737'
comments: https://news.ycombinator.com/item?id=49874737
why_read: Read this to understand why traditional dependency analysis tools fail to
  detect vulnerabilities across MCP transport boundaries. It explains the architectural
  shift required to model reachability when software boundaries are defined by JSON-RPC
  manifests rather than code-level call graphs.
authors:
- Anas Mohiuddin Syed
---

Traditional software composition analysis tools operate by building call graphs from application code down into third-party dependencies. When an application adopts the Model Context Protocol to grant Large Language Models database access, that static reachability model breaks completely.

Because Model Context Protocol servers communicate over JSON-RPC across standard input/output or HTTP boundaries, static analyzers see only message dispatch logic rather than direct function invocations. The invocation target is resolved dynamically through runtime manifests rather than compile-time linking.

This architectural disconnect allowed an 8.0 CVSS Server-Side Request Forgery vulnerability to slip past conventional security scanners in the official Google database toolbox. The underlying HTTP client lacked redirect validation, allowing manipulated prompts to trigger internal network requests through unvalidated path parameters.

Securing agentic tool layers requires verifying the two-sided schema boundary between client manifests and server implementations, rather than relying on legacy dependency trees.

Boundary protocols demand boundary-aware security models.
