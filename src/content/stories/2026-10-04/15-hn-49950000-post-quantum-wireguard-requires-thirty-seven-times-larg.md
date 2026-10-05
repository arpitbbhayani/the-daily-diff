---
title: Post-quantum WireGuard requires thirty-seven times larger cryptographic keys
source: hn
url: https://shattered.io/post-quantum-wireguard-vs-classical-wireguard-2026/
date: '2026-10-04'
tags:
- catchup
- curve25519
- hn
- key-exchange
- post-quantum-cryptography
- rosenpass
- shors-algorithm
- wireguard
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49950000'
comments: https://news.ycombinator.com/item?id=49950000
why_read: Read this to understand the cryptographic and performance trade-offs of
  upgrading WireGuard tunnels to withstand quantum attacks. You will learn how post-quantum
  key exchange implementations compare to classical setups in key sizes and overhead.
authors:
- Dr. Heinrich Vogel
---

WireGuard built its reputation on minimal cryptography, relying on fixed primitives like Curve25519 for key exchange. However, static elliptic-curve exchanges are vulnerable to harvest-now-decrypt-later attacks once quantum hardware matures.

Migrating to NIST post-quantum standards such as ML-KEM requires managing substantial payload expansion. Post-quantum public keys and ciphertexts are roughly 37 times larger than Curve25519 parameters, which introduces packet fragmentation risks across standard network MTU boundaries.

Implementations like Rosenpass resolve this by executing post-quantum key agreement out of band across UDP, feeding shared symmetric secrets back into the classical WireGuard kernel module. This maintains full protocol speed and backward compatibility while eliminating quantum exposure.

Engineering quantum-resistant network tunnels requires balancing larger cryptographic payload sizes against low-latency packet processing requirements.
