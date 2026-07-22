---
title: I wrote an bash enumerator because I was sick of xargs
source: hn
url: https://numerlab.org/2025/07/20/bashumerate-enumerator/
date: '2026-07-20'
tags:
- catchup
- hn
section: engineering
interest_score: 7
hn_id: '48984270'
comments: https://news.ycombinator.com/item?id=48984270
why_read: You will learn about a new bash utility that aims to improve on `xargs`
  functionality, potentially offering a more intuitive way to handle iterative command
  execution and boost your shell scripting productivity.
authors:
- wallach-game
---

Bash's `xargs` is powerful, but let us be honest, it is not always the most intuitive tool. Many engineers find themselves fighting its quirks when piping complex data. One developer got so fed up that they built a custom bash enumerator.

This new utility aims to simplify common iteration patterns, potentially saving significant time for anyone who lives in the terminal. The author highlights specific pain points with `xargs` and shows how their alternative offers a cleaner, more predictable approach.

Consider if your own shell workflows could benefit from a more streamlined way to process inputs.
