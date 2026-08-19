---
authors:
- ibobev
comments: https://news.ycombinator.com/item?id=49332497
date: '2026-08-17'
depth_score: 8
hn_id: '49332497'
image: /infographics/74-hn-49332497.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- createprocess
- handle-inheritance
- hn
- ipc
- rust
- windows
title: Rust's std::process::Command on Windows causes accidental handle inheritance
url: https://purplesyringa.moe/blog/std-process-command-is-a-bad-citizen-on-windows/
utility_score: 8
why_read: This article explains how Rust's std::process::Command implementation on
  Windows can lead to unintended handle inheritance, causing security vulnerabilities
  and resource leaks. Readers will learn about the nuances of WinAPI's CreateProcess
  function and why careful handle management is crucial in cross-process communication.
---

Rust developers, beware of a subtle but critical flaw in `std::process::Command` on Windows that can lead to significant issues. The problem stems from how `CreateProcess` handles handle inheritance, often resulting in accidental exposure of sensitive handles.

By default, Rust's implementation can set the `bInheritHandles` flag to `TRUE` without specifying an explicit handle list. This means any inheritable handle in the parent process, even those you did not intend, can be passed to a child process. This seemingly minor detail creates avenues for security vulnerabilities, memory leaks by keeping handles alive longer than needed, and file deletion problems.

Understanding these low-level WinAPI details is crucial for building robust cross-platform applications. This flaw highlights how seemingly minor defaults can have major security and stability implications in system-level programming.