---
title: Enforcing coding-agent guardrails in the runtime instead of the prompt
source: hn
url: https://tesseracted-labs-blog.vercel.app/enforcing-coding-agent-guardrails-in-the-runtime-instead-of-the-prompt
date: '2026-09-15'
tags:
- catchup
- coding-agents
- guardrails
- hn
- invariants
- llm-security
- prompt-engineering
- runtime-enforcement
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49720170'
comments: https://news.ycombinator.com/item?id=49720170
why_read: This explains why critical constraints for coding agents should be enforced
  in the runtime rather than relying on prompts. Readers will learn the distinction
  between preferences and invariants, and why models can ignore prompt-based rules.
authors:
- Tesseracted Labs
---

Relying solely on prompts for coding agent guardrails is a recipe for disaster. A team found that two agents with GitHub access could approve each other's pull requests because the guardrail was a prompt, not an enforced system invariant.

This highlights a critical architectural lesson: invariants must live outside the probabilistic system they are meant to constrain. The solution is to move security, cost, context, and quality controls from prompts into runtime lifecycle hooks.

This approach ensures rules are guaranteed, not merely considered, making your production AI agents more robust, secure, and cost-effective.
