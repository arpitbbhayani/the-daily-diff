---
title: Zero-copy content-addressed caching eliminates redundant builds across worktrees
source: github
url: https://github.com/kunobi-ninja/kache
date: '2026-10-01'
tags:
- catchup
- compiler-cache
- content-addressed-storage
- continuous-integration
- github
- rust
- zero-copy
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49925040'
comments: https://news.ycombinator.com/item?id=49925040
why_read: Learn how Kache accelerates compilation by using content-addressed caching
  to share build outputs across worktrees and CI environments without wasting disk
  space.
authors:
- Kunobi
---

Rust compilation times remain one of the biggest productivity bottlenecks in large codebases, especially when jumping across multiple Git worktrees and CI runs. Traditional caching approaches often waste disk space and burn I/O by duplicating build artifacts across local directories.

Kache introduces a content-addressed compiler cache designed for Rust, C/C++, and CUDA. By keying every compiler invocation directly to the cryptographic hash of its inputs, an artifact compiled once is instantly restored rather than rebuilt in subsequent worktrees or CI pipelines.

Instead of copying heavy binaries around, it leverages a local zero-copy store backed by filesystem or S3-compatible remotes. It drops into standard Cargo workflows simply by setting rustc-wrapper, requiring no disruptive configuration changes.

Eliminating redundant compilation cycles without incurring storage penalties makes build infrastructure noticeably faster and cleaner.
