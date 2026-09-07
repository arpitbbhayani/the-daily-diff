---
title: BMO-X A Bare-Metal Orchestrator with Custom Toolchain in Rust
source: github
url: https://github.com/AndreeSalazar/BMO-X
date: '2026-09-05'
tags:
- ada
- bare-metal-orchestrator
- c
- catchup
- cobol
- custom-toolchain
- github
- inti
- rust
- system-development
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49573461'
comments: https://news.ycombinator.com/item?id=49573461
why_read: This describes BMO-X, a unique bare-metal orchestrator written from scratch
  in Rust, featuring its own toolchain and running without LLVM or GCC. Readers will
  learn about deep low-level system development and custom operating environment creation.
authors:
- Andree Salazar
---

A custom operating system, BMO-X, written entirely in Rust, boots on bare metal with only two syscalls and its own full toolchain to run languages like COBOL and C, completely sidestepping LLVM, GCC, and QEMU. This project offers a truly unique perspective on system architecture.

It is rare to see a complete stack built from the ground up: boot chain, kernel, drivers, filesystem, and native compilers. This project explores the frontiers of system minimalism and demonstrates an incredible command over hardware and software interaction.

For senior engineers, this is a masterclass in understanding what lies beneath the abstractions. It challenges conventional wisdom about compiler dependencies and kernel complexity, providing profound insights into fundamental computer science principles.
