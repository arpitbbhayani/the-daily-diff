---
title: Android 17 certificate transparency breaks custom CA traffic interception
source: hn
url: https://httptoolkit.com/blog/android-17-certificate-transparency/
date: '2026-09-23'
tags:
- android-17
- catchup
- certificate-transparency
- custom-cas
- hn
- http-toolkit
- security-research
- tls-interception
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49813144'
comments: https://news.ycombinator.com/item?id=49813144
why_read: Understand how Android 17's default certificate transparency enforcement
  breaks custom CA traffic interception and learn how to adapt your TLS inspection
  workflows.
authors:
- Tim Perry
---

Android 17 introduces default enforcement for Certificate Transparency, which completely breaks traditional local proxy workflows using custom Certificate Authorities.

For years, intercepting traffic for security audits, performance profiling, and reverse engineering relied on installing a custom user CA on the device. Because Certificate Transparency requires certificates to be logged in public append-only logs with signed certificate timestamps, local synthetic certificates generated on the fly get immediately rejected by the network security config.

To bypass this limitation without compromising root certificate stores across whole test environments, tooling must patch runtime verification hooks or inject signed transparency records during development builds. This shift pushes mobile client debugging closer to desktop environments, where security transparency invariants cannot be bypassed by simply adding a certificate to the trust store.

If your team relies on traffic interception for testing or reverse engineering, audit your mobile testing pipeline before Android 17 reaches general availability.
