---
title: Remediating residual disk block exposure across multi-tenant containers
source: hn
url: https://blog.cloudflare.com/containers-cross-tenant-vulnerability/
date: '2026-09-24'
tags:
- catchup
- container-security
- dm-thin
- firecracker
- hn
- multi-tenancy
- thin-provisioning
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49831647'
comments: https://news.ycombinator.com/item?id=49831647
why_read: Learn how Linux device mapper thin provisioning can inadvertently expose
  residual disk blocks across virtual machines and how multi-tenant container platforms
  isolate storage.
authors:
- Oren Yomtov
---

Multi-tenant container isolation often assumes that virtual machine boundaries prevent cross-tenant data leaks. However, shared storage backends can silently expose unmapped disk blocks if discard operations are not handled rigorously.

Cloudflare recently analyzed a vulnerability in their Containers and Sandboxes infrastructure, which pairs Firecracker microVMs with Linux device mapper thin provisioning (dm-thin). Because thin provisioning allocates underlying physical blocks on demand, deleting or reallocating storage without explicit zeroing allowed subsequent container instances on the same host to inspect residual disk sectors.

Fixing this class of issue requires coordinated discard primitives between the guest virtual block driver, the VMM layer, and the underlying dm-thin pool. When designing multi-tenant infrastructure, never assume that releasing a virtual disk automatically sanitizes the physical blocks underneath.

Always ensure that your block allocation lifecycle enforces zero-on-free or secure block reclamation at the kernel level before recycling storage.
