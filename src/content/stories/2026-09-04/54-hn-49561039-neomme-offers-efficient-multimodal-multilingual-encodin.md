---
title: NeoMME offers efficient multimodal multilingual encoding without separate vision
  towers
source: hn
url: https://huggingface.co/blog/Hcompany/neomme
date: '2026-09-04'
tags:
- bidirectional-transformer
- catchup
- hn
- masked-discrete-diffusion
- model-efficiency
- multilingual-encoder
- multimodal-encoder
- neomme
- visual-document-retrieval
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49561039'
comments: https://news.ycombinator.com/item?id=49561039
why_read: This article introduces NeoMME, a novel multimodal and multilingual encoder
  that uses a single bidirectional Transformer. Readers will learn about its efficient
  architecture, masked discrete-diffusion training objective, and significant improvements
  in throughput and storage for visual document retrieval.
authors:
- Tony Wu
- "Aur\xE9lien Lac"
---

NeoMME is changing the game for multimodal AI. Forget separate vision towers and complex causal language models; this new encoder family processes text and raw image patches with a single, bidirectional Transformer. It is trained from scratch with a masked discrete-diffusion objective.

This architectural simplification delivers serious performance gains. For visual document retrieval, NeoMME-Retriever boasts twice the throughput of competitors at matched image input sizes, encoding 51 pages per second.

It also slashes late-interaction index storage by 255x, from 1.5MB to just 6KB per page, using hierarchical token pooling and asymmetric quantization, all while retaining over 95% of baseline accuracy. This is a practical, efficient step forward for applied AI.
