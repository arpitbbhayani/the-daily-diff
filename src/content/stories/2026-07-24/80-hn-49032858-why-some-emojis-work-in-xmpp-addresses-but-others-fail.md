---
authors:
- Georg Lukas
comments: https://news.ycombinator.com/item?id=49032858
date: '2026-07-24'
depth_score: 9
hn_id: '49032858'
image: /infographics/80-hn-49032858.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- address-validation
- catchup
- client-implementations
- distributed-systems
- emojis
- hn
- precis
- rfc
- server-implementations
- unicode
- xmpp
title: Why some emojis work in XMPP addresses but others fail
url: https://op-co.de/blog/posts/emoji_xmpp_address/
utility_score: 7
why_read: Read this to understand the complex specifics of XMPP address validation
  and why certain Unicode characters, like emojis, are inconsistently supported across
  clients and servers due to RFC interpretations. You will learn about the 19-RFC
  deep dive into internationalized string processing for XMPP.
---

You might wonder if emojis are allowed in XMPP addresses. The answer is a deep dive across 19 RFCs, revealing an unexpected complexity that goes far beyond a simple yes or no.

This article meticulously unpacks the history and evolution of XMPP addressing, from its original specification to modern Unicode and IDNA standards. It exposes the nuanced interactions between different RFCs and how client/server implementations interpret these rules, leading to fascinating interoperability challenges.

This is a masterclass in protocol design and the hidden challenges of internationalization. You will gain invaluable insights into how seemingly minor details can cascade into significant system design considerations when dealing with global character sets.