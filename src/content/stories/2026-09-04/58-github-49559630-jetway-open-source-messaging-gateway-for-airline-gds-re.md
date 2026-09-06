---
title: Jetway open-source messaging gateway for airline GDS reservations
source: github
url: https://github.com/adamf/jetway
date: '2026-09-04'
tags:
- airline-reservations
- catchup
- gds
- github
- messaging-gateway
- ndc
- open-source
- pnr-store
- type-b
- un-edifact
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49559630'
comments: https://news.ycombinator.com/item?id=49559630
why_read: This text introduces Jetway, an open-source messaging gateway for airline
  and GDS reservation traffic. Readers will learn how it handles various industry-standard
  messaging formats like Type B, UN/EDIFACT, and NDC, and its role in managing passenger
  name records.
authors:
- adamf
---

Building robust, interoperable systems often means grappling with arcane protocols. Jetway, an open-source airline GDS and message router, offers a masterclass in this challenge.

It transparently handles Type B/AIRIMP, UN/EDIFACT PADIS, and NDC protocols, providing a blueprint for how to decode, apply, and reply to critical reservation traffic. The project features a resilient Passenger Name Record (PNR) store, demonstrating how to manage high-stakes, stateful data within a complex messaging pipeline.

This is not just aviation tech; it is a practical guide to architectural resilience and handling diverse data formats in any complex distributed system. Engineers looking to design systems that span old and new technologies will find immense value here.
