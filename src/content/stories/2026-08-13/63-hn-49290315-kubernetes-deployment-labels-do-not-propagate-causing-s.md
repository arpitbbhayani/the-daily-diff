---
title: Kubernetes Deployment labels do not propagate causing silent sidecar failures
source: hn
url: https://pandocore.io/blog/sidecar-injection-silent-failures
date: '2026-08-13'
tags:
- admission-webhook
- catchup
- deployment
- hn
- kubernetes
- labels
- pod-template
- sidecar-injection
- silent-failure
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49290315'
comments: https://news.ycombinator.com/item?id=49290315
why_read: This article explains why a common `kubectl label deployment` command silently
  fails to inject sidecars in Kubernetes. Readers will learn the correct method of
  applying labels to the pod template to ensure successful sidecar injection.
authors:
- Eliot Ferstl
---

Sidecar injection fails silently in Kubernetes for one common reason, and it is a painful lesson. Many engineers label a Deployment directly, expecting the sidecar to appear, but this does not work as expected.

The critical detail is that sidecar injection webhooks match on labels of the *pod template*, not the Deployment itself. If you label the Deployment, the pods do not inherit that label, the webhook never fires, and no error is reported anywhere. You are left wondering why your service mesh is not working.

This small but crucial distinction between `metadata.labels` and `spec.template.metadata.labels` is a prime example of Kubernetes's often-subtle operational complexities. Understanding this saves hours of frustrating, silent debugging.

Knowing this pattern helps you ensure your distributed systems behave as intended.
