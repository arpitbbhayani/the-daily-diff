---
title: Transparency logs detect silent changes in public MCP servers
source: github
url: https://github.com/yassinht/mcp-transparency-log
date: '2026-10-05'
tags:
- catchup
- certificate-transparency
- github
- mcp
- merkle-tree
- security-auditing
- transparency-log
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49962605'
comments: https://news.ycombinator.com/item?id=49962605
why_read: Learn why publisher signatures fail to prevent malicious updates and how
  adversarial transparency logs verify public MCP server integrity over time.
authors:
- yassinht
---

Publisher signatures on tool definitions are not enough to secure LLM agent ecosystems. If a malicious operator changes a tool description from simple weather lookup to exfiltrating private conversation history, their signature still validates cleanly because they are the registered author.

The MCP Transparency Log solves this by applying the lessons of Certificate Transparency to Model Context Protocol servers. It continuously crawls public endpoints, recording exact tool payloads into an adversarial, append-only Merkle tree without needing operator cooperation.

For engineers wiring autonomous agents to external tools, this audit trail lets you detect stealthy schema updates and payload drifts across deployments. You can verify that the tool your agent executes today matches the exact schema you approved weeks ago.

Treating agent tooling as an adversarial interface is the only reliable way to harden production agent workflows.
