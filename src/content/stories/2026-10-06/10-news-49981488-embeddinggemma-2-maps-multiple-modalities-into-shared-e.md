---
title: EmbeddingGemma 2 maps multiple modalities into shared embeddings
source: news
url: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
date: '2026-10-06'
tags:
- catchup
- code-search
- matryoshka-representation-learning
- multimodal-retrieval
- news
- rag
- vector-embeddings
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49981488'
comments: https://news.ycombinator.com/item?id=49981488
why_read: Read this to understand how EmbeddingGemma 2 uses a modular architecture
  and Matryoshka embeddings for efficient multimodal search across text, code, vision,
  and audio.
authors:
- Maarten Grootendorst
- Ian Ballantyne
image: /infographics/10-news-49981488.jpg
---

Multimodal retrieval in RAG systems usually incurs massive compute and vector storage costs. EmbeddingGemma 2 tackles this by introducing a compact sub-1B parameter architecture that projects text, code, images, audio, and video into a shared 768-dimensional space.

The standout architectural detail is its modularity. You can load only the modality encoders you need at runtime, scaling from 270 million parameters for text and code up to 740 million for full multimodal ingestion. All permutations map directly into the exact same vector space.

It also incorporates Matryoshka Representation Learning (MRL). This allows engineers to truncate embeddings from 768 dimensions down to 256 or 128 dimensions in vector databases, cutting storage footprints by up to 66 percent while preserving baseline retrieval accuracy.

Modular encoder deployment paired with dimension truncation makes local multimodal indexing practical for production agent pipelines.
