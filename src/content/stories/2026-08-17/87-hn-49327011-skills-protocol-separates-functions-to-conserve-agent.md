---
authors:
- Li Yin
- Zhi Li
- Zhan Shi
- Haoran Zhang
- Haebin Seong
- Zhangyang (Atlas) Wang
comments: https://news.ycombinator.com/item?id=49327011
date: '2026-08-17'
depth_score: 7
hn_id: '49327011'
image: /infographics/87-hn-49327011.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agent-skills
- catchup
- hn
- open-protocol
- prompt-residency
- skill-delivery
- skill-discovery
title: '@skills protocol separates functions to conserve agent prompt residency'
url: https://arxiv.org/abs/2608.12610
utility_score: 8
why_read: This paper proposes the @skills open protocol to solve inefficiencies in
  current agent skill delivery, particularly regarding prompt residency. Readers will
  understand how separating skill functions can improve discoverability and enable
  more efficient agent architectures.
---

Current AI agent frameworks often struggle with a fundamental scaling problem: prompt residency. Every skill's description competes for limited, reliable trigger slots, forcing an unsustainable installation model that clogs context windows and limits agent capabilities.

The new "@skills" protocol offers a clever architectural solution by separating skill content, persistence, and automatic triggering. It allows skills to be addressed via simple paths, much like files in a Git-tracked tree, eliminating the need for installation or constant prompt residency. This means agents can read and use skills only when needed, vastly expanding their functional long tail without overwhelming the LLM's context.

This design shifts agent skill management from a resource-constrained install model to an on-demand, path-based access system. It is a pragmatic step forward for building more modular, scalable, and robust AI agents, providing a blueprint for future LLM infrastructure.