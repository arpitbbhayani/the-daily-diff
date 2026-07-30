---
authors:
- pradeep1177
comments: https://news.ycombinator.com/item?id=49090241
date: '2026-07-28'
depth_score: 7
hn_id: '49090241'
image: /infographics/66-github-49090241.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- catchup
- cli-agents
- data-masking
- egress-proxy
- github
- llm-security
- secret-management
title: Hamza masks secrets for CLI coding agents while preserving functionality
url: https://github.com/softcane/hamza
utility_score: 9
why_read: This introduces Hamza, an egress proxy that masks sensitive data like secrets
  and customer information before sending prompts to LLMs, allowing AI agents to work
  securely with confidential context. Readers will learn how to protect data when
  using CLI coding agents.
---

Using AI coding agents like Claude Code or Codex in production environments often hits a wall: how do you prevent them from seeing sensitive PII or secrets?

Hamza offers an elegant engineering solution. It acts as an egress proxy that masks detected secrets and customer data in prompts, replacing them with consistent placeholders. This means the agent can still follow references and maintain context without the actual sensitive values ever leaving your perimeter.

This is a critical piece of LLM infrastructure for any team wanting to adopt AI agents while maintaining strict data privacy. It solves a real-world blocker for developer productivity with applied AI.