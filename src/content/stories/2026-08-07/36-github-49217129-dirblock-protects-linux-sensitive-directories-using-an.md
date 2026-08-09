---
title: dirblock protects Linux sensitive directories using an allowlist
source: github
url: https://github.com/roku-oss/dirblock
date: '2026-08-07'
tags:
- allowlist
- catchup
- dirblock
- directory-protection
- fanotify
- github
- linux-daemon
- supply-chain-attack
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49217129'
comments: https://news.ycombinator.com/item?id=49217129
why_read: Read this to understand dirblock, a Linux daemon that offers surgical protection
  for sensitive directories against supply chain attacks. It explains its unique allowlist-based
  approach utilizing the kernel's fanotify API.
authors:
- pfrench42
---

Protecting sensitive secrets from supply chain attacks is a massive challenge. Dirblock offers a surgical, Linux-native approach: it is a daemon leveraging the `fanotify` API to whitelist allowed processes for specific directories.

This is not another broad MAC system like SELinux. Instead, Dirblock focuses on a narrow, directory-first guard. Define your secret directory, list the few binaries that should touch it, and everything else gets denied.

This pragmatic design is a powerful addition to your engineering toolkit for securing SSH keys, cloud credentials, or API tokens directly at the file system level during developer workflows. It shows how precise system-level controls can significantly enhance your security posture.
