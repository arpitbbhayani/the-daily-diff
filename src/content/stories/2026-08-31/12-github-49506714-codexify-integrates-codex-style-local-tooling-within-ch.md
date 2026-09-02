---
authors:
- devnoname120
comments: https://news.ycombinator.com/item?id=49506714
date: '2026-08-31'
depth_score: 8
hn_id: '49506714'
image: /infographics/12-github-49506714.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- chatgpt
- codexify
- github
- local-tooling
- mcp-bridge
- rust
- secure-mcp-tunnel
title: Codexify integrates Codex-style local tooling within ChatGPT
url: https://github.com/devnoname120/codexify
utility_score: 9
why_read: This tool enables ChatGPT to interact with your local machine, allowing
  it to read/write files, run commands, and perform Git operations. It shows how to
  expand ChatGPT's capabilities for coding and other tasks without using Codex API
  quotas.
---

Imagine giving ChatGPT direct control over your local machine's files, shell, and Git commands, all securely and without opening inbound ports. This open-source Rust project, Codexify, makes it a reality by integrating OpenAI's native Secure MCP Tunnel.

It acts as a local bridge server, built with Tokio and Axum, that enables ChatGPT to call tools on your machine. This is not just a theoretical concept; it is a practical implementation that fundamentally changes how you can deploy and use AI agents for complex, real-world tasks.

By leveraging OpenAI's tunneling, the system ensures that the local endpoint is protected with a random bearer token and only listens on 127.0.0.1. This design removes significant security hurdles and opens up a new realm for applied AI. This is solid engineering in action.