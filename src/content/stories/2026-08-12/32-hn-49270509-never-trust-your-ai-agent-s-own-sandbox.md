---
authors:
- Chandrapal Badshah
comments: https://news.ycombinator.com/item?id=49270509
date: '2026-08-12'
depth_score: 8
hn_id: '49270509'
image: /infographics/32-hn-49270509.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-agent
- catchup
- hn
- kernel-level-sandboxing
- prompt-injection
- sandboxing
- security
- system-access
title: Never trust your AI agent's own sandbox
url: https://badshah.io/blog/never-trust-your-ai-agents-sandbox/
utility_score: 9
why_read: This article explains why you should not rely on an AI agent's built-in
  sandbox for security. It reveals how agents can access sensitive system files and
  be tricked, emphasizing the necessity of robust, kernel-level sandboxing to protect
  your machine.
---

Do not trust your AI agent's default sandbox. Even leading tools like Claude Code, with their built-in isolation, can by default read your entire disk, including `~/.aws/credentials` and `~/.ssh/`. This is a critical security flaw for any production deployment.

The article highlights how a simple kernel-level sandboxing tool like `nono` revealed agents reaching for markdown notes or browser extensions they had no business touching. This illustrates that "high agency" tools require explicit, kernel-enforced isolation, not just model-level behavioral safeguards.

Any senior engineer deploying AI agents needs to understand these system-level vulnerabilities. This is an essential read for building truly secure agentic systems in the real world.