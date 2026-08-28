---
authors:
- hskimse
comments: https://news.ycombinator.com/item?id=49446050
date: '2026-08-26'
depth_score: 8
hn_id: '49446050'
image: /infographics/54-hn-49446050.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- cloudflare-email-routing
- dovecot
- email
- hn
- http2lmtp
- opensmtpd
- residential-ip
- self-hosting
- smtp2go
- wireguard
title: Self-hosting mail without opening a single port
url: https://dilluti0n.com/p/selfhost-mail-without-ports/
utility_score: 8
why_read: This article details a comprehensive technical setup for self-hosting email
  on a home server without opening any network ports. Readers will learn how to bypass
  common challenges like spam filters and residential IP limitations using Cloudflare
  Email Routing and SMTP relay services.
---

Self-hosting email is notoriously difficult, especially without exposing a single port. This engineer built an impressive setup, effectively creating a secure, port-less mail server using Cloudflare Email Routing and a custom Rust HTTP-to-LMTP proxy (`http2lmtp`).

The inbound flow routes mail via Cloudflare Workers to a Cloudflared tunnel, hitting the custom proxy, which then writes to Dovecot via LMTP socket. Outbound mail uses OpenSMTPD and an external relay (smtp2go) to bypass residential ISP reverse DNS issues and ensure deliverability.

This is a masterclass in secure network design and creative problem-solving. You will gain practical insights into using Cloudflare tunnels, custom protocol proxies, and email flow management, which are highly applicable to securing distributed systems beyond just email. It truly shows how to build resilient infrastructure without exposing unnecessary attack surface.