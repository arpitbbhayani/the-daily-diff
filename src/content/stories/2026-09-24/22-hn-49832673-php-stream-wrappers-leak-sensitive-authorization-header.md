---
title: PHP stream wrappers leak sensitive authorization headers across redirects
source: hn
url: https://daubois.dev/blog/cve-2026-91766-php-http-redirect-credential-leak/
date: '2026-09-24'
tags:
- catchup
- credential-leak
- cve-2026-91766
- file-get-contents
- hn
- http-redirect
- php
- stream-context
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49832673'
comments: https://news.ycombinator.com/item?id=49832673
why_read: Understand how PHP stream wrappers unintentionally forward authorization
  headers during cross-host redirects. You will learn the mechanics behind this credential
  leak and how redirect handling fails at the C level.
authors:
- Alexandre Daubois
---

When sending authenticated requests through PHP standard stream wrappers like file_get_contents, redirects can silently leak secret tokens. CVE-2026-91766 reveals that PHP forward-location behavior historically passed Authorization, Cookie, and Proxy-Authorization headers straight to third-party target hosts upon receiving a 302 redirect.

The underlying flaw lived directly inside ext/standard/http_fopen_wrapper.c. While the engine explicitly stripped Content-Length and Content-Type on method changes during redirects, it left sensitive authentication headers untouched in the request stream context. Even worse, dropping from HTTPS to plain HTTP or changing ports still forwarded credentials across cleartext connections.

Curl resolved this exact header forwarding vulnerability back in 2018, yet standard PHP runtime wrappers left it unpatched across multiple release branches until versions 8.2.34, 8.3.35, 8.4.26, and 8.5.11. Backend systems relying on default stream contexts to call external webhooks or third-party APIs have been exposed to credential leakage whenever an endpoint issues an arbitrary redirect.

Never trust runtime defaults to handle cross-origin authorization sanitization automatically.
