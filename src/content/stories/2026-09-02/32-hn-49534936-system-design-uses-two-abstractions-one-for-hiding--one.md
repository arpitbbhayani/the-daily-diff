---
title: System design uses two abstractions one for hiding, one for reducing
source: hn
url: http://muratbuffalo.blogspot.com/2026/05/the-two-abstractions-of-system-design.html
date: '2026-09-02'
tags:
- abstraction
- catchup
- formal-methods
- hn
- modeling
- modularity
- system-design
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49534936'
comments: https://news.ycombinator.com/item?id=49534936
why_read: 'This article clarifies the common confusion between two distinct types
  of abstraction: modularity (hiding internals) and modeling (reducing to essential
  behaviors). Readers will learn to distinguish these concepts, enhancing their understanding
  of system design and formal modeling.'
authors:
- ubolonton_
---

System design often conflates two distinct forms of abstraction that are critical for senior engineers to understand. The blog post from Murat Buffalo brilliantly dissects "modularity abstraction" and "modeling abstraction," revealing why many struggle with formal methods like TLA+.

Modularity abstraction focuses on encapsulation and hiding internals behind interfaces, which is what most computer science curricula emphasize. In contrast, modeling abstraction is about reducing a system to its minimal behavioral skeleton, stripping away orthogonal details to focus purely on properties like correctness or safety.

Grasping this distinction changes how you approach complex system design. It is not just about managing complexity by hiding, but also about simplifying to reason effectively. This perspective is vital for designing robust, verifiable systems that truly work.
