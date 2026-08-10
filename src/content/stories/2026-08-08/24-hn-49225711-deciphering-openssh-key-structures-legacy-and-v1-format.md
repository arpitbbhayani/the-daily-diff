---
title: Deciphering OpenSSH Key Structures Legacy and V1 Formats
source: hn
url: https://sshref.dev/
date: '2026-08-08'
tags:
- catchup
- ed25519
- hn
- key-structure
- legacy-format
- openssh
- private-key
- public-key
- rsa
- v1-format
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49225711'
comments: https://news.ycombinator.com/item?id=49225711
why_read: This guide provides a detailed and accessible explanation of OpenSSH key
  formats, including legacy and v1 versions for both public and private keys. Readers
  will gain a deeper understanding of the underlying structures of RSA and ED25519
  keys.
authors:
- Brent Saner
---

Ever needed to truly understand how OpenSSH keys are structured, beyond the high-level explanations? This guide is an absolute gem, providing a meticulously detailed, byte-level breakdown of both legacy and "v1" key formats for RSA and ED25519.

It goes far beyond the terse official `PROTOCOL.key` documentation, offering clear examples and structures for public and private keys, including plain and encrypted versions. This level of depth is invaluable for debugging tricky SSH connection issues or when integrating SSH capabilities into your own tooling.

Understanding these low-level details can demystify common problems and empower you to build more robust systems. It turns a black box component into a transparent, understandable part of your infrastructure.

This is the definitive reference you did not know you needed for OpenSSH key formats.
