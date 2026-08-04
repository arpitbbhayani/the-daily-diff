---
title: A Near-Field Hardware Disarm Standard for Humanoid Robots
source: github
url: https://github.com/humblelistener/NF_HDP
date: '2026-08-02'
tags:
- catchup
- disarm-protocol
- github
- hardware-standard
- humanoid-robots
- near-field
- rfc
- safety-controller
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 9
hn_id: '49149625'
comments: https://news.ycombinator.com/item?id=49149625
why_read: This proposal outlines a novel near-field hardware disarm standard, allowing
  anyone nearby to safely stop a humanoid robot using a common mobile device. It presents
  a critical safety mechanism for future robotics, functioning as a 'fire alarm' for
  robots.
authors:
- humblelistener
---

Designing safety protocols for physical AI agents is no longer theoretical, it is paramount. This project proposes NF-HDP, an open near-field hardware disarm standard, a literal "fire alarm" anyone nearby can pull for humanoid robots.

The core idea is a small, independent safety controller that sits between the robot's mind and its muscles. Any device in your pocket could trigger it, causing the robot to freeze and cut its cameras. This provides a crucial, universally accessible kill switch.

Every trigger is cryptographically signed, ensuring accountability. This design offers immense utility for those contemplating the real-world deployment of advanced robotics, moving beyond software-only safeguards to robust hardware interlocks. It is a smart trade-off between control and safety, making our AI systems more dependable.
