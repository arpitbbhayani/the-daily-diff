---
title: Omnibin provides every nixpkgs binary on demand without installation
source: hn
url: https://fzakaria.com/2026/09/24/every-package-is-already-installed
date: '2026-09-26'
tags:
- catchup
- fuse-filesystem
- hn
- nixpkgs
- omnibin
- package-management
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49855580'
comments: https://news.ycombinator.com/item?id=49855580
why_read: Learn how Omnibin leverages a FUSE filesystem to make every binary in nixpkgs
  history available on-demand without installing anything upfront.
authors:
- Farid Zakaria
---

Local developer environments and AI agent harnesses spend unnecessary time downloading and configuring toolchains. Every time an isolated container boots, precious seconds vanish into pulling dependencies that might only run once.

The omnibin project solves this problem by mounting a FUSE filesystem that exposes over fifty thousand Nixpkgs binaries directly on your path without pre-installing anything. The filesystem consumes zero local disk space up front and fetches binary data on demand only when a process reads or executes a specific file.

This architecture replaces bloated multi-gigabyte container images with a lightweight universal execution sandbox. A coding agent or CI runner can invoke multiple compiler toolchains and specific versioned utilities on the fly without complex container layering or explicit installation scripts.

Lazy-loading binaries via user-space filesystems fundamentally transforms how we build sandboxes for autonomous code execution.
