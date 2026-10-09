---
title: Let's Encrypt will adopt 64-day certificate lifetimes in 2027
source: hn
url: https://letsencrypt.org/2026/10/07/64-day-certs.html
date: '2026-10-08'
tags:
- acme-renewal-info
- automated-renewal
- catchup
- certificate-lifetimes
- hn
- validation-reuse
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '50002249'
comments: https://news.ycombinator.com/item?id=50002249
why_read: Read this to understand Let's Encrypt's transition to shorter certificate
  lifespans and how to update renewal configurations ahead of the deadline.
authors:
- Sarah Gran
image: /infographics/03-hn-50002249.jpg
---

Starting February 2027, Let's Encrypt will switch default certificate validity from 90 days down to 64 days, with the final 90-day certificates expiring in May 2027. This move prepares infrastructure for an eventual 45-day lifetime in 2028.

In tandem with shorter certificates, validation reuse windows are collapsing from 30 days down to 10 days, and eventually to just seven hours. That reduction removes the need for Certificate Authority Authorization (CAA) rechecking, but it leaves almost no margin for flaky renewal scripts.

If your systems still rely on hardcoded renewal cron jobs set to 60 or 80 days before expiration, they will fail silently. Teams should audit renewal automation to trigger at two-thirds of the certificate lifespan, or migrate to clients that implement the ACME Renewal Info (ARI) extension.

Automate your certificate reload pipelines today so shorter certificate rotations do not trigger unexpected production outages.
