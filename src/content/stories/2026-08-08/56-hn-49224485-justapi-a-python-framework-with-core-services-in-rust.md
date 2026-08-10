---
title: JustAPI a Python framework with core services in Rust
source: hn
url: https://blog.swadhin.cv/blog/just-api-a-python-framework/
date: '2026-08-08'
tags:
- catchup
- hn
- justapi
- performance
- python
- rust
- web-framework
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49224485'
comments: https://news.ycombinator.com/item?id=49224485
why_read: This article introduces JustAPI, a new Python web framework that uses Rust
  for its core services, explaining its design philosophy and what problems it aims
  to solve for improved performance.
authors:
- Swadhin Biswas
---

Python web frameworks are often criticized for performance bottlenecks, but what if the framework itself was written in Rust? JustAPI pushes this idea further than most, moving not just the web server, but also routing, TLS, request validation, JSON serialization, and even database access into a high-performance Rust core. 

Your Python code then focuses purely on application logic, gaining substantial speedups without rewriting everything. This is a game-changer for backend engineers looking to squeeze more performance out of their Python services, without sacrificing developer experience or ecosystem benefits. 

It is a pragmatic approach to leveraging Rust's efficiency for the parts that matter most in web serving, while keeping Python's flexibility for business logic. This hybrid architecture offers a clear path to highly scalable and responsive Python APIs.
