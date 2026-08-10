---
title: A Phone Becomes My Personal Server Infrastructure
source: hn
url: https://seg6.space/posts/phone-server/
date: '2026-08-08'
tags:
- android-phone
- arm-server
- catchup
- hn
- linux-server
- personal-infrastructure
- postmarketos
- vps-replacement
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49226636'
comments: https://news.ycombinator.com/item?id=49226636
why_read: This text details a compelling approach to replacing traditional VPS infrastructure
  with an Android phone, explaining the motivations and initial setup challenges.
  Readers will learn about the practicalities of using mobile hardware for personal
  server tasks.
authors:
- seg6
---

You can ditch that expensive VPS and run your personal server on a phone you already own.

The author migrated their entire personal stack 							– web apps, a remote browser, financial tracker 							– from a Hetzner VPS to a CMF Phone 1. This is not a toy setup; it handles deployments from Git and remains reachable across network changes thanks to smart engineering.

They navigated the challenges of running a proper Linux environment on mobile hardware without losing key functionality like Wi-Fi or 5G, opting for a managed Android environment rather than full OS replacement. Key to its reliability are tools like Tailscale for network routing and Caddy for service management.

This is a prime example of resourceful system design and leveraging existing hardware to solve real problems, optimizing for cost and energy efficiency without sacrificing functionality. It makes you reconsider what 							‘server hardware							’ truly means.

Ingenious, practical, and highly scalable for personal projects.
