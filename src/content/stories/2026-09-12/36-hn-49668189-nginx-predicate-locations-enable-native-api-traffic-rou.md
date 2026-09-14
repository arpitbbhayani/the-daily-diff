---
title: NGINX predicate locations enable native API traffic routing
source: hn
url: https://blog.nginx.org/blog/predicate-routing-for-native-handling-of-api-traffic
date: '2026-09-12'
tags:
- api-traffic
- catchup
- hn
- http-routing
- location-blocks
- nginx
- predicate-routing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49668189'
comments: https://news.ycombinator.com/item?id=49668189
why_read: This post explains how NGINX 1.31.5's new "predicate locations" feature
  enables native, non-scripted routing of API traffic. It addresses the problem of
  inefficient HTTP routing when application engineers misuse protocol conventions.
authors:
- Nick Shadrin
---

NGINX is leveling up its routing game. Their new 'predicate locations' in NGINX 1.31.5 are a game-changer for handling complex API traffic, moving beyond simple URL or method matching.

This means you can now define routing rules based on *any* variable in an HTTP request – headers, body content, even custom logic – directly within NGINX configuration. It is a powerful leap from typical proxies that struggle when application engineers put routing logic into non-standard places.

This enhancement allows for much more efficient, native, and maintainable API gateway and load balancer configurations, reducing the need for custom scripting and significantly streamlining your distributed system's traffic flow. It is a must-know for anyone building scalable microservices.
