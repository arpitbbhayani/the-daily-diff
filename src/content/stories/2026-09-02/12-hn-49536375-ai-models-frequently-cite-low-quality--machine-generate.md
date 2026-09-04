---
title: AI models frequently cite low-quality, machine-generated web pages
source: hn
url: https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/
date: '2026-09-02'
tags:
- ai-grounding
- catchup
- citation-quality
- hn
- low-quality-domains
- machine-generated-content
- perplexity-ai
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49536375'
comments: https://news.ycombinator.com/item?id=49536375
why_read: This text reveals a significant issue with AI model grounding, specifically
  how Perplexity AI frequently cites low-quality, machine-generated websites. Readers
  will learn about the prevalence of such citations and their implications for AI
  reliability.
authors:
- jakobgreenfeld
---

Large language models, even those with "grounding" mechanisms, are consistently citing machine-generated content farms. New research reveals Perplexity models are frequently pointing to sites that churn out hundreds of thousands of "best software" pages, many ranking outside the top million domains.

This means your AI systems could be pulling from highly unreliable, algorithmically created sources. The study found nearly 60 percent of citations went to domains ranked worse than #100,000, with over 23 percent not in the top million at all.

For anyone building RAG or web-grounded AI applications, this is a wake-up call. It is not just about having more context; it is about having quality context. You need robust source filtering and verification to prevent your AI from hallucinating on garbage data.
