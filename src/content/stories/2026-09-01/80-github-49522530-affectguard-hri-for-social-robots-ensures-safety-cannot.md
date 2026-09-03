---
title: AffectGuard-HRI for social robots ensures safety cannot be overridden
source: github
url: https://github.com/oleg-vdv/affectguard-hri
date: '2026-09-01'
tags:
- actuation-isolation
- affectguard-hri
- audit-logging
- catchup
- emotion-recognition
- github
- middleware
- policy-arbitration
- ros-2
- safety-envelope
- social-robots
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49522530'
comments: https://news.ycombinator.com/item?id=49522530
why_read: Read this to understand a novel ROS 2 middleware for social robots that
  ensures safety cannot be overridden by rules. It demonstrates multi-modal emotion
  recognition and a robust safety envelope for robot actuation.
authors:
- ipgleg
---

Designing AI systems that are both intelligent and safe requires a fundamental shift in mindset. AffectGuard-HRI introduces a compelling approach for social robots: it assumes its own emotion classifier might be wrong.

This ROS 2-based framework implements a hard, non-negotiable safety envelope. This envelope acts as a crucial arbitration layer, overriding perceived emotional states to ensure safe robot behavior, regardless of potential AI misinterpretations.

For any engineer building systems where AI outputs directly impact real-world actions, this project offers a blueprint for robust, fault-tolerant design. It is a powerful example of how to build safety into the core of AI-driven applications.
