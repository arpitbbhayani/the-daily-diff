---
title: Control agent behavior by promoting and demoting resources
source: hn
url: https://lexifina.com/blog/see-inside-your-agents-to-fix-them
date: '2026-08-06'
tags:
- agent-behavior
- catchup
- hn
- resource-demotion
- resource-promotion
- resource-tuning
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49204271'
comments: https://news.ycombinator.com/item?id=49204271
why_read: This text provides a structured framework for manipulating agent behavior
  by controlling access to resources like tools, memory, and subagents. Readers will
  learn specific strategies for promoting and demoting resources to tune agent performance
  and alignment.
authors:
- alansaber
---

The opaque nature of AI agents often makes debugging a nightmare. This article offers a structured approach to "behavioral tuning" that gives engineers the leverage needed to diagnose and fix agent issues.

The core idea is to think of an agent's capabilities as resources you can explicitly "promote," "defer," or "demote." This includes managing tool schemas, memory context, and even access to subagents. For instance, you can preload a tool's schema for immediate access or only advertise its availability, loading details on demand.

Furthermore, the concept of "lenses" - examining performance, execution, and user alignment - provides a powerful mental model for introspection. Understanding why an agent took a specific path, or how its context was compacted, is essential for building robust, reliable AI systems. This moves beyond generic prompt engineering into true agent orchestration.
