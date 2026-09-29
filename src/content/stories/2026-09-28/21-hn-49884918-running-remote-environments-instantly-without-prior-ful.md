---
title: Running remote environments instantly without prior full downloads
source: hn
url: https://getrange.sh/
date: '2026-09-28'
tags:
- catchup
- container-images
- hn
- hugging-face
- lazy-loading
- remote-execution
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49884918'
comments: https://news.ycombinator.com/item?id=49884918
why_read: Learn how Range allows running containers and model repositories by streaming
  only accessed bytes instead of downloading complete files.
authors:
- andreygrehov
---

Downloading massive machine learning model weights or multi-gigabyte container images before running a single line of code is one of the most frustrating bottlenecks in modern development workflows. When inspecting a 1 TB model shard or running a quick smoke test, fetching gigabytes across the wire simply to read a small metadata header wastes immense amounts of time and bandwidth.

Range addresses this inefficiency by streaming remote environments on demand. Instead of pulling full container layers or repository weights upfront, it exposes remote artifacts from Hugging Face, S3, or container registries directly as a virtual mount point. Only the exact bytes your program touches actually traverse the network.

In practical testing with large multi-shard models, a script can mount a 1.03 TB model and parse its configuration and initial tensors in under 4 seconds while transferring less than 10 MB of total data. The remaining shards never leave remote storage.

Decoupling file execution from complete file downloads transforms how engineers explore, debug, and benchmark large distributed artifacts locally.
