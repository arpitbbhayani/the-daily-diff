---
title: AISLE's AI system uncovers curl CVEs missed by others
source: hn
url: https://aisle.com/blog/aisle-discovered-six-curl-cves-after-openai-and-anthropic-found-zero
date: '2026-09-02'
tags:
- ai-cybersecurity
- aisle
- catchup
- curl
- cve
- hn
- vulnerability-discovery
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49536114'
comments: https://news.ycombinator.com/item?id=49536114
why_read: This article demonstrates how AISLE's AI system successfully identified
  six CVEs in the widely-used curl software, outperforming OpenAI and Anthropic's
  systems. Readers will learn about the challenges of deep code auditing and the potential
  of advanced AI for vulnerability discovery.
authors:
- Stanislav Fort
---

It turns out that not all AI is created equal, especially when it comes to finding security vulnerabilities in battle-hardened codebases. A specialized AI system called AISLE just unearthed six new CVEs in curl, a project deployed in over 20 billion instances worldwide.

What makes this particularly striking is that leading general-purpose LLM systems from OpenAI and Anthropic had previously reviewed curl and reported zero findings. This highlights a crucial distinction: while general LLMs are powerful, specialized AI agents can significantly outperform them on specific, complex engineering tasks.

This finding is a game-changer for engineering practices and developer productivity. It suggests that integrating targeted, high-precision AI tools could dramatically improve code security and efficiency, pushing the boundaries of what automated auditing can achieve. Do not just throw a large language model at a problem; consider whether a custom-trained agent might be the real solution.
