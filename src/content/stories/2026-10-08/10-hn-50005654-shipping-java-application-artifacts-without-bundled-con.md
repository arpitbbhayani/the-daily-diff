---
title: Shipping Java application artifacts without bundled container runtimes
source: hn
url: https://brewlet.sh/
date: '2026-10-08'
tags:
- catchup
- containers
- hn
- jvm
- kubernetes
- oci-registry
- runc
- spinkube
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50005654'
comments: https://news.ycombinator.com/item?id=50005654
why_read: Understand how Brewlet eliminates OS and JDK bloat from container images
  by utilizing a node-resident Java runtime model. It explains how to deploy pure
  application artifacts directly to Kubernetes without managing base image vulnerabilities.
authors:
- theanonymousone
---

Packaging Java applications into standard container images often brings unnecessary overhead. A basic image bundles the operating system userland, a complete Java Virtual Machine, and the application archive, requiring developers to constantly patch operating system vulnerabilities that have nothing to do with their business logic.

Brewlet borrows the node-resident execution model popularized by WebAssembly frameworks and applies it directly to Kubernetes Java workloads. Instead of shipping the entire runtime layer inside each image, you publish only your application archive and metadata to an OCI registry. The Kubernetes node provides the shared host JDK while isolating each workload using runc with standard pod resource limits.

This separation cuts image transfer payload sizes dramatically and centralizes runtime security maintenance at the node infrastructure layer. Decoupling the JVM execution runtime from the artifact layer eliminates redundant layers while maintaining the isolation guarantees of standard container runtimes.
