---
title: Guix achieves full-source bootstrap with a minimal 357-byte program
source: hn
url: https://guix.gnu.org/en/blog/2023/the-full-source-bootstrap-building-from-source-all-the-way-down/
date: '2026-09-07'
tags:
- bootstrap-reduction
- building-from-source
- catchup
- full-source-bootstrap
- guix
- hn
- supply-chain-security
- trusting-trust
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49604227'
comments: https://news.ycombinator.com/item?id=49604227
why_read: This post explains how the Guix project achieved a full-source bootstrap,
  rooting its entire package graph in a 357-byte program. Readers will understand
  the technical details and the critical implications for supply chain security and
  mitigating the 'trusting trust' problem.
authors:
- Janneke Nieuwenhuizen
- "Ludovic Court\xE8s"
---

The "Trusting Trust" attack, where a compromised compiler can infect everything it builds, has always been a fundamental challenge in software supply chain security. GNU Guix just made a monumental stride against it, achieving a "Full-Source Bootstrap."

This means they have reduced the necessary bootstrap binaries for their entire system to a mere 357-byte program, from which over 22,000 package nodes can be built. This is an unparalleled achievement in demonstrating the ability to build software "all the way down" from truly minimal, auditable roots.

Understanding this process provides deep insights into the complexities of reproducible builds and the pursuit of provably secure software supply chains. It is not just an academic exercise; it represents a major step towards true software transparency and trust for critical systems.
