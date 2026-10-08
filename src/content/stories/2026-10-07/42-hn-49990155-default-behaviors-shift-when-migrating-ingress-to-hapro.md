---
title: Default behaviors shift when migrating ingress to HAProxy
source: hn
url: https://nine.ch/en/blog/haproxy-defaults-after-ingress-nginx-migration/
date: '2026-10-07'
tags:
- catchup
- haproxy
- hn
- http-redirects
- ingress-nginx
- kubernetes
- migration
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49990155'
comments: https://news.ycombinator.com/item?id=49990155
why_read: Learn about the subtle differences in default behaviors and configurations
  when migrating Kubernetes workloads from ingress-nginx to HAProxy to avoid breaking
  production traffic.
authors:
- Demian Thoma
---

Migrating your Kubernetes ingress layer between ingress-nginx and HAProxy involves more than matching Ingress resource annotations. While both controllers parse identical Ingress specifications, their underlying operational defaults diverge significantly in ways that can break production workloads.

A common surprise is redirect semantics: ingress-nginx defaults HTTP-to-HTTPS redirects to a permanent 308, whereas haproxy-ingress issues a temporary 302. While standard browsers handle both seamlessly, this switch alters intermediate proxy caching, crawler behaviors, and API consumer redirects. Other critical behavioral discrepancies lurk in connection queuing limits, backend timeout configurations, and default status codes during upstream failures.

Treating ingress controllers as drop-in interchangeable proxies leads to hidden outages. Always audit connection pooling and header handling defaults before cutting over live production traffic.
