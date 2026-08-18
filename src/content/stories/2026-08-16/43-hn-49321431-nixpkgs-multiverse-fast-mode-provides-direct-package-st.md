---
title: Nixpkgs Multiverse fast mode provides direct package store paths
source: hn
url: https://fzakaria.com/2026/08/14/nixpkgs-multiverse-fast-mode
date: '2026-08-16'
tags:
- catchup
- hn
- nix-flakes
- nix-store-path
- nixpkgs
- nixpkgs-multiverse
- package-evaluation
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49321431'
comments: https://news.ycombinator.com/item?id=49321431
why_read: This article introduces nixpkgs-multiverse's fast mode, which allows fetching
  specific package store paths without evaluating the entire Nixpkgs tree. Readers
  will learn how this new capability fundamentally changes Nixpkgs interaction by
  enabling direct cache access and significantly speeding up development workflows.
authors:
- Farid Zakaria
---

Nix users, prepare for a major speed boost. Nixpkgs-Multiverse now features a "fast mode" that revolutionizes how you interact with historical package versions.

The traditional way of fetching a specific `python3` version, for instance, involved downloading and evaluating a massive ~378 MB Nixpkgs tree from that era. This was a significant performance bottleneck.

Fast mode bypasses this entirely. By providing direct store paths for every indexed package version, it allows Nix to fetch the exact artifact from the cache without any tree evaluation. This means you can instantly `nix build` or `nix shell` any historical package, dramatically improving your workflow and developer productivity. It is a fundamental shift in how one interacts with the Nix ecosystem.
