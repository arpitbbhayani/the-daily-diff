---
title: ProofRun provides local verification receipts for AI coding agents
source: github
url: https://github.com/yebiguo/ProofRun
date: '2026-08-16'
tags:
- ai-coding-agents
- catchup
- code-verification
- cryptographic-proof
- github
- testing
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49316605'
comments: https://news.ycombinator.com/item?id=49316605
why_read: This explains how ProofRun enables cryptographic verification of an AI coding
  agent's claims about test results. You will learn its mechanism for ensuring tests
  actually ran against the exact code.
authors:
- yebiguo
---

Do you trust your AI coding agent when it says "all tests pass"? Most agent frameworks let LLMs infer success, which often means they *think* tests should pass, not that they actually ran them on your latest code. This leads to silent failures and wasted developer time.

ProofRun tackles this head-on with a clever solution: it provides a local, cryptographically verifiable receipt for every check an agent runs. This is not about the agent being more honest; it is about making its claims auditable. You get concrete proof that a specific test suite was executed against a specific code version.

This open-source tool introduces a crucial layer of integrity for AI-driven development. It ensures that the "all clear" from your agent is backed by verifiable execution, making your agent workflows significantly more reliable and your development process more robust.
