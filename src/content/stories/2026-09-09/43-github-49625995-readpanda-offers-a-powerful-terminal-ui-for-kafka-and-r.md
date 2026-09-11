---
authors:
- sonirico
comments: https://news.ycombinator.com/item?id=49625995
date: '2026-09-09'
depth_score: 7
hn_id: '49625995'
image: /infographics/43-github-49625995.jpg
interest_score: 8
novelty_score: 7
section: databases
source: github
tags:
- avro
- catchup
- consumer-groups
- github
- json-sr
- kafka
- lag-monitoring
- live-tailing
- protobuf
- redpanda
- schema-registry
- terminal-ui
title: readpanda offers a powerful terminal UI for Kafka and Redpanda
url: https://github.com/sonirico/readpanda
utility_score: 9
why_read: This tool is for engineers managing Kafka or Redpanda clusters who need
  a performant terminal-based UI. Readers will learn how readpanda provides efficient
  topic browsing, consumer group monitoring, lag analysis, and live message tailing
  with advanced decoding capabilities.
---

Debugging Kafka and Redpanda clusters often means battling web UIs that hog resources or provide limited detail. `readpanda` changes this entirely by offering a robust terminal UI for deep cluster inspection.

This tool provides immediate visibility into topics, consumer groups, and critical lag metrics, all from the command line. What makes it truly stand out is its advanced message tailing with inline decoding for Avro, JSON-SR, and Protobuf, including runtime .proto compilation.

This capability is not merely a convenience; it is a significant productivity booster when you are troubleshooting data consistency or schema evolution issues in real-time. Engineers will appreciate the ability to understand message payloads without external tools or complex deserialization scripts.

It is an indispensable utility for anyone working with these distributed streaming platforms.