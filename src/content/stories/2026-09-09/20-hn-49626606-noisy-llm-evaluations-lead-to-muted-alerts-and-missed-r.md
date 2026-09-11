---
title: Noisy LLM evaluations lead to muted alerts and missed regressions
source: hn
url: https://digline.dev/blog/my-llm-eval-cried-wolf/
date: '2026-09-09'
tags:
- catchup
- false-positives
- hn
- llm-evaluation
- measurement-validity
- noise-floor
- regression-testing
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49626606'
comments: https://news.ycombinator.com/item?id=49626606
why_read: This text explains how noisy LLM evaluations can lead to missed regressions
  by conditioning users to ignore alerts. Readers will learn the importance of measuring
  the 'noise floor' in their evaluation systems to maintain alert effectiveness.
authors:
- alexpran
---

LLM evaluations are tricky, and sometimes your eval suite will cry wolf. One team found their LLM-judged regressions were firing falsely, leading to wasted hours and a desensitization to real issues.

The core problem was an an assumption that evaluation scores were always a true measure. Instead, they discovered a significant "noise floor" in their LLM judge, where the same input could yield varying scores. This highlights the critical need to measure the reliability of your evaluation system, not just the performance of your LLM.

You will learn how to approach this by repeatedly sampling your evaluation system to understand its inherent variance. This shifts your mindset from treating scores as absolute to understanding them as probabilistic measurements, which is vital for robust LLM application development. This approach helps you trust your evaluations when they actually flag an issue.
