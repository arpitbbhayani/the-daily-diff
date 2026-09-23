---
title: SAML's complexity makes it a fractal of bad design
source: hn
url: https://blog.trailofbits.com/2026/09/21/saml-a-fractal-of-bad-design/
date: '2026-09-21'
tags:
- catchup
- hn
- openid-connect
- protocol-deprecation
- protocol-design
- saml
- single-sign-on
- xml-signature-validation
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49788350'
comments: https://news.ycombinator.com/item?id=49788350
why_read: This post rigorously dissects SAML's problematic design, revealing its complex
  origins and the critical flaws in its XML signature validation. Readers will understand
  why this protocol should be retired in favor of modern alternatives like OpenID
  Connect.
authors:
- radlad
---

SAML, a protocol born from committees, is fundamentally flawed by design, and it is time for it to retire. Its reliance on complex XML signature validation, often handled by brittle C libraries, makes it a continuous source of security headaches and integration challenges.

The article dives into why this complexity is not just an implementation detail, but a core architectural misstep that leads to a "fractal of bad design." This is not just about deprecating an old standard; it is a lesson in how committee-driven design and underlying technical debt can plague systems for decades.

Engineers choosing identity protocols should understand these intrinsic design flaws and strongly favor modern, simpler alternatives like OpenID Connect. It is a critical lesson for anyone building secure, scalable systems.
