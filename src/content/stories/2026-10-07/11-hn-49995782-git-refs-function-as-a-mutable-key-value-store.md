---
title: Git refs function as a mutable key-value store
source: hn
url: https://matklad.github.io/2026/10/07/git-ref.html
date: '2026-10-07'
tags:
- catchup
- content-addressable-storage
- git-cli
- git-refs
- hn
- key-value-store
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49995782'
comments: https://news.ycombinator.com/item?id=49995782
why_read: Read this to demystify Git internals and understand how references act as
  a mutable key-value mapping over content-addressed snapshots.
authors:
- surprisetalk
---

Most engineers view Git as an append-only, content-addressable object database, but that mental model is incomplete without understanding its mutable key-value layer.

Every commit, tree, and blob is immutable and referenced by a cryptographic hash. However, humans do not navigate trees of SHA hashes directly. Under the hood, Git maintains a mutable string-to-hash mapping inside the .git/refs directory. Branch names, remote tracking branches, and tags are simply keys in this file-system-backed key-value store.

This architectural separation explains everyday command quirks. When you run git fetch origin master, you are passing the remote repository name and the remote branch ref name as separate arguments. When you switch branches to origin/master, you are referencing a local tracking ref stored under refs/remotes/origin/master. The slash is not special syntax; it is just a path delimiter inside the keyspace.

Refspecs formalize this translation by mapping keys in the remote namespace directly to keys in your local store.

Treating Git as a mutable index layered on top of an immutable data store resolves years of tooling confusion.
