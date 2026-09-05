---
title: Kubernetes v1.37 enables HorizontalPodAutoscaler to scale workloads to zero
source: hn
url: https://kubernetes.io/blog/2026/09/02/kubernetes-v1-37-hpa-scale-to-zero-beta/
date: '2026-09-03'
tags:
- catchup
- cold-start
- external-metrics
- hn
- horizontal-pod-autoscaler
- kubernetes
- object-metrics
- scale-to-zero
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49547754'
comments: https://news.ycombinator.com/item?id=49547754
why_read: This article details how Kubernetes v1.37 enables the HorizontalPodAutoscaler
  to scale workloads down to zero replicas. Readers will understand the benefits,
  trade-offs, and how to use object or external metrics for this functionality.
authors:
- "Johannes W\xFCrbach"
---

Kubernetes v1.37 just landed a game-changer: the HorizontalPodAutoscaler (HPA) can now natively scale workloads all the way down to zero replicas. This feature, now in Beta and enabled by default, unlocks massive cost savings for event-driven and batch processing systems.

The critical difference? It leverages object or external metrics, like a queue length, which persist even when no pods are running. Traditional CPU or memory metrics vanish with zero pods, preventing scale-up. This design ensures your system remains responsive, spinning up pods only when demand truly arises.

This is not just a minor update; it is a fundamental shift for optimizing cloud infrastructure. If you are running queue consumers or batch jobs, mastering this HPA capability means dramatically lower operational costs and a more efficient, scalable architecture. It is time to rethink your idle resource strategy.
