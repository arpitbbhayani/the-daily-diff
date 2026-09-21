---
title: Mati provides deterministic guardrails for AI coding agents
source: github
url: https://github.com/ioni-dev/mati
date: '2026-09-19'
tags:
- ai-agents
- catchup
- codebase-knowledge
- github
- gotchas
- guardrails
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49767823'
comments: https://news.ycombinator.com/item?id=49767823
why_read: Readers will learn about the inherent risk of AI agents 'fixing' nuanced
  code and discover mati, a system that uses confirmed 'gotchas' as guardrails to
  prevent bug reintroduction and preserve critical codebase knowledge.
authors:
- fennect
---

One of the biggest frustrations with AI coding agents is their tendency to "fix" something that was intentionally written a certain way, reintroducing old, known bugs. This project, "mati," directly addresses that with a local guardrail layer.

It acts as an enforcement mechanism, preventing agents from reading or editing code in ways that violate confirmed "gotchas" or historical knowledge. This is not passive memory; it actively gates agent actions at the hook level.

This is an indispensable tool for any team using AI agents for code modification. It ensures that hard-won lessons embedded in your codebase are never forgotten or overwritten by an overzealous AI.
