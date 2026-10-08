---
title: Scaling network probing for HTTP/3 readiness with Prometheus
source: hn
url: https://slack.engineering/from-custom-to-open-scalable-network-probing-and-http-3-readiness-with-prometheus/
date: '2026-10-07'
tags:
- catchup
- client-side-observability
- hn
- http3
- network-probing
- prometheus-blackbox-exporter
- quic
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49995291'
comments: https://news.ycombinator.com/item?id=49995291
why_read: Learn how Slack tackled the lack of tooling for UDP-based QUIC monitoring
  by extending the Prometheus Blackbox Exporter. It provides practical insights into
  maintaining client-side observability during a major protocol migration.
authors:
- Rafael Elvira
- Sebastian Feliciano
- Carlo Preciado
---

Rolling out HTTP/3 at edge scale introduces a blind spot in network telemetry: traditional synthetic probing breaks because HTTP/3 runs over UDP via QUIC instead of TCP.

When Slack transitioned edge traffic to HTTP/3, commercial SaaS observability tools and the standard Prometheus Blackbox Exporter lacked native QUIC probe capabilities. This left their infrastructure team without visibility into client-side latency or silent regressions back to HTTP/2 across hundreds of thousands of endpoints.

Rather than maintaining fragile proprietary tooling, their infrastructure team extended the open-source Prometheus Blackbox Exporter to natively probe QUIC endpoints. This design provides accurate round-trip time measurements while integrating directly into existing Prometheus and Alertmanager setups.

Protocol transitions at the edge demand proactive updates to your observability pipeline before you flip the switch on production traffic.
