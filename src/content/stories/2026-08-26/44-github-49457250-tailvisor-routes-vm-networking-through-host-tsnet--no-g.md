---
title: Tailvisor routes VM networking through host tsnet, no guest Tailscale
source: github
url: https://github.com/tailscale/tailvisor
date: '2026-08-26'
tags:
- catchup
- ethernet-frames
- github
- go-c-archive
- network-identity
- tailscale
- tailvisor
- tsnet
- unix-datagram-socket
- virtualization-framework
- vm-sandbox
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49457250'
comments: https://news.ycombinator.com/item?id=49457250
why_read: This text explains Tailvisor's architecture, enabling macOS and Linux VMs
  to join a Tailscale network without installing Tailscale inside the guest. Readers
  will understand how it leverages tsnet and Virtualization.framework to route all
  VM networking through the host.
authors:
- mfrw
---

Integrating virtual machines into your distributed network seamlessly and securely just got easier. Tailvisor, an open-source project from Tailscale, allows your macOS or Linux VMs to act as first-class citizens on your Tailscale network without needing to install Tailscale inside the guest OS.

This is achieved by routing all VM networking traffic through a `tsnet` node running on the host, leveraging Apple's Virtualization.framework. It is a brilliant piece of system design that simplifies network isolation and secure access for development, testing, or sandboxing.

Engineers building distributed systems or needing robust, isolated environments will find this particularly useful. It offers a fresh perspective on how to manage network identities for ephemeral or sensitive workloads.
