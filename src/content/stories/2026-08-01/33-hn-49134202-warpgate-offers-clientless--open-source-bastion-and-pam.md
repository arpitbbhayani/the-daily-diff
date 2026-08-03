---
authors:
- hardex
comments: https://news.ycombinator.com/item?id=49134202
date: '2026-08-01'
depth_score: 7
hn_id: '49134202'
image: /infographics/33-hn-49134202.jpg
interest_score: 8
novelty_score: 6
section: systems
source: hn
tags:
- bastion-host
- catchup
- clientless-access
- hn
- open-source
- privileged-access-management
- role-based-access-control
- secure-remote-access
- session-auditing
- single-sign-on
- two-factor-authentication
- warpgate
title: Warpgate offers clientless, open-source bastion and PAM access
url: https://warpgate.null.page/
utility_score: 9
why_read: This text introduces Warpgate, an open-source, clientless alternative to
  traditional PAMs and VPNs for secure infrastructure access. Readers will learn about
  its features for simplified access management, auditing, and security, all without
  requiring client installations.
---

Managing secure access to diverse internal infrastructure is a significant system design challenge. Warpgate 0.27 offers a compelling open-source, clientless bastion solution that directly addresses this problem.

It functions as a transparent proxy for SSH, HTTPS, RDP, VNC, Kubernetes, PostgreSQL, and MySQL, integrating SSO, RBAC, and live session recording. This means engineers can ditch manual authorized_keys management and simplify access auditing in one place.

Its design, supporting multi-node clustering, load balancing, and S3 for recordings, indicates a focus on scalability and reliability. This tool directly tackles infrastructure bottlenecks and enhances engineering practices around access control.