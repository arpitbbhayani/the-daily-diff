---
authors:
- bschaatsbergen
comments: https://news.ycombinator.com/item?id=49062316
date: '2026-07-26'
depth_score: 8
hn_id: '49062316'
image: /infographics/32-github-49062316.jpg
interest_score: 8
novelty_score: 7
section: systems
source: github
tags:
- catchup
- cryptographic-signer
- github
- go
- hardware-security
- key-attestation
- tls
- tpm
title: Go TLS Authenticates with TPM Key That Never Leaves Hardware
url: https://github.com/bschaatsbergen/go-tpm-tls
utility_score: 8
why_read: This describes a Go library for `crypto/tls` to use keys backed by a Trusted
  Platform Module (TPM), ensuring private keys never leave the hardware. You will
  learn how this approach enhances security by preventing key leakage from process
  memory.
---

Securing your Go applications with mTLS just got a significant upgrade, especially for those worried about key exfiltration. This Go library integrates Trusted Platform Modules (TPMs) directly into `crypto/tls` for authentication.

Imagine: your TLS private keys never leave the hardware. When Go's `crypto/tls` needs a signature for a handshake, the TPM handles it internally. This design eliminates the most common vector for key compromise – process memory leaks.

The project provides a `crypto.Signer` implementation that leverages existing TPM keys, making it highly practical for hardening infrastructure without needing to redesign core cryptographic primitives. This is a game-changer for high-assurance environments.

It is about building trust from the silicon up.