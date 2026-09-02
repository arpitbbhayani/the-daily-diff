---
title: curl experimentally supports HTTP Message Signatures per RFC 9421
source: hn
url: https://daniel.haxx.se/blog/2026/07/27/http-message-signatures-with-curl/
date: '2026-08-31'
tags:
- catchup
- command-line-options
- curl
- digital-signatures
- experimental-feature
- hn
- http-message-signatures
- libcurl-api
- message-integrity
- rfc-9421
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49512561'
comments: https://news.ycombinator.com/item?id=49512561
why_read: This post describes curl's new experimental support for HTTP Message Signatures
  as defined by RFC 9421. Readers will learn how to use the new command-line and libcurl
  options to ensure HTTP request integrity across various intermediaries.
authors:
- Daniel Stenberg
---

The digital signature on your HTTP messages is about to get a serious upgrade. RFC 9421, the new standard for HTTP Message Signatures, is now experimentally supported in `curl`. This is a big deal for engineers dealing with complex distributed systems.

Think about your typical request flow: client -> CDN -> load balancer -> proxy -> application. How do you verify that critical headers and components of your HTTP message arrive at the ultimate application unmodified? This new mechanism provides cryptographic assurance over selected parts of an HTTP message.

Daniel Stenberg, the `curl` author, details how it works with new `curl` command-line options (`--httpsig-algo`, `--httpsig-key`, `--httpsig-keyid`, `--httpsig-headers`) and `libcurl` options. This is a crucial tool for ensuring message integrity in modern, multi-layered HTTP architectures, enhancing trust and reliability across the stack.
