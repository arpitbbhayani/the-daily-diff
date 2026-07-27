---
authors:
- Jonathanfishner
comments: https://news.ycombinator.com/item?id=49023427
date: '2026-07-23'
depth_score: 7
hn_id: '49023427'
image: /infographics/08-hn-49023427.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-agents
- api-keys
- catchup
- credential-management
- github
- onecli
- security-gateway
title: OneCLI gateway secures AI agent access without exposing keys
url: https://github.com/onecli/onecli
utility_score: 9
why_read: Read this to understand how OneCLI provides a secure, centralized solution
  for managing API keys and credentials for AI agents. It explains how agents can
  access services without directly exposing sensitive information.
---

Deploying AI agents in production raises major security questions, especially around API key management. OneCLI tackles this head-on with an open-source credential gateway that ensures your agents never directly handle sensitive secrets.

This tool acts as a transparent proxy, injecting credentials only when an agent needs to call an external service. It is a critical piece of LLM infrastructure, centralizing authentication and drastically reducing the attack surface compared to embedding keys in agent code or environment variables.

For anyone building complex, multi-tool AI agents, this is a game-changer for secure and scalable deployments. It means fewer security headaches and more focus on agent capabilities.