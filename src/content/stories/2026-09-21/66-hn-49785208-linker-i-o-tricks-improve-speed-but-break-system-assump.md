---
title: Linker I/O tricks improve speed but break system assumptions
source: hn
url: https://maskray.me/blog/linker-io-tricks-and-their-downsides
date: '2026-09-21'
tags:
- build-systems
- catchup
- debugging
- file-overwriting
- hn
- i/o
- linker
- mold
- performance-optimization
- profiling
- transparent-huge-pages
- wild
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49785208'
comments: https://news.ycombinator.com/item?id=49785208
why_read: Read this to understand how modern linker optimizations, such as in-place
  file overwriting and transparent huge pages, improve performance. It also explains
  how these tricks introduce compatibility challenges for build systems, debuggers,
  and profilers.
authors:
- MaskRay
---

Modern linkers like mold and wild employ clever I/O tricks, such as in-place file overwriting, forking to offload memory, and transparent huge pages, to shave off crucial seconds from your edit-relink loop. These optimizations can lead to noticeable performance gains in your build times.

However, these very tricks often break subtle assumptions held by build systems, debuggers, and profilers. For instance, in-place overwrites can confuse debuggers by changing the inode without recreating the file, or ETXTBSY can arise from unexpected process behavior.

Understanding these trade-offs is crucial. This article provides a deep dive into how these low-level optimizations work and, more importantly, what unexpected side effects they can introduce, which can save you countless hours debugging obscure build issues.
