---
title: A New Tool Halves Chrome Zucchini Patch Sizes
source: hn
url: https://willjordan.us/writing/slicing-zucchini-patches/
date: '2026-09-02'
tags:
- binary-diffing
- binary-patching
- catchup
- chrome
- displacement-fields
- hn
- presage
- zucchini-differ
section: systems
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49543665'
comments: https://news.ycombinator.com/item?id=49543665
why_read: This post introduces 'presage', a tool that halves the size of Chrome's
  binary patches by effectively managing diffuse changes like displacement fields.
  Readers will gain insight into advanced binary diffing techniques and how they optimize
  software updates.
authors:
- Will Jordan
---

Think binary diffing is a solved problem? Chrome's Zucchini updater reduces 291MB executables to 5.9MB patches. But what if you could slice that in half? A new tool, "presage," does exactly that, achieving 2.3MB patches for the same update.

This is not a trivial improvement. The article dives deep into the "twenty-five-year-old problem" of how small source code changes lead to large, diffuse binary diffs due to things like function sliding, re-encoded displacements, and profile-guided optimizations. Traditional diff tools like xdelta3 and bsdiff struggle with this structural awareness.

Presage's innovation lies in generating a "structural plan" that guides the decoder, predicting the new binary rather than just comparing bytes. This approach offers profound lessons for anyone optimizing software distribution, understanding compiler effects, or designing highly efficient update mechanisms in distributed systems.
