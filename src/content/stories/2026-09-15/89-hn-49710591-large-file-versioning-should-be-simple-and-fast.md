---
title: Large-file versioning should be simple and fast
source: hn
url: https://fastpaced.com/articles/boring-lfs/
date: '2026-09-15'
tags:
- catchup
- data-versioning
- dvc
- git-lfs
- hn
- large-files
- storage
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49710591'
comments: https://news.ycombinator.com/item?id=49710591
why_read: This article explains why existing large-file versioning solutions like
  Git LFS and DVC introduce unnecessary complexity. It offers a critical perspective
  on their design decisions, particularly regarding their reliance on additional services
  versus integrated storage.
authors:
- David Muhr
---

Large file versioning with Git LFS often introduces an extra service, complicating your workflow. This article makes a compelling case for a "boring" approach: data should simply stay aligned with its Git commit.

The trade-offs between Git LFS (requiring a separate endpoint) and DVC (more generalized but complex) are explored. It highlights how restoring a working tree becomes dependent on external infrastructure, adding unnecessary complexity for many use cases.

Consider how a simpler, more direct approach to associating large files with commits could eliminate operational overhead and streamline your data management, making versioning truly boring and reliable.
