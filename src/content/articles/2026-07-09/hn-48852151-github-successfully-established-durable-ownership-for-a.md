---
title: GitHub successfully established durable ownership for all repositories
source: hn
url: https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/
date: '2026-07-09'
tags:
- catchup
- hn
- metadata
- repository-management
- repository-ownership
- secret-scanning
- service-catalog
score: 29
hn_id: '48852151'
comments: https://news.ycombinator.com/item?id=48852151
why_read: This post describes how GitHub addressed the critical problem of unowned
  repositories across their vast internal organization. Readers will gain insight
  into the challenges of scaling repository management and learn about a practical
  approach to establishing durable ownership, leveraging structured metadata and process
  changes.
authors:
- Michael Recachinas
author: Michael Recachinas
---

GitHub, with over 14,000 internal repositories, faced a critical challenge: a lack of clear ownership for the vast majority of non-service-backed repos. This created significant roadblocks for security remediation and incident response.

Their solution involved a massive organizational effort to validate ownership for every active repository. They also archived approximately 8,000 unused repositories and enforced ownership as a requirement for all new repository creations.

This initiative highlights the importance of robust internal engineering practices and a well-defined service catalog. It demonstrates how clear ownership is fundamental for managing security, compliance, and on-call routing in a large-scale, complex software ecosystem.

Establishing durable ownership across your codebase is not just good practice; it is essential for operational excellence and developer confidence.
