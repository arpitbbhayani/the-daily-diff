---
authors:
- pullrun
comments: https://news.ycombinator.com/item?id=49021880
date: '2026-07-23'
depth_score: 8
hn_id: '49021880'
image: /infographics/01-hn-49021880.jpg
interest_score: 9
novelty_score: 9
section: systems
source: hn
tags:
- ai-agents
- apple-silicon-vm
- catchup
- container-runtime
- firecracker-microvm
- hn
- kubernetes
- oci-image
- p2p-image-sync
- zero-copy-dag-storage
title: Pullrun enables one OCI image across any execution target
url: https://github.com/pullrun/pullrun
utility_score: 9
why_read: This text introduces Pullrun, a next-generation container runtime that offers
  the flexibility to run a single OCI image across various execution targets like
  containers, microVMs, and Kubernetes, simplifying modern infrastructure deployments.
---

You can now run the exact same OCI image across Linux containers, Firecracker microVMs, or Apple Silicon VMs, thanks to Pullrun. This next-gen container runtime simplifies infrastructure deployment by offering execution target flexibility without needing separate VM images or overlayfs.

Pullrun features zero-copy DAG storage and P2P image synchronization, all within a surprisingly compact footprint: a 14 MB CLI and a 6 MB runtime daemon. This means faster starts and more efficient resource utilization, crucial for scalable systems and even AI agent tasks.

This is a serious architectural leap for anyone juggling diverse compute environments. It allows you to package once and deploy everywhere, from Kubernetes to your local machine, optimizing for performance and consistency.