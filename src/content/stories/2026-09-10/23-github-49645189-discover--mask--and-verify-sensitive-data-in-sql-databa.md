---
title: Discover, mask, and verify sensitive data in SQL databases
source: github
url: https://github.com/sealandseacat/dbmask
date: '2026-09-10'
tags:
- auditable-workflow
- catchup
- data-masking
- database-copies
- github
- sensitive-data
- sql-databases
section: databases
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49645189'
comments: https://news.ycombinator.com/item?id=49645189
why_read: This tool helps ensure the safety of database copies by providing an auditable
  workflow to discover, mask, and verify sensitive data, preventing leaks into less
  controlled environments.
authors:
- SiyuanFeng
---

Dealing with sensitive data in non-production environments is a constant challenge, but it does not have to be a security nightmare. This open-source tool introduces an auditable, three-step workflow: discover, mask, and verify.

Imagine generating realistic, deterministic fake data for development, testing, or even AI training pipelines without ever risking a real data leak. The system ensures consistency and then rigorously verifies that masking actually occurred.

This is a critical piece of infrastructure for any team managing SQL databases and needing to maintain compliance while fostering agile development.
