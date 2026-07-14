---
title: Anatomy of a UPI Transaction Beyond the User View
source: hn
url: https://timeseriesofindia.com/economy/reads/upi-architecture/
date: '2026-07-11'
tags:
- catchup
- fintech
- hn
- payment-system
- real-time-payments
- transaction-flow
- upi
score: 231
hn_id: '48873457'
comments: https://news.ycombinator.com/item?id=48873457
why_read: This piece dissects the unseen steps of a UPI payment, revealing the intricate
  chain of organizations and checks involved between your PIN entry and the final
  confirmation. It helps you understand the "who, what, and where" of this globally
  leading real-time payment system.
authors:
- prtk25
author: prtk25
---

India's UPI handles over 2,272 crore payments monthly, making it one of the largest real-time payment systems globally. Ever wonder what happens in those two or three seconds between entering your PIN and the green tick? This article dissects the entire transaction anatomy. It reveals a complex choreography between your app, your Payment Service Provider, your bank, the central NPCI switch, the payee's bank, and their PSP. Each entity performs specific checks and hands off the request in a chain that completes before you look up from your screen. This detailed breakdown offers a masterclass in designing incredibly scalable, fault-tolerant distributed systems for critical financial infrastructure. It is a brilliant example of software architecture in action.
