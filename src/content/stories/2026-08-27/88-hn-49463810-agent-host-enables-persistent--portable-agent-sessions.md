---
authors:
- Rob Lourens
- Connor Peet
- Brigit Murtaugh
comments: https://news.ycombinator.com/item?id=49463810
date: '2026-08-27'
depth_score: 8
hn_id: '49463810'
image: /infographics/88-hn-49463810.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- agent-host
- agent-host-protocol
- agent-sessions
- catchup
- github-copilot-sdk
- hn
- vs-code
title: Agent Host enables persistent, portable agent sessions
url: https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
utility_score: 8
why_read: This post introduces the Agent Host and Agent Host Protocol, explaining
  how they enable AI agent sessions to be persistent and portable across different
  clients and environments. Readers will learn about its architecture and benefits
  for long-running agent tasks.
---

Building AI agents is one thing, but making them persistent and portable across environments is a whole different challenge. VS Code's new Agent Host and its open Agent Host Protocol (AHP) provide a solid architectural blueprint for tackling this.

The core idea is a self-contained process that owns agent sessions, allowing them to continue running even after you close the editor or switch machines. This is crucial for long-running, complex agent tasks where you cannot afford session loss.

The protocol ensures synchronization across different clients and supports various agent harnesses, which means you gain consistency and flexibility. For any senior engineer architecting agentic AI systems, understanding how to build such robust infrastructure is key to moving beyond prototypes.

This architecture provides a practical path to resilient and scalable agent deployments.