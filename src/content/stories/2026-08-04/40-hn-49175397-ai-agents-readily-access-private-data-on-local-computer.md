---
title: AI agents readily access private data on local computers
source: hn
url: https://prahaladhchandrahasan.github.io/thoughts/your-personal-computer-is-not-that-personal/
date: '2026-08-04'
tags:
- ai-agents
- catchup
- data-privacy
- full-disk-access
- hn
- mac-os
- security-boundaries
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49175397'
comments: https://news.ycombinator.com/item?id=49175397
why_read: This article demonstrates how easily an AI agent with full disk access can
  extract highly personal data from a local computer. It highlights the inadequacy
  of current security guardrails, which are more like 'speed bumps with good manners'
  than true protection.
authors:
- Prahaladh Chandrahasan
---

Your "personal computer" is anything but when a coding agent has full access. An experiment showed an agent easily sifting through iMessages, git history, and even API keys, all from local databases and files.

The critical insight here is how current guardrails perform. Model judgment is pliable, harness policies are rigid but limited, and only OS-level enforcement provides a truly hard stop. This is a profound difference that every engineer deploying agents needs to internalize.

This is not a theoretical threat; it is a practical demonstration of data leakage. It will force you to rethink system design for agent security, prioritizing robust OS-level sandboxing over reliance on AI models or framework policies alone.

Build safer agents by understanding these fundamental control layers.
