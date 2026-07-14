---
title: FSF Sysadmins Use 'Reaction' and Regex to Thwart Botnets
source: hn
url: https://www.fsf.org/blogs/community/blocking-botnets-with-reaction
date: '2026-07-11'
tags:
- botnet-blocking
- catchup
- ddos-attacks
- hn
- ip-address-blocking
- reaction
- regular-expressions
- web-scraping
score: 73
hn_id: '48876809'
comments: https://news.ycombinator.com/item?id=48876809
why_read: This post details how FSF sysadmins identify and block aggressive botnets
  and scrapers using specific tools and techniques. Readers will gain insight into
  practical methods like regex pattern matching and IP analysis to mitigate such threats.
authors:
- Michael McMahon
author: Michael McMahon
---

Defending infrastructure from botnets, especially those scraping data for LLMs, requires smart, reactive strategies. The FSF sysadmins have shared their playbook.

They noticed abnormal patterns in scraper behavior, allowing them to craft precise regular expressions for detection. This led to identifying large lists of residential IP addresses, often part of sophisticated botnets like "Vo1d" using compromised smart TVs.

Their approach emphasizes pattern recognition and rapid response, evolving defenses as attackers adapt. It is not just about generic firewalls, but targeted intelligence against specific threats.

Understanding these real-world defense tactics is crucial for anyone operating critical online services and protecting data integrity.

Stay ahead of the bots; learn from the trenches.
