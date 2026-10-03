---
title: Understanding the hidden design compromises of Docker layers
source: hn
url: https://loige.co/hidden-design-compromises-of-docker-layers/
date: '2026-10-02'
tags:
- catchup
- container-images
- docker-layers
- hn
- seekable-oci
- tar-archives
- whiteout-files
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49931443'
comments: https://news.ycombinator.com/item?id=49931443
why_read: Read this to uncover the low-level mechanics of Docker container layers
  and learn how tar archives handle file deletions and layer stacking.
authors:
- thatslast
---

We often describe container images as stacks of immutable filesystem layers, but the underlying mechanics are much messier. Because OCI layers are serialized as standard tar archives, deleting a file created in an earlier layer requires a mechanism that tar itself does not natively support.

To make deletions work across layer boundaries, container engines rely on whiteout files and opaque directory markers. When you remove a file inside a new layer, the engine writes an empty marker prefixed with `.wh.` into the archive. During union mounts, the presence of this marker instructs the storage driver to hide the corresponding inode from preceding layers.

This design introduces tricky edge cases. Valid Linux file names that begin with these internal whiteout prefixes cannot be reliably stored inside container images without triggering unexpected deletion semantics. Furthermore, exporting and re-importing images flattens these markers, altering how overlay drivers process identical directory structures.

Understanding these low-level tar compromises is essential when working with modern container optimizations like Seekable OCI (SOCI), lazy layer pulling, and custom image builders. Abstractions always leak at the storage boundary.
