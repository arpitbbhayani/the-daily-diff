---
title: Reddie automates finding and fixing LLM application vulnerabilities
source: github
url: https://github.com/irfadox/reddie
date: '2026-08-31'
tags:
- ai-red-teaming
- automated-patching
- catchup
- devsecops
- github
- github-pr
- llm-security
- vulnerability-management
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 9
hn_id: '49506058'
comments: https://news.ycombinator.com/item?id=49506058
why_read: This describes an autonomous DevSecOps tool for LLM security. You will learn
  how Reddie automatically discovers, tests, and patches LLM application vulnerabilities.
authors:
- Irfadox
---

Autonomous DevSecOps for LLMs has arrived with Reddie! This tool is not just finding vulnerabilities in your AI applications; it is fixing them too.

Reddie discovers LLM application weaknesses, turns them into isolated pytest reproduction tests, synthesizes robust prompt and guardrail patches, and then verifies these fixes in a sandbox. All of this happens automatically.

The real game changer? It then opens a GitHub Pull Request with the validated fix. This entire flow, from detection to a production-ready PR, is executed with a single command, dramatically streamlining the security posture of AI systems.

Engineers building AI agents and LLM-powered features will find this incredibly useful for integrating security directly into their CI/CD pipelines, saving countless hours on manual security reviews and patch development. It is a significant leap forward for developer productivity in the AI era.
