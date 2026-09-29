---
title: Why Return replaced Ollama to enforce local only inference
source: hn
url: https://returneditor.ai/blog/not-a-setting-why-we-removed-ollama/
date: '2026-09-28'
tags:
- catchup
- data-privacy
- hn
- local-inference
- ollama
- security-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49882932'
comments: https://news.ycombinator.com/item?id=49882932
why_read: Understand why architectural isolation provides stronger privacy guarantees
  than configuration toggles for sensitive AI document analysis.
authors:
- michall9k
---

When building AI products for strictly regulated domains like legal tech, the guarantee you provide to security auditors matters more than the convenience of your runtime. There is a fundamental architectural divide between claiming a feature is turned off in software and proving that the binary physically cannot make outbound network calls.

The team at Return had to redesign their local inference stack after upstream changes in Ollama introduced transparent hybrid cloud capabilities. Even though cloud offloading was strictly opt-in and configurable via environment variables, security reviewers could no longer verify isolation solely through network capture invariants.

To maintain auditability, they moved from high-level runtime daemons to tightly bounded inference engines that have no networking capabilities compiled into the process. The core takeaway for backend architects is that verifiable isolation at the process boundary beats configuration-driven privacy controls every single time.
