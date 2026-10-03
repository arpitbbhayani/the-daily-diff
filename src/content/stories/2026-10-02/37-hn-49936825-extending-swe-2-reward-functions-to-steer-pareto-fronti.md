---
title: Extending SWE-2 reward functions to steer Pareto frontier improvements
source: hn
url: https://anishlk.com/swe-2-extended/
date: '2026-10-02'
tags:
- catchup
- cost-optimization
- hn
- pareto-frontier
- post-training
- reward-functions
- swe-2
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49936825'
comments: https://news.ycombinator.com/item?id=49936825
why_read: Learn how dynamically updating reward function penalties during post-training
  lets developers deliberately steer model trade-offs between cost and solve rate
  along the Pareto curve.
authors:
- Anish Lakkapragada
---

Post-training reward functions often force an unopinionated trade-off between inference compute and task accuracy. In Cognition's SWE-2, the post-training reward balances solve rate against cost using a fixed slope-matched penalty derived from the base model's Pareto frontier. While this pushes the frontier forward, it leaves teams unable to dictate whether they prioritize cost reduction or maximum capability.

By dynamically updating the slope penalty parameter lambda throughout the training run rather than holding it static, you can steer post-training directly toward your operational constraints. If your target is low-cost deployment at equal capability, lambda is increased to punish token overhead; if your goal is frontier benchmark performance, lambda relaxes to allow higher reasoning budgets.

For engineering teams fine-tuning or distillation-training specialized coding agents, dynamic Pareto steering turns post-training into an explicit budget optimization problem rather than a blunt capability push.

Controlling reward slopes during RL provides fine-grained control over model latency, cost, and task accuracy.
