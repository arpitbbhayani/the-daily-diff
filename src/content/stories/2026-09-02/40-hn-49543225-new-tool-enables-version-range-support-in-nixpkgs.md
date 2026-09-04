---
title: New tool enables version range support in Nixpkgs
source: hn
url: https://fzakaria.com/2026/09/01/the-holy-grail-of-nixpkgs-version-ranges
date: '2026-09-02'
tags:
- catchup
- dependency-solver
- grail-tool
- hn
- nixpkgs
- package-management
- version-ranges
- webassembly
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49543225'
comments: https://news.ycombinator.com/item?id=49543225
why_read: This post explains the challenge of version ranges in the 'versionless'
  Nixpkgs and introduces the 'grail' tool that enables this 'holy grail' functionality.
  Readers will learn how this new capability allows for expressing and solving complex
  package version constraints.
authors:
- Farid Zakaria
---

Nixpkgs is known for its purity and reproducibility, but its "versionless" nature has long been a trade-off. What if you could specify version ranges for packages within Nixpkgs, challenging a core design tenet?

A new tool, `grail`, demonstrates exactly this. It can identify specific Nixpkgs revisions that simultaneously satisfy multiple package version constraints, like `python3@>=3.10 ^openssl@1.1.*`. This capability was previously considered inexpressible.

This development offers a fascinating look into advanced dependency resolution and how a seemingly immutable system can adapt to new requirements. For engineers deeply involved in build systems and reproducible environments, this is a truly significant "holy grail" that redefines what is possible with Nix.
