---
title: Deterministic tool provenance stops prompt injections where classifiers fail
source: github
url: https://github.com/Yehielamor/provenance-gate/blob/main/posts/01-provenance-vs-detection.en.md
date: '2026-09-27'
tags:
- agentdojo
- catchup
- github
- llm-security
- prompt-injection
- provenance-tracking
- tool-gateways
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49866732'
comments: https://news.ycombinator.com/item?id=49866732
why_read: Learn why deterministic data provenance tracking reliably stops prompt injection
  attacks on AI agents where statistical detection classifiers fall short.
authors:
- Yehiel Amor
---

Prompt injection defenses built on semantic classification models continue to suffer from catastrophic blind spots. When tested against obfuscation techniques like base64 encoding, Unicode tag characters, or foreign translations, classifiers such as Meta Prompt Guard frequently drop to zero percent detection while producing excessive false positives on benign requests.

A deterministic provenance gateway takes a fundamentally different architectural approach. Instead of attempting to parse or understand untrusted prompt text, the gateway tracks the exact origin of every value flowing into a tool call, such as destination account numbers, URLs, or monetary amounts. It enforces strict data-flow policies before allowing external side effects.

On the AgentDojo benchmark, this deterministic enforcement stopped 99.3 percent of 609 hijacked attacks. Because the mechanism inspects structural lineage rather than token patterns, its detection rate remained completely invariant against disguised inputs.

Securing autonomous AI agents requires deterministic access control boundaries around tool execution rather than probabilistic natural language filters.
