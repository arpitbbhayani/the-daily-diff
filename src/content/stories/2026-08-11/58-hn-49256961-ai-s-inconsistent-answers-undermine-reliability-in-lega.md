---
title: AI's inconsistent answers undermine reliability in legal proceedings
source: hn
url: https://stillig.net/posts/tamper-evident-llm-calls/
date: '2026-08-11'
tags:
- ai-reliability
- ai-variability
- catchup
- expert-witness
- hn
- legal-ai
- legal-disclosure
- reproducibility
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49256961'
comments: https://news.ycombinator.com/item?id=49256961
why_read: This article illuminates the critical problem of AI output variability and
  its profound implications, especially in sensitive legal scenarios. It challenges
  the instinct to seek simple reproducibility and emphasizes the necessity of disclosure
  and traceability when integrating AI into decision-making processes.
authors:
- Johannes Stillig
---

A judge ran the same LLM prompt three times and got three different answers. This scenario perfectly highlights a critical, often overlooked, problem in applied AI: the lack of standard for recording and auditing LLM calls for provenance.

This article dives deep into why true LLM reproducibility is often a red herring and what really matters for trust and accountability, especially in high-stakes environments. The author built a system to provide tamper-evident records of LLM interactions, capturing exactly what was sent and received.

This is invaluable for any engineer building on LLMs. You will gain insights into moving beyond naive reproducibility to practical auditability, ensuring you can always trace AI outputs back to their source, even when the model's internal state varies.
