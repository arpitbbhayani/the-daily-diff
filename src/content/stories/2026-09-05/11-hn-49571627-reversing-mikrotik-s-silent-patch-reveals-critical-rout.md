---
title: Reversing MikroTik's Silent Patch Reveals Critical RouterOS Vulnerabilities
source: hn
url: https://npratley.net/reversing-mikrotiks-silent-patch-the-routeros-7-23-4-fix-they-wouldnt-explain/
date: '2026-09-05'
tags:
- catchup
- code-execution
- hn
- mikrotik
- reverse-engineering
- routeros
- rsa-signature-forgery
- security-patch
- ssh-username-vulnerability
- vulnerability-disclosure
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49571627'
comments: https://news.ycombinator.com/item?id=49571627
why_read: This post details how to reverse engineer a silent security patch to uncover
  critical vulnerabilities in MikroTik's RouterOS, including specific attack vectors
  like RSA signature forgery and an SSH username bug. Readers will learn the practical
  steps to analyze patched binaries and understand the impact of silent disclosures.
authors:
- Nick Pratley
---

A silent security patch is a disclosure in disguise. When MikroTik pushed RouterOS 7.23.4 with a vague "important security update" notice, one engineer decided to leverage AI to uncover the hidden truth.

This deep dive reveals how AI-driven static diffing compressed weeks or months of manual reverse engineering into just six hours. The result? Discovery of three critical bugs, including a low-exponent RSA signature forgery and an SSH username overflow that was already being actively exploited.

This is not just about MikroTik; it is a masterclass in applying AI to security analysis and reverse engineering undocumented fixes. It offers a clear blueprint for engineers needing to understand or audit patched binaries when vendors stay silent.
