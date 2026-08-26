---
authors:
- ibobev
comments: https://news.ycombinator.com/item?id=49419477
date: '2026-08-24'
depth_score: 8
hn_id: '49419477'
image: /infographics/18-hn-49419477.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- file-descriptors
- filesystem-semantics
- hn
- posix-rename
- sqlite
- syncthing
title: Open file descriptors persist after atomic file rename
url: https://borretti.me/article/a-syncthing-and-sqlite-gotcha
utility_score: 9
why_read: This post clarifies how the POSIX `rename` syscall affects open file descriptors,
  explaining why applications might not see synchronized data immediately. Readers
  will learn about critical filesystem semantics often misunderstood.
---

Have you ever run into a seemingly inexplicable bug where your application, using a local SQLite database, just would not pick up changes even after a file sync? The file on disk is updated, but your running process sees stale data. This is a common "gotcha" that few truly understand.

The culprit is often the `rename` system call, which tools like Syncthing use for atomic file replacement. When `rename` occurs, any existing open file descriptors pointing to the old file continue to point to it, even though the path now refers to a new file. Your `rusqlite.Connection` object, holding that old file descriptor, is effectively reading an orphaned file.

This means your application will keep using the old version until you restart it, forcing it to open a new file descriptor to the now-current file. Understanding this low-level POSIX detail is essential for robust application design when dealing with local file-based databases and external synchronization.