---
title: Crab serverless Git stores large files in user object storage
source: github
url: https://github.com/crabbuild/crab
date: '2026-09-01'
tags:
- catchup
- data-deduplication
- git-lfs
- github
- large-files
- object-storage
- serverless-git
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49527786'
comments: https://news.ycombinator.com/item?id=49527786
why_read: This explains how Crab provides a serverless Git solution for large files,
  detailing its approach to storing models and datasets in user-controlled object
  storage via deduplicated chunks, offering an alternative to Git LFS.
authors:
- forhappy
---

Managing large files in Git repositories is a persistent challenge, often leading to slow clones and bloated histories. Crab offers an innovative serverless solution, moving models, datasets, and assets out of Git blobs and into your existing S3, GCS, or Azure object storage.

Instead of relying on a dedicated Git LFS server, Crab directly connects developers to their own object store. It stores large files as deduplicated chunks, optimizing storage and transfer. This means you maintain full control over your data infrastructure without additional server overheads.

The key insight here is the serverless model: no central data server or database to deploy, manage, or scale. Developers configure Crab to use their chosen object storage, and the system handles the chunking and deduplication transparently.

This paradigm shift simplifies large asset management, making Git usable for machine learning projects, game development, or any codebase burdened by large binaries.

It is a truly practical approach for scalable version control.
