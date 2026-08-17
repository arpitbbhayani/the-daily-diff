---
title: OAuth's non-orientability explains confusion with OpenID Connect
source: hn
url: https://workshop.vennfactory.com/p/the-non-orientability-of-oauth
date: '2026-08-15'
tags:
- authentication
- authorization
- catchup
- delegation
- hn
- non-orientability
- oauth
- openid-connect
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49309924'
comments: https://news.ycombinator.com/item?id=49309924
why_read: This article explains why OAuth is difficult to understand by framing it
  with the concept of non-orientability. Readers will gain insight into the nuanced
  differences between authentication, authorization, and delegation within OAuth and
  OpenID Connect.
authors:
- Eve Maler
---

Many engineers struggle to articulate the precise differences between authentication, authorization, and delegation when discussing OAuth and OpenID Connect. This article frames that inherent confusion brilliantly using the analogy of "non-orientable mathematical spaces."

Just as a Mobius strip seems to flip direction as you traverse it, the roles and flows in OAuth can feel disorienting. It helps to disentangle the 'who are you' (authentication), 'what are you allowed to do' (authorization), and 'who gave you permission to do it on my behalf' (delegation).

Understanding this "non-orientability" helps clarify why OAuth, which focuses on delegation, preceded OIDC, which addresses authentication. This is not just theoretical; a robust mental model of these distinctions is crucial for designing secure and scalable distributed systems.

Mastering these concepts transforms complex security flows into clear architectural decisions.
