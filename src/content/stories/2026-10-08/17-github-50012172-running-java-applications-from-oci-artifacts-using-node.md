---
title: Running Java applications from OCI artifacts using node-managed runtimes
source: github
url: https://github.com/microsoft/brewlet
date: '2026-10-08'
tags:
- catchup
- containerd
- github
- java
- jdk
- kubernetes
- oci-artifacts
- runtime-shim
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50012172'
comments: https://news.ycombinator.com/item?id=50012172
why_read: Read this to understand how Brewlet decouples Java application packaging
  from node-level JDK runtimes on Kubernetes. You will learn how this architecture
  reduces workload deployment overhead and streamlines runtime security updates.
authors:
- Microsoft
---

Running Java in standard container images often forces platforms to bundle heavy runtimes into every single image. When security patches hit OpenJDK, platform teams must trigger rebuilds across thousands of distinct container images, which wastes network bandwidth and CI runner hours.

Brewlet takes a different approach by decoupling the application artifact from the Java runtime environment on Kubernetes nodes. Developers push application JAR files and runtime metadata as bare OCI artifacts, while the platform provisions and manages verified JDK runtimes once per node. A custom containerd runtime shim pairs the workload with the appropriate node-local JDK during container creation.

This architecture eliminates redundant JDK distributions across container layers and lowers cold-start storage pressures. Most importantly, it gives infrastructure teams a centralized control point to patch Java zero-days across the cluster without forcing application redeployments or touching developer source repositories.

Decoupling the execution runtime from container layers could be the future of enterprise platform engineering.
