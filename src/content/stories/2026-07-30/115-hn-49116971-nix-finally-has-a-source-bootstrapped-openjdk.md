---
authors:
- Farid Zakaria
comments: https://news.ycombinator.com/item?id=49116971
date: '2026-07-30'
depth_score: 8
hn_id: '49116971'
image: /infographics/115-hn-49116971-nix-finally-has-a-source-bootstrapped-openjdk.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- bootstrapping-problem
- catchup
- guix
- hn
- jvm
- nix
- openjdk
- source-bootstrap
title: Nix finally has a source-bootstrapped OpenJDK
url: https://fzakaria.com/2026/07/30/nix-finally-has-a-source-bootstrapped-openjdk
utility_score: 7
why_read: Read this to understand the complex challenges involved in source-bootstrapping
  a Java Development Kit and how the Nix and Guix communities collaborated to achieve
  this significant milestone.
---

Bootstrapping OpenJDK entirely from source is a monumental task, often circumvented by relying on pre-built binaries. The challenge lies in Java needing a Java compiler, which needs a JVM, creating a complex dependency cycle.

GuixPkgs has now successfully achieved a full source bootstrap for OpenJDK 25, providing a fully verifiable, from-scratch build. This is a significant milestone for software supply chain integrity and reproducible builds.

Nix users can now leverage this achievement, gaining access to a source-bootstrapped OpenJDK build. This greatly enhances trust in the Java ecosystem and offers a robust foundation for critical applications demanding maximum transparency and security in their build chain.