---
title: 'Decimen: transfer files with screen, camera using QR codes'
source: github
url: https://github.com/bashalarmistalt/decimen-optical-transfer
date: '2026-08-03'
tags:
- catchup
- file-transfer
- fountain-codes
- github
- offline-capabilities
- optical-transfer
- qr-codes
- screen-to-camera
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49157792'
comments: https://news.ycombinator.com/item?id=49157792
why_read: This project demonstrates an innovative method for transferring files between
  devices without a network connection. Readers will learn how animated QR codes and
  optical communication can enable secure, offline data exchange using only a screen
  and a camera.
authors:
- ksec
---

Ever thought about transferring a file between two devices with absolutely no network connection, no cables, and no external app? Decimen Optical Transfer achieves precisely that, pushing the boundaries of data communication.

This project uses fountain-coded animated QR codes displayed on a screen, which are then captured by another device's camera. It effectively creates an air-gapped, robust file transfer channel, supporting files up to 64 MB and achieving speeds of 128 KB per second phone-to-phone. The inclusion of SHA-256 verification ensures data integrity.

This is not just a clever hack; it represents a deep dive into resilient data encoding, error correction, and system design for unconventional communication channels. Understanding how fountain codes enable robust transfer despite potential packet loss (or in this case, frame loss) is an invaluable lesson for any engineer dealing with unreliable data streams.
