---
authors:
- Kristofp
comments: https://news.ycombinator.com/item?id=49365607
date: '2026-08-19'
depth_score: 8
hn_id: '49365607'
image: /infographics/44-github-49365607.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: github
tags:
- catchup
- divergence
- github
- programming-language
- regex
- regex-engine
- reproducibility
title: Regex engines produce silent divergences across programming languages
url: https://github.com/Kristofp/regex-engine-divergences
utility_score: 9
why_read: This repository demonstrates that regular expressions behave inconsistently
  across programming languages, often without warning. Readers will learn about the
  prevalence and types of these silent regex engine divergences.
---

It is a common assumption that a regular expression will behave the same across programming languages. This repository demolishes that assumption with hard data: 264 out of 539 common regex patterns produce different results across 16 real engines.

Imagine debugging a text parsing issue only to discover your carefully crafted regex works perfectly in Python but silently fails in JavaScript, or worse, returns a different match. This project goes beyond theoretical differences, running actual runtime environments for C#, Go, Java, Perl, PHP, Python, Ruby, and many others.

This empirical data is invaluable for any senior engineer dealing with cross-language systems or complex text processing. It highlights a critical, often overlooked, source of subtle bugs and emphasizes the need for careful validation when interacting with diverse regex implementations. The divergences, often without warnings, are a silent killer of productivity.