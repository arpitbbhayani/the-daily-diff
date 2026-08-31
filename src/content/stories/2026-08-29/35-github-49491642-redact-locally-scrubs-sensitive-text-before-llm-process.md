---
title: Redact locally scrubs sensitive text before LLM processing
source: github
url: https://github.com/Sushmey/Redact/tree/main
date: '2026-08-29'
tags:
- catchup
- data-scrubbing
- github
- llm-privacy
- named-entity-recognition
- redaction
- sensitive-data
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49491642'
comments: https://news.ycombinator.com/item?id=49491642
why_read: Read this to understand how to protect sensitive information when interacting
  with large language models. It provides a practical, local solution for redacting
  personal and confidential data from text before it leaves your machine, using a
  combination of regex, checksums, and NER.
authors:
- Sushmey
---

Sending logs or internal documents to an LLM? You might be leaking sensitive data without realizing it. This open-source tool, Redact, provides a robust, local scrubbing solution that runs entirely on your machine.

It cleverly combines regex and checksums for structured data like SSNs or card numbers, with a small NER model to catch fuzzier entities like names and companies. The critical insight: it focuses on preventing over-redaction, ensuring your context remains meaningful for the LLM.

The project also generates stable placeholders (e.g., PERSON_001) instead of just blanking out values, which helps maintain text coherence while keeping original sensitive data safely offline. This is smart context engineering for the age of AI.
