---
authors:
- Bluestein
comments: https://news.ycombinator.com/item?id=49676135
date: '2026-09-12'
depth_score: 7
hn_id: '49676135'
image: /infographics/31-github-49676135.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-routing
- capability-awareness
- catchup
- github
- multi-cloud-ai
- protocol
title: Role-model protocol routes AI models based on capabilities
url: https://github.com/try-works/role-model
utility_score: 8
why_read: This describes a protocol for routing AI models based on their capabilities
  and requirements. Readers will learn how to assign the right model for the right
  job, combining local and cloud AI or routing across multiple cloud providers.
---

Building robust AI applications often means juggling multiple LLMs, local and cloud. The `role-model` protocol offers a compelling solution for this, providing capability-aware routing to assign the right model for the right job.

This open protocol defines a "durable contract" for what a request needs, what an endpoint can do, and what policy allows. It is designed to intelligently route requests, whether you are using a mix of local and cloud models or orchestrating across several cloud providers. This directly addresses performance and cost optimization in complex AI deployments.

Engineers building production LLM systems will find this highly actionable. It moves beyond simple load balancing to intelligent, policy-driven model selection, a crucial step for scalable and efficient AI infrastructure.