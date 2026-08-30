---
authors:
- Eyal Dulberg
comments: https://news.ycombinator.com/item?id=49478952
date: '2026-08-28'
depth_score: 8
hn_id: '49478952'
image: /infographics/78-hn-49478952.jpg
interest_score: 8
novelty_score: 5
section: systems
source: hn
tags:
- breaking-changes
- catchup
- cluster-upgrade
- feature-gates
- hn
- kubelet-flags
- kubernetes-1-37
title: Identifying Kubernetes 1.37 breaking changes for a smooth upgrade
url: https://radarhq.io/blog/kubernetes-1-37-breaking-changes
utility_score: 9
why_read: This post explains the critical breaking changes in Kubernetes 1.37 and
  provides a manual checklist to ensure a smooth cluster upgrade. You will learn how
  to identify potential issues before they impact your nodes.
---

Upgrading Kubernetes can be daunting, but ignoring breaking changes is a recipe for disaster. Kubernetes 1.37 brings significant shifts, and this guide provides a crucial checklist.

Beyond the usual API deprecations, 1.37 removes 25 feature gates and 18 kubelet flags. Misconfigured or now-removed flags will crash your new nodes. Even more critically, kube-proxy is beginning its transition from iptables to nftables, a fundamental change to the network stack.

This article provides actionable steps to identify and mitigate potential issues before you hit upgrade day. It is essential reading for any senior engineer responsible for maintaining robust, scalable Kubernetes clusters.