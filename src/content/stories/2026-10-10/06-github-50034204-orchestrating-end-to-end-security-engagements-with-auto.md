---
title: Orchestrating end to end security engagements with autonomous agents
source: github
url: https://github.com/VigilOSS/Vigil
date: '2026-10-10'
tags:
- catchup
- github
- incident-response
- kali-linux
- llm-agents
- offensive-security
- orchestration
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50034204'
comments: https://news.ycombinator.com/item?id=50034204
why_read: Discover how Vigil combines specialized LLM agents with a shared Kali runtime
  to automate end-to-end offensive engagements and incident response.
authors:
- VigilOSS
image: /infographics/06-github-50034204.jpg
---

Most multi-agent frameworks falter when executing long-running workflows because they keep state ephemeral in memory or rely on unstructured chat transcripts. When a sub-task fails or requires complex external tool calls, the entire context window collapses.

Vigil takes a noticeably more durable approach to multi-agent architectures. It couples an LLM orchestrator with a dedicated state database that tracks targets, requests, variants, and attack chains. Instead of running generic prompt loops, the system isolates execution inside a Kali Linux runtime container and dispatches domain-specific agents across staged phases.

Persisting every probe and variant directly into a structured database solves two perennial issues in production agents: context bloat and failure recovery. A disconnected run can resume precisely where it stopped because the operational state is independent of the model context window.

Treating agent runs as durable workflows backed by relational state rather than conversational history is the blueprint production agent systems need to survive.
