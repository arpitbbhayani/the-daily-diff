---
title: SonicChat enables offline text chat via audible sound
source: github
url: https://github.com/Nellix/sonic-chat
date: '2026-08-18'
tags:
- acoustic-communication
- catchup
- github
- offline-messaging
- peer-to-peer
- sound-modem
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49349704'
comments: https://news.ycombinator.com/item?id=49349704
why_read: Read this to learn about an experimental system that allows authenticated
  text chat between nearby devices using only audible sound, eliminating the need
  for Wi-Fi, Bluetooth, or cellular networks. It showcases a unique approach to fully
  offline communication.
authors:
- n3ll1x93
---

Imagine a text chat system that requires no Wi-Fi, no Bluetooth, no cellular, and no internet — just the speakers and microphones already on your devices. SonicChat is an experimental project pushing the boundaries of device-to-device communication by carrying authenticated text entirely through audible sound.

This project demonstrates deep systems engineering, from custom Rust modem code to acoustic signal processing and robust encoding, all designed to operate over the highly 'unreliable' medium of sound waves. It tackles challenges like half-duplex communication, environmental interference, and ensuring security without traditional network infrastructure.

While an alpha, it is a fascinating exploration into alternative communication protocols and robust data transmission under extreme constraints. It provides a fresh perspective on what is possible with everyday hardware and clever low-level engineering, challenging our assumptions about 'connectivity.'

Building resilient systems means mastering unconventional channels.
