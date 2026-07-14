---
title: Microsoft's OpenSSH Adoption Simplifies PowerShell Remoting in 2026
source: hn
url: https://mattmichie.com/2026/07/11/powershell-over-ssh-twenty-years-later/
date: '2026-07-11'
tags:
- catchup
- hn
- openssh
- powershell
- remoting
- ssh
- windows
- windows-server-2025
score: 25
hn_id: '48876843'
comments: https://news.ycombinator.com/item?id=48876843
why_read: This article details the history and present state of PowerShell over SSH,
  guiding readers on how to configure OpenSSH for secure PowerShell remoting on modern
  Windows versions.
authors:
- Matt Michie
author: Matt Michie
---

Remember the days of wrestling with Cygwin to get PowerShell working over SSH? It was a pain, but Microsoft listened, and it only took twelve years for native OpenSSH support to arrive.
Now, as of Windows Server 2025, the SSH server is preinstalled on every box, making secure remote management seamless. The OpenSSH client has been in Windows since 2018.
This article provides a comprehensive guide to setting up and using PowerShell 7 remoting with key authentication. You will learn the current best practices for robust cross-platform system control.
