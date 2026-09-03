---
title: Fakelinux runs Linux ELF binaries directly on macOS
source: github
url: https://github.com/ayourtch-llm/fakelinux
date: '2026-09-01'
tags:
- aarch64
- catchup
- elf-binaries
- fakelinux
- github
- linux-emulation
- macos
- syscall-emulation
- user-space
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49520047'
comments: https://news.ycombinator.com/item?id=49520047
why_read: This explains Fakelinux, a user-space emulator for running unmodified aarch64
  Linux ELF binaries directly on macOS. You will learn its technical approach of syscall
  and instruction trapping for native performance without virtual machines or Docker.
authors:
- AbuAssar
---

Running Linux binaries natively on macOS without a VM or Docker has always been a holy grail for many developers. FakeLinux achieves this by acting as a user-space Linux emulator, loading ELF binaries directly and translating Linux syscalls to macOS while trapping divergent ARM64 instructions.

This is not a simple feat; it means deeply understanding both operating systems' ABIs and CPU-level behaviors. The project is already capable of running tools like `bash`, `apt-get`, `vim`, `python3`, and even the Vector Packet Processor (VPP). It offers full native speed for guest code since the CPU is shared.

For senior engineers, this provides a fascinating look into low-level system design and emulation techniques, demonstrating how complex software can bridge OS environments. It is a powerful example of practical systems engineering, offering a significant productivity boost for Apple Silicon users who need specific Linux toolchains.
