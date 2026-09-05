---
title: Nginx 1.31.5 introduces Control API and predicate locations
source: hn
url: https://www.linuxcompatible.org/story/nginx-1315-introduces-a-builtin-json-parser-control-api-and-predicate-locations-in-september-mainline-release/
date: '2026-09-03'
tags:
- catchup
- client-body-early-read
- control-api
- hn
- json-parser
- nginx
- predicate-locations
- runtime-management
- variable-driven-routing
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49549308'
comments: https://news.ycombinator.com/item?id=49549308
why_read: This text explains the significant new architectural features in Nginx 1.31.5,
  including the Control API for runtime management and predicate locations for variable-driven
  routing. Readers will learn how these enhancements push Nginx toward a more programmable
  platform.
authors:
- Ava Hahn
- Roman Arutyunyan
---

Nginx 1.31.5 delivers critical architectural features that transform how you manage and route traffic in scalable systems. This mainline release introduces a Control API, predicate locations, and a built-in JSON parser.

The new Control API provides an HTTP/1 REST interface for runtime management, allowing you to query processes or dump configurations dynamically. This moves Nginx closer to a programmable platform, enabling live reloads and more flexible operational control.

Predicate locations, evaluated at runtime, enable declarative, variable-driven routing. This means your Nginx configuration can respond to complex conditions without external scripting, simplifying advanced traffic management logic.

A built-in JSON parser streamlines handling JSON payloads, removing the need for external modules in many cases. These additions are not just incremental updates; they are significant enhancements that simplify the orchestration of complex microservices and distributed applications.

Embrace these new capabilities to build more resilient and adaptable infrastructures.
