---
title: Defeating browser fingerprinting by patching Chromium source code directly
source: github
url: https://github.com/heretic-tech/apostate
date: '2026-09-27'
tags:
- anti-detect-browser
- browser-fingerprinting
- catchup
- chromium
- fingerprint-spoofing
- github
- playwright
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49864709'
comments: https://news.ycombinator.com/item?id=49864709
why_read: Understand how Apostate bypasses commercial fingerprint detectors by modifying
  parameters directly within Chromium C++ source code. You will learn how native-level
  spoofing eliminates detection vectors common in JavaScript-based browser automation.
authors:
- heretic-tech
---

Most browser automation tools get detected instantly because JavaScript injection and DevTools overrides leave unmistakable fingerprint traces. When a headless session alters navigator properties or WebGL renderer strings via script execution, modern fingerprinting engines spot the prototype pollution and mismatch between workers, iframes, and network headers.

Apostate takes a fundamentally different engineering approach by applying 153 custom patches directly into Chromium C++ source code. By modifying GPU strings, screen dimensions, fonts, and locale at the exact point of production in the engine, workers and iframes naturally report identical hardware states without running any detectable JavaScript hooks.

The repository includes an MCP server specifically for AI agents, alongside Python and Node bindings compatible with Playwright and Puppeteer. It passes modern bot verification suites such as FingerprintJS Pro and BrowserScan with human authenticity scores.

Fixing fingerprinting at the engine level permanently eliminates the runtime detection cat-and-mouse game.
