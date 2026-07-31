---
authors:
- wunderwuzzi23
comments: https://news.ycombinator.com/item?id=49103398
date: '2026-07-29'
depth_score: 9
hn_id: '49103398'
image: /infographics/02-hn-49103398.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- consumer-copilot
- cve-2026-24299
- data-exfiltration
- delayed-tool-invocation
- exploits
- hn
- html-preview
- m365-copilot
- memory-hijacking
- persistence
- prompt-injection
- vulnerabilities
title: Unpacking a Chain of Vulnerabilities in Microsoft M365 Copilot
url: https://embracethered.com/blog/posts/2026/defcon-talk-copirate-365/
utility_score: 9
why_read: This writeup details a chain of vulnerabilities in Microsoft M365 Copilot
  and Consumer Copilot, including data exfiltration, tool invocation bypasses, and
  memory hijacking. Readers will gain a deep understanding of how these exploits work
  and how they can be combined for persistent access.
---

Exploiting modern AI agents goes far beyond simple prompt injection. This DEF CON analysis of Microsoft Copilot vulnerabilities, leading to CVE-2026-24299, unveils a sophisticated chain of exploits that fundamentally changes how we must think about AI system security.

The research details how attackers can leverage subtle features like HTML previews for covert data exfiltration, bypass controls with delayed tool invocation, and even hijack an LLM's long-term memory via prompt injection to establish persistent backdoors, dubbed 'SpAIware.' It is a masterclass in uncovering systemic weaknesses.

This is not just academic; it offers highly practical insights for designing robust AI agents. You will understand how core components like tool access and memory can be compromised and what mechanisms need hardening in your own applied AI systems.