---
title: Deterministic validation eliminates noise in automated vulnerability scanning
source: hn
url: https://blog.google/security/agentic-hacks-real-proofs-inside-googles-pagebreak-project/
date: '2026-09-29'
tags:
- ai-agents
- catchup
- cross-site-scripting
- deterministic-validation
- false-positives
- hn
- vulnerability-discovery
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49898384'
comments: https://news.ycombinator.com/item?id=49898384
why_read: Learn how Google's PageBreak project uses deterministic runtime validation
  to eliminate AI hallucinations during automated security audits. It offers a practical
  mental model for scaling agentic vulnerability discovery without overwhelming engineering
  teams with false positives.
authors:
- "Micha\u0142 Bentkowski"
---

Using LLMs for automated security auditing typically floods development teams with false positives and hallucinated flaws. Google Product Security addressed this bottleneck with PageBreak, an autonomous agent designed to verify web application vulnerabilities with near-zero noise.

Rather than relying purely on static pattern matching, PageBreak closes the loop with deterministic validation. When the agent identifies a potential Cross-Site Scripting (XSS) vulnerability, it autonomously executes and verifies the exploit inside a live target environment before filing a report.

This verification loop eliminated AI slop, allowing PageBreak to uncover more than 500 validated XSS vulnerabilities across Google infrastructure without overwhelming engineering teams with unverified hypotheses.

Autonomous agents deliver real value only when static reasoning is paired with deterministic sandbox execution.
