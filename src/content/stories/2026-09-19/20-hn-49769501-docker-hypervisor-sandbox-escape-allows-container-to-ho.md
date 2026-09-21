---
title: Docker hypervisor sandbox escape allows container to host filesystem access
source: hn
url: https://accomplish.ai/blog/escaping-dockers-hypervisor/
date: '2026-09-19'
tags:
- catchup
- docker
- filesystem-access
- hn
- hypervisor
- sandbox-escape
- symlink-exploit
- virtio-fs
- vmm
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49769501'
comments: https://news.ycombinator.com/item?id=49769501
why_read: This explains a critical sandbox escape vulnerability in Docker's hypervisor
  on Mac. It details how a container can gain full host filesystem access by exploiting
  virtio-fs and symlinks.
authors:
- RohanAdwankar
---

A critical sandbox escape vulnerability in Docker's VMM for Mac has been patched, and the details are a masterclass in system-level security flaws. This was not a minor issue; a container could gain full read and write access to the host filesystem with just three lines of bash.

The exploit leveraged intricate interactions within virtio-fs, specifically how Docker's file server managed file paths, node IDs, and macOS's volfs. By opening a file, deleting it, and then replacing its parent folder with a symlink, the guest could trick the server into following the symlink outside the mounted directory.

Understanding these low-level filesystem and virtualization behaviors is crucial for anyone building or operating distributed systems. This incident highlights the subtle complexities in container isolation and reinforces the importance of deep architectural knowledge for robust system design.
