---
authors:
- pmestha
comments: https://news.ycombinator.com/item?id=49351113
date: '2026-08-18'
depth_score: 8
hn_id: '49351113'
image: /infographics/47-hn-49351113.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- ai-agent-compromise
- catchup
- credential-theft
- hn
- keyv-worm
- npm-security
- slsa-provenance
- supply-chain-attack
title: Keyv worm rapidly compromised 400+ npm packages and targeted AI agents
url: https://installsafe.io/blog/the-keyv-worm-ate-400-npm-packages-in-90-minutes-check-if-youre-exposed/
utility_score: 9
why_read: Read this to understand a sophisticated npm supply chain attack that rapidly
  spread and targeted AI agent infrastructure. You will also learn how to check if
  your systems were compromised by this worm.
---

An alarming npm supply chain attack, dubbed the "keyv worm," rapidly compromised over 400 packages in just 90 minutes, demonstrating a concerning escalation in software supply chain vulnerabilities.

This self-replicating malware did not merely target generic credentials; it specifically sought out and exfiltrated AI agent configurations from platforms like Claude, OpenAI, Cursor, and Gemini.

The worm established persistence through novel methods, including Claude Code hooks and VS Code tasks, making detection and eradication challenging. A particularly insidious aspect was its ability to forge valid SLSA provenance attestations, meaning traditional "verified provenance" checks would not have flagged the malicious packages.

For any senior engineer deploying AI agents or relying on the npm ecosystem, understanding this attack is paramount. It is a stark reminder that even well-known caching libraries can become vectors for highly targeted, credential-stealing operations. Immediate checks for specific payload files and persistence artifacts are crucial.