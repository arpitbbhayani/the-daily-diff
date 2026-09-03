---
title: Tjommi's backend architecture evolved to handle complex price tracking
source: hn
url: https://helgesver.re/articles/how-i-built-tjommi
date: '2026-09-01'
tags:
- ai
- backend-architecture
- catchup
- claim-workflows
- data-model
- document-ingestion
- hn
- ocr
- price-tracking
- receipt-processing
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49527323'
comments: https://news.ycombinator.com/item?id=49527323
why_read: This article provides a detailed look into the evolving backend architecture
  of Tjommi, a price tracking and claim service. Readers will learn about its data
  model, document ingestion, retailer integrations, and the use of completion models
  for processing diverse receipt formats.
authors:
- Helge Sverre
---

Building a backend that ingests everything from emails to screenshots, tracks prices, and processes claims for an evolving business is no small feat. This post offers a principal-level breakdown of Tjommi's backend, a system that handled precisely these complexities over several years.

You will find detailed discussions on data modeling, strict module boundaries, and how the team iterated through scanner, OCR, and finally, LLM-based completion models for robust receipt parsing. The shift to AI for unstructured data is a particularly strong takeaway, revealing how to achieve flexibility without handcrafted parsers.

This is a masterclass in evolving system architecture under real-world constraints, offering concrete patterns for document processing, external integrations, and managing the entire lifecycle of a complex product. Do not miss the insights on using AI to tackle the 'unstructured data' problem head-on.
