---
title: Versioned large file storage for git using object stores
source: github
url: https://github.com/getgat-dev/gat
date: '2026-09-27'
tags:
- catchup
- git
- git-lfs
- github
- large-file-storage
- object-storage
- version-control
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49868710'
comments: https://news.ycombinator.com/item?id=49868710
why_read: Learn how gat simplifies large file versioning in Git by leveraging standard
  object storage without requiring a dedicated server. It offers a streamlined alternative
  to Git LFS and DVC using Git hooks and lock files.
authors:
- davnn
image: /infographics/06-github-49868710.jpg
---

Managing large binary assets in Git repositories has historically forced teams to choose between cumbersome Git LFS server setups or complex data version control frameworks. Gat offers a refreshing alternative by coupling Git workflows directly to standard object storage.

Instead of relying on fragile clean or smudge filters that slow down operations, Gat uses a dedicated lockfile and shard directory approach. Git hooks trigger synchronization against your target Amazon S3, Google Cloud Storage, or Azure Blob bucket during checkout, merge, and rebase operations.

This architecture keeps repositories lightweight while preserving standard Git command line ergonomics without dedicated server overhead.
