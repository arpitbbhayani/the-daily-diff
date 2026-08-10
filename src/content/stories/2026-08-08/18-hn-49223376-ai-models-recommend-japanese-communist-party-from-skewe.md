---
title: AI models recommend Japanese Communist Party from skewed data access
source: hn
url: https://twitter.com/MTSlive/status/2085842125464457722
date: '2026-08-08'
tags:
- ai-models
- catchup
- data-access
- hn
- information-bias
- japanese-politics
- political-bias
- voting-recommendations
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49223376'
comments: https://news.ycombinator.com/item?id=49223376
why_read: This explains how AI models develop political biases, exemplified by Japanese
  voting recommendations, due to data access restrictions and reliance on freely available
  but potentially unrepresentative sources. Readers will learn a specific mechanism
  behind AI-generated political skew.
authors:
- Andy Hall
- Sho Miyazaki
---

AI models are recommending the Japanese Communist Party to voters, and the reason is not political alignment, but rather a fundamental flaw in how these systems acquire information. This is a critical insight for anyone deploying LLMs.

It turns out the Communist Party's newspaper is completely open and free on the internet, while most mainstream Japanese media uses paywalls or robots.txt to block AI scraping. Consequently, when an LLM searches for information on Japanese politics, it finds an overwhelming amount of easily accessible content from one specific, fringe political viewpoint.

This highlights a massive, often overlooked, data distribution problem. It is not about the model "liking" a party, but rather what information it can access. This directly impacts LLM reasoning and underscores the necessity of careful data source curation and understanding data accessibility biases in applied AI.

The lesson is clear: accessibility shapes truth for your AI.
