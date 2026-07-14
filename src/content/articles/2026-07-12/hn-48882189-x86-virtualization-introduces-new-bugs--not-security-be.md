---
title: x86 Virtualization Introduces New Bugs, Not Security Benefits
source: hn
url: https://marc.info/?l=openbsd-misc&m=119318909016582
date: '2026-07-12'
tags:
- bugs
- catchup
- hn
- operating-systems
- security
- x86-virtualization
score: 78
hn_id: '48882189'
comments: https://news.ycombinator.com/item?id=48882189
why_read: This piece offers a stark, critical take on x86 virtualization's security
  claims, arguing it introduces more vulnerabilities rather than benefits. Read it
  to challenge conventional wisdom about virtualization and consider its inherent
  security risks.
authors:
- Theo de Raadt
author: Theo de Raadt
---

Theo de Raadt's 2007 take on x86 virtualization security remains a masterclass in challenging assumptions.He argued that adding another kernel layer full of new bugs on a complex x86 architecture did not inherently provide security benefits.Instead, it just created a 'new pile of shit' for attackers to exploit.This fiery perspective highlights a core tenet of system design: complexity is the enemy of security.It forces engineers to question whether a new abstraction truly enhances a system or simply shifts vulnerabilities.This historical insight is a potent reminder to scrutinize the true costs of 'security benefits' in any architectural decision.Simple designs often yield more robust systems.
