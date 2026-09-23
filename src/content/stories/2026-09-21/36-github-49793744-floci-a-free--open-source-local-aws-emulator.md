---
title: Floci a free, open-source local AWS emulator
source: github
url: https://github.com/floci-io/floci
date: '2026-09-21'
tags:
- aws-local-emulator
- catchup
- continuous-integration
- development
- docker-compose
- github
- localstack-alternative
- open-source
- testing
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49793744'
comments: https://news.ycombinator.com/item?id=49793744
why_read: Developers should read this to understand Floci, a free and open-source
  local AWS emulator that simplifies development, testing, and CI by removing the
  need for cloud accounts or tokens, offering a direct LocalStack alternative.
authors:
- timeoperator
---

Tired of slow feedback loops and cloud costs in local AWS development? Floci is a new open-source AWS emulator that promises a drop-in replacement for LocalStack, offering AWS-shaped services locally.

What makes Floci compelling is its commitment to being truly free and open, with "no account, no auth token, no feature gates." This simplifies local setup significantly, allowing engineers to `docker compose up` and immediately point their AWS SDKs, CLIs, or Terraform at `http://localhost:4566`.

This tool has the potential to dramatically enhance developer productivity and streamline CI processes for anyone building on AWS, ensuring faster iteration and more reliable testing without hitting cloud bills.
