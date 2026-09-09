---
title: Safely expose legacy SOAP/WSDL to AI agents as MCP servers
source: github
url: https://github.com/bvenkata/legacy2mcp
date: '2026-09-07'
tags:
- ai-agents
- audit-logging
- catchup
- github
- json-schema
- legacy-systems
- mcp-servers
- schema-validation
- soap
- wsdl
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49593857'
comments: https://news.ycombinator.com/item?id=49593857
why_read: This tool helps developers securely integrate legacy SOAP/WSDL systems with
  AI agents. You will learn how it automatically generates schema-validated, audit-logged
  MCP servers, eliminating manual adapter code and ensuring robust interaction.
authors:
- bvenkata
---

Integrating AI agents with legacy SOAP APIs often means manual adapter code and brittle schemas. legacy2mcp changes this entirely.

This project can point at any WSDL and automatically generate an MCP server. This server exposes fully typed, schema-validated, and audit-logged tools for your AI agents. Critical write operations are even excluded by default for safety.

No more hand-written adapters or out-of-sync schemas. It is a powerful example of applied AI solving a real-world enterprise integration challenge, offering a secure and reliable bridge to existing systems. This is how you empower AI agents in complex environments.
