---
authors:
- Ethan Heilman
comments: https://news.ycombinator.com/item?id=49113838
date: '2026-07-30'
depth_score: 8
hn_id: '49113838'
image: /infographics/81-hn-49113838.jpg
interest_score: 8
novelty_score: 9
section: systems
source: hn
tags:
- catchup
- cryptographic-attestation
- github-actions
- hn
- oracle
- tls-notary
- web-content-notarization
title: Github Actions can function as a TLS notary oracle
url: https://www.ethanheilman.com/x/35/index.html
utility_score: 8
why_read: This post explains an unconventional use of GitHub Actions to create a TLS
  notary oracle. Readers will learn how to cryptographically prove the existence and
  integrity of web content, offering an alternative to complex Trusted Execution Environments.
---

Thinking about trusted execution environments for content attestation? What if your CI/CD pipeline could do it? This blog post argues you can use GitHub Actions as a verifiable oracle and TLS notary, sidestepping the complexity of Intel SGX or AWS Nitro Enclaves.

The idea is that GitHub itself acts as the trusted third party, signing web content within an Action run. This creates a cryptographically provable record of what was on a website, even after deletion.

This is a genuinely surprising and practical application of a common engineering tool. It challenges conventional thinking about trust models and offers a simpler path to verifiable content integrity.

An elegant solution using existing infrastructure for a hard problem.