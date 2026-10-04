---
title: Declarative event-driven workflow automation using Kubernetes custom resources
source: github
url: https://github.com/kubezap/kubezap-operator
date: '2026-10-03'
tags:
- catchup
- custom-resource-definitions
- declarative-workflows
- event-driven-automation
- github
- kubernetes-operator
- secret-management
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49947309'
comments: https://news.ycombinator.com/item?id=49947309
why_read: Learn how KubeZap enables secure, declarative workflow automation inside
  Kubernetes without external dependencies or vendor lock-in.
authors:
- borfswitch
---

Most workflow automation engines require dedicated runtime clusters, external SaaS services, or sprawling web UI deployments that complicate secret management. Bringing declarative workflows directly into Kubernetes Custom Resource Definitions removes that overhead entirely.

KubeZap operates as a native Kubernetes operator that triggers automations via webhooks, Kafka events, cron schedules, or resource mutations. It handles data transformations, conditional branching, and retry policies purely through version-controlled YAML.

The security architecture is particularly well thought out. Secrets remain strictly within the cluster trust boundary. The controller resolves sensitive variables in-memory and hands a substituted payload to isolated, low-privilege HTTP runner pods with zero Kubernetes API permissions.

Treating business workflows with the same declarative infrastructure semantics as pods and services simplifies both operations and auditing.
