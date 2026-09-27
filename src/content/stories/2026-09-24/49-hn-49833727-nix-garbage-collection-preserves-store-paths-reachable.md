---
title: Nix garbage collection preserves store paths reachable from roots
source: hn
url: https://www.labcraft.dev/blog/nix-gc-roots
date: '2026-09-24'
tags:
- catchup
- garbage-collection
- gc-roots
- hn
- nix-store
- nixos
- reachability
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49833727'
comments: https://news.ycombinator.com/item?id=49833727
why_read: Read this to understand the reachability model governing Nix garbage collection
  and why removed packages linger on disk. You will gain a clear mental model for
  auditing roots and safely reclaiming space.
authors:
- anandsuresh
---

Running a garbage collection pass in Nix often leaves deleted packages sitting inside /nix/store. This behavior is not a bug; it is a fundamental property of how Nix handles reachability through garbage collection roots.

Nix garbage collection ignores file age, size, or profile unlinking. It determines retention purely through root reachability. Even if you remove a package from your active profile, indirect references such as previous profile generations, systemd units, or pinned shells keep the entire closure alive on disk.

Understanding GC roots transforms storage cleanup from guesswork into deterministic system auditing. Once you map the exact dependency closure and purge lingering roots, disk space reclamation becomes completely predictable.
