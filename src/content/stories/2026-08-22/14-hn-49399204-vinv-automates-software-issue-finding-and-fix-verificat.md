---
title: Vinv automates software issue finding and fix verification
source: hn
url: https://vinv.ai/
date: '2026-08-22'
tags:
- automated-testing
- catchup
- coding-agents
- hn
- issue-resolution
- open-source
- runtime-evidence
- vinv
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49399204'
comments: https://news.ycombinator.com/item?id=49399204
why_read: Read this to learn about Vinv, an open-source tool that acts as a runtime-evidence
  layer for coding agents, automating issue finding and fix verification. It explains
  how Vinv connects runtime traces to source code and uses acceptance tests to validate
  fixes.
authors:
- itsAnshul
---

VinvAI (Vibe Inverse) presents a compelling new paradigm for debugging and performance analysis, moving beyond traditional observability. This open-source tool runs your services, proactively identifies bugs and performance issues, and even verifies fixes without requiring any code changes. It directly links runtime traces to the problematic source code.

What makes VinvAI stand out is its sophisticated approach to leveraging AI. It feeds evidence to a coding agent for proposed fixes, then rigorously re-runs the code with acceptance tests the agent has not seen, ensuring the fix genuinely works. Furthermore, it uses Thompson sampling to intelligently manage the amount of runtime context given to the agent, recognizing that more data is not always better for effective problem-solving.

This fusion of deep runtime introspection, intelligent agent intervention, and stringent verification offers a powerful leap in developer productivity and system reliability. It is a tool that understands not just what happened, but why, and can prove the resolution.
