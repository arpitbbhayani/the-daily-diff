---
title: Tracking Kubernetes accelerator usage per pod with eBPF
source: github
url: https://github.com/jrzayev/kubenpu
date: '2026-10-10'
tags:
- catchup
- cgroups
- drm-ioctl
- ebpf
- github
- kubernetes
- npu
- prometheus
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50036869'
comments: https://news.ycombinator.com/item?id=50036869
why_read: Read this to understand how eBPF hooks into kernel DRM ioctl calls to monitor
  per-pod accelerator usage. You will learn how to efficiently associate hardware
  device calls with Kubernetes container cgroups.
authors:
- jrzayev
---

Tracking graphics accelerator usage at the container level has historically required intrusive userspace sidecars or vendor-specific daemonsets.

KubeNPU solves this observability bottleneck by attaching an eBPF fentry program directly to the Linux kernel function drm_ioctl. Because every Direct Rendering Manager and accelerator driver funnels userspace execution through this entry point, the probe intercepts all hardware submissions at the lowest common denominator.

The in-kernel filter discards irrelevant ioctls before they ever touch userspace, reducing event collection overhead by more than fifty percent. When a submission passes the filter, the eBPF program pushes the kernel cgroup identifier into a ring buffer. The Go userspace daemon then translates that identifier into the corresponding pod name via containerd container runtime state.

Rebuilding the cgroup lookup index immediately upon a cache miss ensures newly scheduled workloads are captured on their very first accelerator event.

Clean kernel telemetry beats messy userspace instrumentation every single time.
