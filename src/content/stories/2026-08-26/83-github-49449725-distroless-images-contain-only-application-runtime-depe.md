---
title: Distroless images contain only application runtime dependencies
source: github
url: https://github.com/GoogleContainerTools/distroless
date: '2026-08-26'
tags:
- catchup
- container-images
- container-security
- distroless-images
- github
- runtime-dependencies
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49449725'
comments: https://news.ycombinator.com/item?id=49449725
why_read: This explains how distroless images reduce container attack surface by including
  only the application and its runtime dependencies, omitting package managers and
  shells. You will learn about a security best practice employed by tech giants like
  Google for containerization.
authors:
- GoogleContainerTools
---

Building secure and lean Docker images for production is a non-negotiable best practice. Google's Distroless images offer a powerful approach by including only your application and its direct runtime dependencies, completely stripping out package managers, shells, and other extraneous binaries.

This minimal approach dramatically reduces the attack surface of your containers, making them far more secure against vulnerabilities. As an added benefit, it often results in significantly smaller image sizes, speeding up deployments and reducing storage costs. It is a win-win for both security and operational efficiency.

Adopting distroless is not just about a tool, it is about a fundamental shift in how you think about your production containerization strategy, pushing you towards truly hardened and optimized deployments.
