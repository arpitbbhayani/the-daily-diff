---
authors:
- yashmahajan10
comments: https://news.ycombinator.com/item?id=49113543
date: '2026-07-30'
depth_score: 8
hn_id: '49113543'
image: /infographics/39-github-49113543.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- data-privacy-guarantee
- differential-privacy
- github
- llm-agents
- model-context-protocol
- sensitive-data
- untrusted-agents
title: 'Noisegate: A differential privacy gateway for untrusted LLM agents'
url: https://github.com/yashmahajan10/llm-differential-privacy-gateway
utility_score: 9
why_read: This describes Noisegate, a system that guarantees individual data privacy
  when untrusted LLM agents query sensitive datasets. Readers will learn about a practical
  approach to prevent data leakage in AI-driven data access, even from adversarial
  agents.
---

Deploying AI agents with sensitive data is a minefield. Noisegate offers a crucial solution: a differential privacy gateway that provides mathematical guarantees that no individual's record can leak, even if the agent is adversarial.

This is not just a theoretical concept. The system works with a Model Context Protocol (MCP) and enforces privacy through trusted code operating below the model. This design ensures that the safety mechanisms are robust and auditable, a necessity for any enterprise-grade AI deployment.

The project includes a runnable "attack gallery" to validate its security claims, offering concrete proof of its effectiveness. If you are building or deploying LLM agents that interact with confidential information, understanding and potentially integrating such a gateway is paramount for maintaining data integrity and compliance.

Serious privacy for serious AI applications.