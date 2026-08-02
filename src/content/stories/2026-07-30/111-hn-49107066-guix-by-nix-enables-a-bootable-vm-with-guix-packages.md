---
authors:
- Farid Zakaria
comments: https://news.ycombinator.com/item?id=49107066
date: '2026-07-30'
depth_score: 8
hn_id: '49107066'
image: /infographics/111-hn-49107066-guix-by-nix-enables-a-bootable-vm-with-guix-packages.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- gnu-shepherd
- guile
- guix
- guix-packages
- guix-transfer
- hn
- linux-libre
- nix
- nix-daemon
- virtual-machine
title: Guix by Nix enables a bootable VM with Guix packages
url: https://fzakaria.com/2026/07/29/guix-by-nix
utility_score: 7
why_read: This article demonstrates how Nix can be used to build and run a fully Guix-derived
  bootable VM, including the Linux-libre kernel and GNU Shepherd userland. Readers
  will learn about the deep interoperability achieved between Guix and Nix, pushing
  the boundaries of declarative system management.
---

Imagine a virtual machine where the kernel is Linux-libre from Guix, the userland packages are translated from Guix derivations, and the entire system is built and managed by Nix. This is precisely what "Guix by Nix" achieves.

This project is a masterclass in declarative system building and package management interoperability. It showcases how Nix can orchestrate and build components defined in another system like Guix, even running GNU Shepherd as PID 1 instead of systemd.

For any senior engineer invested in reproducible infrastructure, immutable systems, or pushing the boundaries of declarative configuration, this deep dive into Guix by Nix offers eye-opening insights and practical pathways for building highly customized and reliable environments.