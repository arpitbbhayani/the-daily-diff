---
authors:
- func25
comments: https://news.ycombinator.com/item?id=49284983
date: '2026-08-13'
depth_score: 8
hn_id: '49284983'
image: /infographics/74-hn-49284983.jpg
interest_score: 8
novelty_score: 6
section: engineering
source: hn
tags:
- catchup
- go
- go-vet
- hn
- static-analysis
- struct-copy
- sync-nocopy
title: Go prevents unintended struct copies using sync.noCopy and go vet
url: https://func25.dev/posts/go-sync-nocopy/
utility_score: 8
why_read: This post explains how Go prevents accidental struct copies using the sync.noCopy
  marker and the go vet static analysis tool. Readers will understand why copying
  certain Go types can lead to subtle bugs and how to safeguard their own types.
---

Ever wondered how Go prevents you from accidentally copying a `sync.Mutex` or `sync.Map` after use? It is not the compiler, but a clever static analysis tool called `go vet` that catches these subtle bugs. The mechanism involves a tiny, empty struct named `noCopy`.

The `noCopy` struct itself does nothing at runtime, acting merely as a marker. It has two empty methods, `Lock()` and `Unlock()`, which trick `go vet` into treating any struct containing `noCopy` as if it holds a lock. This allows `go vet`'s `copylocks` checker to flag accidental copies.

Understanding this idiom is crucial for writing robust concurrent Go code. Copying a mutex or map after its first use can silently corrupt state, leading to hard-to-debug issues. This deep dive into a core Go engineering practice ensures you build more reliable systems.