---
title: Reverse-engineering the architecture powering ChatGPT intelligent UI
source: hn
url: https://www.openui.com/blog/how-chatgpt-intelligent-ui-works
date: '2026-10-08'
tags:
- catchup
- client-runtime
- dil
- generative-ui
- hn
- intelligent-ui
- server-side-compilation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50008914'
comments: https://news.ycombinator.com/item?id=50008914
why_read: Read this breakdown to understand the architecture behind ChatGPT's interactive
  interface. You will learn how model inference formats, server-side compilation,
  and sandboxed client execution work together to render dynamic components.
authors:
- Thesys Engineering Team
---

Generative user interfaces often feel like magic, but under the hood they rely on tightly coordinated distributed pipelines between the model, backend compilation, and client execution runtimes.

A deep dive into ChatGPT Intelligent UI reveals how inline interactive components avoid expensive round-trip model calls. The model does not output raw HTML or JSON. Instead, it streams an intermediate Domain Interface Language that merges Markdown, JSX-like components, and scoped state handlers.

On the backend, incoming token streams are compiled on the fly into lightweight executable JavaScript programs alongside static data payloads. The client environment then executes these programs inside a strict sandbox, rendering native components rather than untrusted web views.

Separating declarative generation from deterministic client-side state is the cleanest architectural pattern yet for building low-latency generative interfaces.
