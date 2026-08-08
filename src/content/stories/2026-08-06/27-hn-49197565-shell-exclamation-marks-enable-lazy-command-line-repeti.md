---
title: Shell exclamation marks enable lazy command-line repetition
source: hn
url: https://refp.se/articles/your-shell-and-the-lazy-exclamation-mark
date: '2026-08-06'
tags:
- bash
- catchup
- command-line-repetition
- event-designators
- hn
- posix
- shell
- unix
- zsh
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49197565'
comments: https://news.ycombinator.com/item?id=49197565
why_read: This article teaches how to use shell event designators, often signified
  by an exclamation mark, to efficiently repeat and manipulate previous commands.
  You will learn to save keystrokes and avoid tedious retyping by leveraging these
  powerful, often overlooked, shell features.
authors:
- "Filip Ros\xE9en"
---

Are you still mashing the up arrow to repeat shell commands or grab arguments from previous lines? There is a much lazier, and far more powerful, way: shell event designators. This forgotten power of '!' in Bash, Zsh, and Tcsh can transform your command-line workflow.

The '!' followed by certain characters lets you recall previous commands, specific arguments, or even parts of arguments with surgical precision. Imagine grabbing the last argument of your prior command with '!$' or executing a modified version of a past command effortlessly.

This article details the mechanics, from event designators to word designators and modifiers, and even touches upon the POSIX 'fc' command. Mastering these small shell tricks will significantly boost your productivity and make you wonder how you ever lived without them.
