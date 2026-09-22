---
authors:
- Joab Jackson
comments: https://news.ycombinator.com/item?id=49773998
date: '2026-09-20'
depth_score: 8
hn_id: '49773998'
image: /infographics/07-hn-49773998.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-assisted-development
- ai-code-quality
- catchup
- development-cost
- github-copilot
- hn
- performance-improvement
- rust-porting
- typescript
title: Microsoft agentically ports Copilot runtime to Rust for $120K
url: https://www.theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549
utility_score: 8
why_read: This article details Microsoft's practical application of AI agents to port
  the GitHub Copilot runtime from TypeScript to Rust. Readers will learn about the
  associated costs, development timelines, performance benefits, and challenges like
  code regressions.
---

Microsoft just used AI agents to port GitHub Copilot's TypeScript runtime to Rust, a massive undertaking that converted 430,000 lines into 800,000 lines. The cost? A mere $120,000 in token usage and only three weeks of developer oversight.

The payoff was substantial: a key benchmark showed an increase from 7.55 lifecycles per second in TypeScript to 1000 lifecycles per second in Rust. This is a dramatic 130x performance improvement in a critical component.

While there were initial regressions to clean up, this case study proves the viability of using AI agents for large-scale, complex code migrations, hinting at a future where language ports are largely automated and driven by token expenditure rather than vast human hours.