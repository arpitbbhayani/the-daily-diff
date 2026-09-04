---
title: us-central1 Service Disruption Recovery Lessons from Storm Event
source: hn
url: https://nebius.com/blog/posts/incident-post-mortem-analysis-us-central1-service-disruption-on-august-19
date: '2026-09-02'
tags:
- catchup
- cooling-system
- data-center
- hn
- manual-intervention
- post-mortem
- service-disruption
- us-central1
- virtual-machines
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 6
hn_id: '49533243'
comments: https://news.ycombinator.com/item?id=49533243
why_read: Understand the cascading failures from a physical storm to a major cloud
  region outage. Learn about the challenges in restoring services, including manual
  interventions and the impact on virtual machines and other cloud resources.
authors:
- halit_okumus
---

A data center cooling failure can take down an entire cloud region, but the real challenges often begin during recovery. Nebius's us-central1 post-mortem details a storm-induced outage and the arduous path back online.

This incident highlights how physical infrastructure failures cascade through highly distributed systems, impacting GPU/CPU compute, object/block storage, and Managed Kubernetes. The six-hour facility recovery was dwarfed by the need for manual intervention across several recovery paths, especially for customer resources like virtual machines with disk attachments.

This post-mortem provides invaluable lessons for anyone involved in system design and resilience planning. It underscores the importance of automating every aspect of disaster recovery, even hard power loss scenarios, and meticulously testing the full-region restart sequence. You can learn how to anticipate and mitigate similar failure modes in your own complex systems.

Understanding these real-world incidents is paramount for building truly robust distributed systems.
