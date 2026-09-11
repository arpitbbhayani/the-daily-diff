---
title: Real PHP runs directly on ESP32 microcontrollers with php-baremetal
source: hn
url: https://www.php-baremetal.com/blog/real-php-on-esp32
date: '2026-09-09'
tags:
- catchup
- cross-compilation
- esp32
- hn
- microcontrollers
- php
- php-baremetal
- zend-engine
section: engineering
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49624719'
comments: https://news.ycombinator.com/item?id=49624719
why_read: This post introduces php-baremetal, demonstrating how the full PHP Zend
  engine can run directly on ESP32 microcontrollers. Readers will learn about its
  capabilities, internal workings, and potential applications for embedded PHP development.
authors:
- gianfriaur
---

Running real PHP, with its unmodified Zend engine, directly on an ESP32 microcontroller is an astonishing engineering feat that bridges the gap between web development and embedded systems. This is not just a demo; it includes OPcache, OpenSSL, and SQLite. 

The project demonstrates serious low-level systems work, pushing a full scripting language runtime onto bare metal. It highlights how deep understanding of compilation, memory management, and runtime environments can shatter preconceived notions of what a small, affordable chip can achieve. 

Engineers who appreciate pushing system boundaries and optimizing for extreme constraints will find this a fascinating case study in bridging high-level programming with deeply embedded hardware. It is a testament to clever engineering.
