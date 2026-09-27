---
title: File notification systems enable cross user side channel leakage
source: hn
url: https://inoti.fyi/
date: '2026-09-26'
tags:
- catchup
- file-notification
- fileobserver
- hn
- inotify
- readdirectorychangesw
- side-channel-leakage
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49860181'
comments: https://news.ycombinator.com/item?id=49860181
why_read: Learn how OS file-notification subsystems on Linux, Android, and Windows
  inadvertently expose private user activity across security boundaries.
authors:
- campuscodi
---

File notification subsystems across major operating systems leak sensitive cross-user state through unexpected side channels. Research accepted at ACM CCS reveals that standard APIs like inotify on Linux, FileObserver on Android, and ReadDirectoryChangesW on Windows expose granular activity beyond designated permission boundaries.

On Linux, mounting a watch on a readable parent directory reports every filesystem event on nested files, even if the user lacks permissions to inspect those files directly. When applied to /dev/input, this behavior leaks precise inter-keystroke timings. On Windows, querying the root drive can expose full filesystem paths touched by other users in real time.

Operating system abstractions often prioritize event notification efficiency over strict privilege isolation. When designing software that handles sensitive paths or multi-tenant workloads, engineers must account for metadata leakage originating directly from the kernel filesystem layer.

Relying on standard filesystem permissions alone is insufficient to protect sensitive event streams from local observers.
