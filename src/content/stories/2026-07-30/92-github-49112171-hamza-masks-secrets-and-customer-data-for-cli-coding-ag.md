---
authors:
- softcane
comments: https://news.ycombinator.com/item?id=49112171
date: '2026-07-30'
depth_score: 8
hn_id: '49112171'
image: /infographics/92-github-49112171.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- cli-agents
- data-redaction
- egress-gate
- github
- hamza
- llm-security
- secret-masking
title: Hamza masks secrets and customer data for CLI coding agents
url: https://github.com/softcane/hamza
utility_score: 9
why_read: This document introduces Hamza, an egress gate that masks sensitive secrets
  and customer data within CLI coding agent prompts. Readers will learn how Hamza
  allows AI agents to operate securely with confidential information without exposing
  it to model providers.
---

When AI agents debug code or process data, they might inadvertently expose sensitive information like API keys or customer data to the LLM provider. Hamza is an egress proxy designed to prevent this by intelligently masking secrets and personal data from prompts. 

It works by replacing detected values with placeholders (e.g., `patient=<EMAIL_482191>`) while ensuring the same value gets the same placeholder within a request. This means the model can still understand references and relationships without ever seeing the actual sensitive data. 

This is a practical and essential tool for any organization deploying coding agents in production, offering a robust layer of security and compliance for LLM interactions.