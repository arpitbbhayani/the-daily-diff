---
authors:
- Abhishek Sharma
- Anand Balaji
- Zachary Yedidia
- Anthony Du
- Taehyun Noh
- Iain Ireland
- Jan de Mooij
- Matthew Gaudet
- Tal Garfinkel
- Deian Stefan
- Hovav Shacham
- Shravan Narayan
comments: https://news.ycombinator.com/item?id=49032734
date: '2026-07-24'
depth_score: 9
hn_id: '49032734'
image: /infographics/21-hn-49032734.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- browser-security
- catchup
- disaggregation
- firefox
- hn
- javascript-engine
- mohabi
- performance-overhead
- sandboxing
- software-based-fault-isolation
title: Mohabi leverages SFI to securely sandbox Firefox JavaScript engine
url: https://www.usenix.org/conference/osdi26/presentation/sharma
utility_score: 7
why_read: This paper introduces Mohabi, a modern Firefox browser that uses software-based
  fault isolation and disaggregation to securely sandbox its JavaScript engine. Readers
  will learn how complex system transformations can be made tractable and efficient
  to significantly enhance browser security with modest performance overheads.
---

Disaggregating and sandboxing a core component like the Firefox JavaScript engine is an immense engineering challenge, and Mohabi delivers a significant breakthrough. This project showcases how Software-Based Fault Isolation (SFI) can be retrofitted into a mature, large-scale system to dramatically improve security without unacceptable performance hits.

The engineering work involved transforming tens of thousands of functions and intertwined data structures, leveraging type systems and automatic code generation. The resulting overheads are surprisingly modest: around 25 percent on common browser benchmarks and only 5.9-6.6 percent for the SFI toolchain itself.

This is a deep dive into practical, high-impact system design. It offers invaluable lessons for any senior engineer thinking about architectural resilience and applying advanced isolation techniques to complex applications.