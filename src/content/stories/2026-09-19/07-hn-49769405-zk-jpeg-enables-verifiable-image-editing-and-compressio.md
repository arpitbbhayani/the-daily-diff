---
title: ZK-JPEG enables verifiable image editing and compression robust to lossy encoding
source: hn
url: https://eprint.iacr.org/2026/2039
date: '2026-09-19'
tags:
- catchup
- hn
- image-authentication
- image-provenance
- jpeg-compression
- lossy-compression
- verifiable-image-editing
- zero-knowledge-proofs
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49769405'
comments: https://news.ycombinator.com/item?id=49769405
why_read: Readers will learn how ZK-JPEG provides robust image authentication and
  verifiable image editing, even with lossy compression like JPEG. It offers a solution
  to verify image provenance despite common transformations.
authors:
- Samuel Dittmer
- Steve Lu
- Kimberlee Model
- Joseph Near
---

Verifying image authenticity in the age of deepfakes is a growing problem, especially when images undergo lossy compression like JPEG. Traditional digital signatures break instantly.

ZK-JPEG offers a compelling solution: it uses zero-knowledge proofs to cryptographically prove an image's origin and editing history, even after being compressed to a JPEG. This is not merely theoretical; the system integrates with JPEG compression, enabling verification of transformations like blurring or redaction with minimal overhead.

The authors use tools like PicoZK to convert Python image editing code into ZK circuits. This approach solves a significant challenge for image provenance and could be a cornerstone for future verifiable content systems.

This moves us closer to trustworthy digital media by applying advanced cryptography to everyday image formats.
