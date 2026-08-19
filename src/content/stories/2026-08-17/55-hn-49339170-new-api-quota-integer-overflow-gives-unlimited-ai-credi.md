---
authors:
- slvnx
comments: https://news.ycombinator.com/item?id=49339170
date: '2026-08-17'
depth_score: 8
hn_id: '49339170'
image: /infographics/55-hn-49339170.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- access-control
- ai-credits
- api-quota
- billing
- catchup
- cve-2026-71479
- cwe-190
- cwe-682
- hn
- integer-overflow
- llm-gateway
- vulnerability
title: New API Quota Integer Overflow Gives Unlimited AI Credits
url: https://hellorecon.com/blog/cve-2026-71479-new-api-quota-integer-overflow
utility_score: 9
why_read: This article precisely details CVE-2026-71479, an integer overflow vulnerability
  in the New API LLM gateway, explaining how it allowed users to obtain unlimited
  AI credits and the underlying calculation errors. Readers will gain a clear understanding
  of this specific security flaw and its mechanistic implications.
---

An integer overflow vulnerability just turned a $0.10 balance into $16.9 trillion. This was not some esoteric bug but a fundamental engineering error in an OpenAI-compatible LLM gateway called "New API."

The root cause was a lack of input validation. User-controlled quantity fields, like `imageN` for image generation, were read directly into `uint` without any upper bound. When a large enough value was supplied, the 64-bit integer arithmetic overflowed, resulting in a negative charge that acted as an immense credit.

This highlights a crucial lesson: never trust user input, especially when it directly influences financial calculations or resource consumption. Even with robust types, unbounded input can lead to catastrophic logical errors.

It is a stark reminder that basic defensive programming practices remain paramount, especially in high-stakes API systems.