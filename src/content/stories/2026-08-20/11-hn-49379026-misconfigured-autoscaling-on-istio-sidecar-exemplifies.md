---
title: Misconfigured autoscaling on Istio sidecar exemplifies component substitution
  fallacy
source: hn
url: https://surfingcomplexity.blog/2026/08/19/github-autoscaling-and-the-component-substitution-fallacy/
date: '2026-08-20'
tags:
- autoscaling
- catchup
- component-substitution-fallacy
- github-outage
- hn
- istio-sidecar
- misconfiguration
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49379026'
comments: https://news.ycombinator.com/item?id=49379026
why_read: Readers will learn how a subtle autoscaling misconfiguration on an Istio
  sidecar can cause a system outage, illustrating the 'component substitution fallacy'.
  It highlights the importance of correctly defining autoscaling policies for all
  service components.
authors:
- Lorin Hochstein
---

GitHub's recent outage from an Istio sidecar hitting concurrency limits is a classic illustration of the 'component substitution fallacy.' This is where engineers replace a bottleneck, only to inadvertently shift the problem to a different part of the system or introduce a new failure mode.

The article explains that the autoscaling policy was misconfigured to watch the host service but not the sidecar's limits. This meant the service scaled up, but the attached sidecars became the new choke point, leading to saturation. It is a critical reminder that autoscaling requires comprehensive metric monitoring across all relevant components, not just the primary application.

You must consider *all* resources and dependencies when designing scaling strategies. Replacing a slow component with a fast one does not eliminate the need for careful resource planning and robust observability across the entire system. Think holistically about your distributed system's breaking points.
