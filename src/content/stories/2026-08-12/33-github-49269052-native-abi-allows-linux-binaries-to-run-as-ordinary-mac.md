---
title: Native ABI allows Linux binaries to run as ordinary macOS processes
source: github
url: https://github.com/mslxnu/native_abi
date: '2026-08-12'
tags:
- catchup
- elf-binaries
- github
- linux-binaries
- macos-processes
- macos-subsystem-for-linux
- native-abi
- syscall-translation
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49269052'
comments: https://news.ycombinator.com/item?id=49269052
why_read: This describes mSL/NABI, a modular project allowing native, seamless execution
  of Linux ELF binaries on macOS without containers or virtual machines. Readers will
  learn about its aim to improve system compatibility by running Linux binaries as
  ordinary macOS processes via syscall translation.
authors:
- tsiry
---

Running Linux binaries natively on macOS without VMs or containers is a holy grail for many system engineers. The mSL/NABI project tackles this by implementing a macOS Subsystem for Linux, complete with syscall translation.

This is not just emulation; it is about making ELF binaries feel at home on Darwin. The project delves deep into OS internals, meticulously translating Linux system calls to their macOS equivalents.

Understanding these compatibility layers provides invaluable lessons in system architecture and low-level engineering. It shows how nuanced ABI differences can be bridged for seamless cross-platform execution.

A truly impressive feat of systems engineering.
