---
title: Croc SSH Creates Persistent Collaborative Terminal for Secure Sharing
source: github
url: https://github.com/schollz/croc/blob/main/src/docs/SSH_SHARING.md
date: '2026-09-05'
tags:
- catchup
- collaborative-terminal
- croc
- github
- incident-response
- pair-debugging
- short-lived-invitations
- ssh-terminal-sharing
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49578114'
comments: https://news.ycombinator.com/item?id=49578114
why_read: This document explains how `croc ssh` enables secure and temporary SSH terminal
  sharing for collaborative tasks like debugging or incident response, without exposing
  the host's primary SSH service. It details how to host and join sessions with read/write
  or read-only access using short-lived invitations.
authors:
- schollz
---

Need a better way to share terminals for debugging or pair programming? Forget the clunky setups; `croc ssh` offers a secure, persistent, and collaborative terminal in a snap.

It creates a dedicated, short-lived session without exposing your regular SSH service. Just generate an invitation code and share it. This is ideal for quick support, incident response, or even running a demo. Host options like `--headless` ensure flexibility.

This simple addition to the `croc` toolkit makes collaborative engineering workflows much smoother and more secure.
