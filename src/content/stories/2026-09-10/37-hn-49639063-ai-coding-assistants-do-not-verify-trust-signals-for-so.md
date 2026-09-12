---
title: AI coding assistants do not verify trust signals for software installation
source: hn
url: https://arxiv.org/abs/2609.07754
date: '2026-09-10'
tags:
- ai-coding-assistants
- catchup
- hn
- research-software
- software-installation
- software-supply-chain
- trust-signals
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49639063'
comments: https://news.ycombinator.com/item?id=49639063
why_read: This paper investigates whether AI coding assistants verify trust signals
  before installing software, uncovering potential vulnerabilities in the research
  software supply chain.
authors:
- Pengyin Shan
---

Your AI coding assistant might be a supply chain risk. A new pre-registered study reveals that current AI coding assistants almost never check critical trust signals like Software Bill of Materials (SBOMs), signed releases, or build provenance attestations. They often proceed with installations without validation. This oversight is not a minor bug; it is a fundamental flaw that exposes development environments to known vulnerabilities and malicious packages. The study, conducted across six open-source research software projects and multiple frontier models, found that these AI tools consistently failed to act on these crucial security indicators. It means the very assistants designed to boost productivity are inadvertently introducing significant attack vectors into your projects. For any engineer leveraging AI coding assistants, this is a wake-up call. Understanding these limitations is paramount for building secure systems and developing robust engineering practices.
