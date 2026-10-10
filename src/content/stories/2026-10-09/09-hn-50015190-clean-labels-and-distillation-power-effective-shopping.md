---
title: Clean labels and distillation power effective shopping rerankers
source: hn
url: https://zoowork.ai/blog/relevance-is-not-preference-shopranker/
date: '2026-10-09'
tags:
- catchup
- distillation
- dpo
- hn
- on-policy-mining
- rerankers
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50015190'
comments: https://news.ycombinator.com/item?id=50015190
why_read: Read this to understand why clean labels and knowledge distillation matter
  more than raw compute when training specialized e-commerce rerankers. You will learn
  the practical failure modes of direct alignment and on-policy mining in domain-specific
  search.
authors:
- anna_1101
---

Standard text retrieval models excel at topical relevance, but production search systems care about preference. A customer searching for affordable apparel needs items matching both style and budget constraints, which standard embeddings often ignore.

The engineering team behind ZooWork-ShopRanker shared findings from training dedicated ranking models across sizes from 0.6 billion to 8 billion parameters. When tuning a cross-encoder scoring model, direct preference optimization simplifies into a standard pairwise logistic loss because the model emits scores directly without requiring a reference policy.

Their experiments also showed that on-policy negative mining hits a hard ceiling. Gold-label yield from hard pairs dropped sharply from 26 percent down to 6 percent because edge cases caused even frontier reasoning judges to tie. For smaller models, distilling scores from an aligned 8-billion-parameter teacher consistently outperformed direct alignment against raw human labels.

Clean labels and careful distillation beat raw parameter count when training production rankers.
