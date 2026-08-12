---
authors:
- Yarden Porat
comments: https://news.ycombinator.com/item?id=49243046
date: '2026-08-10'
depth_score: 9
hn_id: '49243046'
image: /infographics/11-hn-49243046.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- cloudflare-code-mode
- cloudflare-workers
- hn
- memory-corruption
- sandbox-escape
- vulnerability-exploitation
- workerd-runtime
title: Critical vulnerabilities in Cloudflare workerd runtime enable sandbox escapes
url: https://research.checkpoint.com/2026/when-agentic-glue-melts/
utility_score: 8
why_read: Read this to understand how critical vulnerabilities were discovered and
  exploited in Cloudflare's workerd runtime, impacting Code Mode and Workers. It provides
  insight into sandbox-escape and cross-tenant exposure risks within a widely used
  cloud platform.
---

Cloudflare's workerd runtime, powering both Workers and the new AI-centric Code Mode, had critical vulnerabilities. Check Point Research uncovered five memory-corruption bugs that allowed sandbox escapes and cross-tenant exposure.

These were not high-level logic flaws but deep C++ bugs, exploiting the "glue" between JavaScript and the runtime. Two of these were rated critical by Cloudflare, impacting a platform processing millions of requests per second.

This research is a sharp reminder that even highly isolated environments, like those relying on V8 for sandboxing, are only as strong as their native code. For senior engineers building AI agent infrastructure or distributed systems, understanding these low-level exploits is vital for robust design. It is not just about the AI model, but the foundational systems.

Security vulnerabilities at the platform level have a broad blast radius.