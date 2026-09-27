---
authors:
- dimonomid
comments: https://news.ycombinator.com/item?id=49842866
date: '2026-09-25'
depth_score: 9
hn_id: '49842866'
image: /infographics/53-hn-49842866.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- full-disk-encryption
- hn
- nv-pcrs
- pcr-measurements
- pcr-scarcity
- remote-attestation
- systemd
- tpm
- trusted-computing
title: Systemd NvPCR design ensures security despite TPM scarcity
url: https://katexochen.aro.bz/posts/systemd-v262-nvpcrs/
utility_score: 7
why_read: This deep dive explains how systemd NvPCRs overcome TPM PCR scarcity and
  details their secure design. Readers will learn the underlying TPM concepts and
  the security implications.
---

Systemd v262 introduces NvPCRs to tackle a critical limitation: the scarcity of TPM Platform Configuration Registers. This deep dive unpacks how systemd leverages the TPM's non-volatile memory to extend PCR capabilities.

The traditional 24 PCRs are quickly exhausted by modern systems, leaving little room for OS-level measurements crucial for passwordless full disk encryption, service credential protection, and remote attestation. Systemd's solution is an anchored NvPCR design that creates additional, software-defined PCR-like registers.

This article provides principal-level depth, dissecting the design, security implications, and even demonstrating how to rebuild an NvPCR from scratch against a software TPM. It is essential reading for anyone serious about low-level system security and robust boot integrity.