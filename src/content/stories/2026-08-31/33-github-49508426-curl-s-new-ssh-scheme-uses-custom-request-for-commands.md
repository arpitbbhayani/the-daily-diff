---
title: Curl's new SSH scheme uses custom request for commands
source: github
url: https://github.com/curl/curl/pull/22661
date: '2026-08-31'
tags:
- catchup
- curl
- curlopt-customrequest
- github
- libssh
- libssh2
- remote-command-execution
- ssh
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49508426'
comments: https://news.ycombinator.com/item?id=49508426
why_read: This explains the new ssh:// scheme in curl for executing remote commands
  over SSH. It details how the command is passed via CURLOPT_CUSTOMREQUEST to avoid
  URL parsing issues.
authors:
- RekGRpth
---

A significant enhancement is coming to `curl`: a new `ssh://` scheme enabling remote command execution. This Pull Request for `curl` introduces a robust way to run commands over an existing SSH connection.

Crucially, the design uses `CURLOPT_CUSTOMREQUEST` for the command itself, not the URL path. This avoids the headaches of URL encoding, path-relative binaries, and ambiguous leading slashes that plagued earlier attempts, making the integration far more reliable and versatile.

This feature will be a game-changer for anyone doing automation or scripting with `curl` in distributed environments, providing a cleaner and more direct method for interacting with remote systems.
