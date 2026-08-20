---
title: GoFast framework optimizes API validation and documentation with build-time
  generation
source: github
url: https://github.com/Darkblade1995/gofast
date: '2026-08-18'
tags:
- api-performance
- build-time-code-generation
- catchup
- github
- go-ast
- go-framework
- openapi-documentation
- request-validation
- runtime-reflection
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49352983'
comments: https://news.ycombinator.com/item?id=49352983
why_read: This description introduces GoFast, a Go framework that offers significant
  performance improvements for API validation and OpenAPI generation by moving these
  processes from runtime reflection to build-time code generation using go/ast. It
  highlights how this approach provides auditable, boilerplate-free code.
authors:
- fernando-darkbl
---

Go developers, imagine a web framework that completely eliminates runtime reflection for validation and OpenAPI documentation, making your services dramatically faster. GoFast does exactly this, and the benchmarks are compelling.

It generates all necessary code at build time using `go/ast`, so you get real, auditable Go code in your repository. This design choice translates to up to 37.5 times faster isolated validation and approximately 26 percent fewer allocations end-to-end compared to frameworks like Huma.

This is not just an incremental improvement; it is a fundamental shift in how API automation can be handled in Go, moving the performance cost from every request to a one-time build. If you are building high-performance Go services, this approach offers a blueprint for achieving superior runtime efficiency and clarity.
