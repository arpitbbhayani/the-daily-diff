---
title: Network time security makes internet time synchronization verifiable
source: hn
url: https://engineering.fb.com/2026/10/06/production-engineering/nts-authenticated-time-at-meta/
date: '2026-10-06'
tags:
- catchup
- hn
- network-time-security
- ntp
- stateless-cookies
- time-synchronization
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49980791'
comments: https://news.ycombinator.com/item?id=49980791
why_read: Understand how Meta implements stateless Network Time Security to make time
  synchronization cryptographically verifiable. You will learn why securing foundational
  time protocols is essential for modern certificate and token validation.
authors:
- Oleg Obleukhov
---

Network Time Protocol has powered internet time synchronization since 1985 without built-in packet authentication. Every TLS certificate check, authentication token lifespan, distributed log sequence, and replay protection window fundamentally depends on an accurate system clock, yet standard NTP accepts unverified 48-byte UDP responses that any network adversary can spoof or tamper with in transit.

Meta has transitioned its public time infrastructure to Network Time Security (RFC 8915), deploying an authenticated time service at nts.meta.com. To handle massive scale without degrading performance, their implementation maintains zero per-client state on servers by deriving cookie encryption keys dynamically rather than storing or replicating session data across fleet nodes. They have open-sourced the entire protocol, server, and client implementation in their Time library.

Securing time at the network boundary eliminates a critical attack surface for modern distributed infrastructure.
