---
title: NexusRun enables portable and secure AI agents for diverse environments
source: hn
url: https://nexusrun.dev/
date: '2026-08-19'
tags:
- agent-orchestration
- catchup
- declarative-agent-definition
- hn
- llm-security
- local-llm-execution
- offline-capabilities
- portable-ai-agents
- sandboxed-tools
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49362263'
comments: https://news.ycombinator.com/item?id=49362263
why_read: Read this to understand NexusRun, a system for creating and deploying portable,
  secure AI agents that operate locally, even on machines without network access or
  API keys. It explains how to define agents with tools and models in a single, auditable
  file, ensuring both functionality and security.
authors:
- lseidman1104
---

Building and deploying AI agents often hits a wall when it comes to portability and security. NexusRun is introducing a compelling new approach: truly portable AI units that run locally, without needing external network access or API keys.

This system defines agents through a single, readable nexus.yaml file that is kilobytes, not gigabytes, by pointing to models rather than containing them. Critically, it enables sandboxed tool servers with pinned dependencies, ensuring that each tool is confined by the kernel to explicitly allowed paths, enhancing security significantly.

For senior engineers, this addresses a major challenge: how to reliably deploy AI agents on machines you do not control, like laptops, mixed hardware racks, or internet-isolated kiosks. The ability to declare secrets without storing them directly in the artifact makes agents safer to commit and share. This is a practical blueprint for building more robust and deployable agentic systems.
