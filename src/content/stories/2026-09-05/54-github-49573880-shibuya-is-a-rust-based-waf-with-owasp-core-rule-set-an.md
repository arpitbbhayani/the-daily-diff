---
title: Shibuya is a Rust-based WAF with OWASP Core Rule Set and specific limitations
source: github
url: https://github.com/theghostshinobi/shibuya
date: '2026-09-05'
tags:
- catchup
- command-injection
- executable-file-uploads
- github
- log4shell
- nosql-injection
- owasp-core-rule-set
- path-traversal
- reverse-proxy
- rust
- security
- sql-injection
- ssti
- web-application-firewall
- xss
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49573880'
comments: https://news.ycombinator.com/item?id=49573880
why_read: Read this to learn about Shibuya, a new Web Application Firewall written
  in Rust. It details its core features like OWASP Core Rule Set integration and transparently
  declares its current limitations, which is crucial for deployment.
authors:
- theghostshinobi
---

Building a Web Application Firewall (WAF) is a complex system design challenge, and Shibuya WAF offers a robust, open-source solution built in Rust using Pingora.

This project functions as a reverse proxy, inspecting requests and implementing the OWASP Core Rule Set. It is a fantastic demonstration of applying modern systems programming languages for high-performance network infrastructure. The explicit declaration of current limitations in the README also shows excellent engineering transparency.

This is a valuable resource for anyone interested in network security internals, high-performance Rust applications, or scalable system architecture. You can see how a critical piece of infrastructure is engineered.
