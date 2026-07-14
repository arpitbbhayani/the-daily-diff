---
title: TLS Certificates for Internal Services Done Right
source: hn
url: https://tuxnet.dev/posts/tls-for-internal-services/
date: '2026-07-09'
tags:
- catchup
- dns
- hn
- internal-services
- public-certificate-authority
- self-signed-certificates
- split-horizon-dns
- tls-certificates
- vpn
- waf
score: 178
hn_id: '48846995'
comments: https://news.ycombinator.com/item?id=48846995
why_read: This article explains how to properly configure TLS certificates for internal
  services using split-horizon DNS and public certificate authorities, avoiding the
  pitfalls of self-signed certificates. You will learn the trade-offs of different
  approaches and understand the "why" behind the recommended solution.
authors:
- "Jakub Ko\u0142odziejczak"
author: "Jakub Ko\u0142odziejczak"
---

Securing internal services with TLS certificates is often a headache, but this article offers a 'right way' to approach it using split-horizon DNS and public CAs. It challenges the common practice of relying on self-signed certificates.The key takeaway is simplifying certificate management across your internal infrastructure, avoiding the pain of distributing trust for self-signed certificates. This is a critical discussion for robust system design and engineering practices.Implementing this approach can significantly enhance the security posture and operational efficiency of your distributed systems. It is about smart trade-offs for long-term stability and security.
