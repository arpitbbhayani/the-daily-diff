---
title: Java 27 makes G1 default and improves TLS security
source: hn
url: https://www.loicmathieu.fr/wordpress/informatique/java-27-whats-new/
date: '2026-07-10'
tags:
- catchup
- g1
- garbage-collector
- hn
- java-27
- key-exchange
- post-quantum-cryptography
- tls-1.3
score: 54
hn_id: '48857962'
comments: https://news.ycombinator.com/item?id=48857962
why_read: This article explains the new features in Java 27, detailing why the G1
  garbage collector is now default everywhere and how TLS 1.3 security is enhanced
  against post-quantum threats.
authors:
- Loic
author: Loic
---

Java 27 is here, bringing some impactful changes that will affect performance and security across the board. The biggest news? G1 is now the default garbage collector for *all* environments.

This is not a minor tweak. Since Java 9, G1 has been the default for larger heaps, but Serial GC held sway for smaller ones. Now, G1's improvements have eliminated that gap.

It means better performance and lower native memory consumption even in resource-constrained environments, ensuring more consistent application behavior and better resource utilization.

Beyond GC, Java 27 also introduces post-quantum hybrid key exchange for TLS 1.3. This is a proactive step towards future-proofing network communications against quantum computing threats.

Understanding these updates is vital for engineers building high-performance, secure, and scalable Java applications.
