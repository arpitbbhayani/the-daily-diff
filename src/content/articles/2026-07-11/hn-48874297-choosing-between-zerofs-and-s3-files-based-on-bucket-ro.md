---
title: Choosing Between ZeroFS and S3 Files Based on Bucket Role
source: hn
url: https://www.zerofs.net/blog/zerofs-vs-aws-s3-files/
date: '2026-07-11'
tags:
- amazon-s3-files
- catchup
- client-side-encryption
- data-compression
- hn
- lsm-tree
- object-storage
- posix-filesystem
- storage-layout
- zerofs
score: 89
hn_id: '48874297'
comments: https://news.ycombinator.com/item?id=48874297
why_read: This article explains the core architectural differences between ZeroFS
  and Amazon S3 Files, particularly their contrasting approaches to object storage
  layout. It clarifies how to choose between them based on whether direct S3 object
  access or optimized internal persistence (with compression and encryption) is prioritized.
authors:
- Pierre Barre
author: Pierre Barre
---

Building a POSIX filesystem on object storage like S3 presents fascinating design choices, as shown by the comparison between ZeroFS and Amazon S3 Files.

S3 Files offers direct object identity, meaning `images/cat.jpg` in your mount is literally the same S3 key. This simplicity ensures interoperability but sacrifices some optimization.

ZeroFS, on the other hand, treats S3 as an opaque internal persistence layer. It packs, compresses, and encrypts file contents into immutable segment objects, with metadata managed in an LSM tree. This delivers efficiency but means direct S3 access reveals a custom layout.

The choice comes down to your primary use case: direct S3 object access or an internal, optimized persistence layer. Each approach has distinct implications for performance, cost, and complexity.

Architecting storage is all about trade-offs.
