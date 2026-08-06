---
authors:
- Ying Li
- Arjun Rao
- Shradha Sehgal
comments: https://news.ycombinator.com/item?id=49146751
date: '2026-08-02'
depth_score: 8
hn_id: '49146751'
image: /infographics/30-hn-49146751.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- feature-engineering
- hn
- large-language-models
- llm-native-recommendation
- netflix-genrec
- recommendation-systems
title: Towards LLM-Native Recommendation at Netflix with GenRec
url: https://netflixtechblog.com/genrec-towards-llm-native-recommendation-at-netflix-f20be6f643e3
utility_score: 8
why_read: This post explains how Netflix developed GenRec, an LLM-backed recommendation
  ranker, to overcome the complexity of traditional systems and the limitations of
  general-purpose LLMs in recommendations.
---

Netflix is re-imagining recommendation systems with LLMs, moving beyond traditional feature engineering. Their GenRec system post-trains an internal foundation LLM specifically on Netflix data and objectives, a practical approach to productionizing AI.

This strategy helps tackle core challenges like over-recommending globally popular content, hallucinating out-of-catalog items, and ignoring business constraints, which off-the-shelf LLMs often struggle with. It also significantly reduces the complexity and cost of onboarding new content types or product surfaces compared to their legacy stack.

The shift to an LLM-native stack simplifies representing user histories and item metadata as text, capturing rich semantic relationships, and steering recommendations via natural language prompts. This offers a blueprint for how large enterprises can effectively adapt LLMs to complex, established systems.

It is a smart engineering move that prioritizes practical application and domain-specific tuning for real-world impact.