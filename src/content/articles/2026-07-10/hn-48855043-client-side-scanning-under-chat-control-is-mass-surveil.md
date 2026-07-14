---
title: Client-Side Scanning Under Chat Control Is Mass Surveillance
source: hn
url: https://exitchatcontrol.org/
date: '2026-07-10'
tags:
- catchup
- chat-control
- client-side-scanning
- end-to-end-encryption
- hn
- jurisdiction
- mass-surveillance
- open-source-software
- privacy
- self-hosting
score: 103
hn_id: '48855043'
comments: https://news.ycombinator.com/item?id=48855043
why_read: This text rigorously explains how the EU's "Chat Control" proposal, particularly
  client-side scanning, constitutes mass surveillance. It clarifies why common privacy
  tools are insufficient against this threat and details the fundamental measures
  required for genuine protection.
authors:
- mparramon
author: mparramon
---

Client-side scanning proposals like the EU's "Chat Control" fundamentally challenge the security models we build. It is not just a privacy issue; it is a system design problem that impacts every engineer.

Imagine software installed on your device that inspects every message, photo, or link before it is encrypted. This means end-to-end encryption cannot protect you if the client application or operating system cooperates. Your VPN also cannot help.

True protection comes from open-source software that refuses to implement such scanning, favorable jurisdictions, self-hosting, and maintaining control over your device's operating system. These are critical considerations for robust system architecture.

Understanding this technical threat is essential for anyone involved in secure engineering practices.
