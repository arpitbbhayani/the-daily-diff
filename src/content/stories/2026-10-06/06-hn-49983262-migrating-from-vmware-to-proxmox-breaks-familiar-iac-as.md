---
title: Migrating from VMware to Proxmox breaks familiar IaC assumptions
source: hn
url: https://www.goncharov.xyz/it/tf4proxmox-en.html
date: '2026-10-06'
tags:
- catchup
- hn
- hypervisors
- infrastructure-as-code
- packer
- proxmox
- terraform
- vmware
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49983262'
comments: https://news.ycombinator.com/item?id=49983262
why_read: Understand why switching hypervisors from VMware to Proxmox disrupts existing
  Infrastructure-as-Code pipelines instead of acting as a drop-in replacement. You
  will learn key differences in VM templating, storage selection, and provisioning
  failure modes.
authors:
- ultral
image: /infographics/06-hn-49983262.jpg
---

Migrating hypervisors from VMware to Proxmox looks like a simple drop-in replacement underneath your existing Infrastructure as Code pipelines, but it is not. A team managing hundreds of virtual machines shared their concrete engineering pitfalls when transitioning their Terraform, Packer, and Ansible workflows.

The core challenge lies in platform behavioral differences. Template building, disk initialization, storage backend selection, and failure handling during partial Terraform applies work completely differently in Proxmox compared to vSphere.

Reusing existing hypervisor hardware requires deep consideration of Fibre Channel SAN multipathing, virtio driver integration, and custom cloud-init provisioning strategies to avoid broken declarative states.

Treat hypervisor changes as complete infrastructure redesigns rather than simple virtualization swaps.
