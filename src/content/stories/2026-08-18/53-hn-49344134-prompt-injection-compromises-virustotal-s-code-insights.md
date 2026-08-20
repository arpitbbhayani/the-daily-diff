---
authors:
- ropbear
comments: https://news.ycombinator.com/item?id=49344134
date: '2026-08-18'
depth_score: 8
hn_id: '49344134'
image: /infographics/53-hn-49344134.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- code-insights-api
- false-negatives
- false-positives
- google-ai-vrp
- hn
- llms
- malware-analysis
- powershell-obfuscation
- prompt-injection
- virustotal
title: Prompt injection compromises VirusTotal's Code Insights API analysis
url: https://exploiting.systems/posts/2026-08-08-prompt-injection-in-virustotals-code-insights-api
utility_score: 9
why_read: This article demonstrates how prompt injection can compromise AI-powered
  malware analysis, illustrating a critical vulnerability in systems relying on LLMs
  for security. It highlights the growing imbalance between offensive and defensive
  LLM applications.
---

Prompt injection is not just a theoretical concern; it is a critical vulnerability impacting production systems right now. A recent discovery shows how VirusTotal's Code Insights API, an AI analysis tool, can be manipulated.

Attackers can embed malicious pretext within comments of submitted code, forcing the LLM to alter its analysis results. This can lead to false negatives for malware or even false positives for benign code, compromising a vital security pipeline.

This incident highlights a deepening imbalance where LLMs are easier to exploit offensively than to defend. For any engineer building with LLMs, understanding these attack vectors is crucial for designing truly robust and secure AI systems.