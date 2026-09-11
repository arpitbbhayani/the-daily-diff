---
title: OpenTelemetry brings full runtime observability directly into VS Code
source: hn
url: https://marketplace.visualstudio.com/items?itemName=SukantaSaha.opentelemetry
date: '2026-09-09'
tags:
- catchup
- debugging
- hn
- logs
- metrics
- observability
- opentelemetry
- otlp
- traces
- visual-studio-code
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49629979'
comments: https://news.ycombinator.com/item?id=49629979
why_read: This extension simplifies OpenTelemetry debugging and observability by embedding
  an OTLP receiver directly within VS Code, eliminating the need for external tools
  and streamlining development workflows.
authors:
- Sukanta Saha
---

Debugging distributed systems locally often means wrestling with complex observability setups, including deploying Jaeger, Zipkin, or OpenTelemetry Collectors. A new VS Code extension simplifies this dramatically.

It embeds a full OTLP receiver directly into your IDE. This means you can point any OTLP-compatible SDK at it and instantly visualize logs, metrics, traces, and even a service map. No external services or containers are needed for local development.

This is a game-changer for developer productivity. It strips away the friction from gaining runtime observability insights, allowing you to focus on your code rather than your debugging infrastructure. It is a highly practical solution for engineers working with distributed systems.
