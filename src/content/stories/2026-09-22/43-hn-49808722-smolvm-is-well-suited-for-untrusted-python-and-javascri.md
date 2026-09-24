---
title: smolvm is well-suited for untrusted Python and JavaScript sandboxing
source: hn
url: https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/
date: '2026-09-22'
tags:
- catchup
- github-actions
- hardware-isolation
- hn
- javascript
- python
- sandboxing
- smolvm
- untrusted-code
- virtual-machines
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49808722'
comments: https://news.ycombinator.com/item?id=49808722
why_read: Read this to understand how smolvm provides a secure, hardware-isolated
  sandbox for executing untrusted Python and JavaScript code. It details the features
  and performance observed during testing, offering insights into its practical applications
  for data transformations.
authors:
- Simon Willison
---

Running untrusted code, whether from users or agents, is a massive system design challenge. This deep dive into smolvm shows how hardware-isolated virtual machines, specifically Firecracker, are becoming the go-to for secure sandboxing of Python and JavaScript.

The article highlights smolvm's critical features: strict CPU and RAM limits, zero network access, and granular filesystem control. Performance is surprisingly good for a VM-based solution, with cold starts around 0.6-1.5 seconds and subsequent executions as fast as 50 milliseconds.

This is not just theoretical; it offers a highly practical blueprint for building secure, multi-tenant platforms. Understanding these isolation primitives is essential for any senior engineer designing systems that execute external code.
