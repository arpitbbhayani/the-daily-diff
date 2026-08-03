---
authors:
- Paul Herrmann
comments: https://news.ycombinator.com/item?id=49136233
date: '2026-08-01'
depth_score: 8
hn_id: '49136233'
image: /infographics/19-hn-49136233.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- channel-state-information
- hn
- machine-learning
- motion-sensing
- radio-signals
- wi-fi
title: Wi-Fi senses movement through walls using Channel State Information
url: https://freipaul.com/posts/how-can-wifi-see-you-move-through-a-wall
utility_score: 7
why_read: This text explains the seemingly magical ability of Wi-Fi to detect motion
  through walls by leveraging Channel State Information (CSI). Readers will gain a
  clear understanding of how radio signals work and how CSI can be used for advanced
  sensing applications.
---

Did you know your standard Wi-Fi router can see through walls? This incredible post details how off-the-shelf Wi-Fi hardware, combined with a bit of machine learning, can detect movement using Channel State Information (CSI).

It is not magic. Every Wi-Fi device already computes CSI to decode packets, estimating how signals bounce off everything in the room. This estimate, usually discarded, is a surprisingly detailed map of its environment.

By simply capturing and analyzing this CSI with a machine learning classifier, you can tell if a room is empty, or if someone is walking in a specific corner. This showcases a deep technical dive into radio physics and a truly practical application of AI, turning discarded network data into powerful environmental sensing.

This insight is a game changer for low-cost, privacy-preserving monitoring and beyond.