---
title: Why Blameless Postmortems Still Produce Repeat Incidents
source: hackernews
url: https://example.com/blog/blameless-postmortems-repeat-incidents
date: '2026-07-09'
tags:
- incident-review
- reliability
- engineering-culture
- catchup
categories: sre
why_read: A pointed critique of postmortem culture, arguing that blamelessness
  solved the wrong problem and that most orgs still lack a mechanism to verify
  remediation items actually landed.
authors:
- Marcus Webb
---

Blameless postmortems fixed the psychological safety problem but left a
tracking problem in their place: action items get filed, prioritized below
feature work, and quietly expire.

The author proposes treating remediation items as SLA-bound follow-up
incidents rather than backlog tickets, with an automatic escalation path if
they go stale. Anecdotal data from three orgs suggests repeat-incident rate
dropped noticeably after adopting this.

A useful nudge if your team's postmortem doc has ever had an action item
that never shipped.
