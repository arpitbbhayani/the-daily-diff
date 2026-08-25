---
title: Agentic AI in Smolbox shows browser-only execution was always possible
source: hn
url: https://remyhax.xyz/posts/smolbox/
date: '2026-08-23'
tags:
- agentic-ai
- ai-security
- browser-vm
- catchup
- hn
- llm-on-browser
- webassembly
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49407905'
comments: https://news.ycombinator.com/item?id=49407905
why_read: Readers will learn about Smolbox, a proof-of-concept demonstrating agentic
  AI running entirely client-side in a browser. It highlights the feasibility of such
  systems and critiques current AI security practices.
authors:
- Remy Hax
---

Running powerful agentic AI workflows entirely within a browser tab is no longer science fiction, thanks to projects like Smolbox. This system deploys a full x86_64 Linux VM sandbox, an LLM, and even tool calls, all powered by WebAssembly and WebGPU.

The core innovation here is eliminating server-side processing. Imagine a complete development environment or an AI agent executing complex tasks, with all its compute and data handling confined to your local browser. This approach offers significant privacy and security advantages, as sensitive information never leaves your device.

This is not merely a theoretical concept; it is a working proof-of-concept. It challenges the common assumption that powerful AI agents require robust backend infrastructure. Engineers can draw inspiration from this architecture to build more secure, private, and resilient client-side AI applications.

The future of agentic AI might be closer to the edge than we think.
