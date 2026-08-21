---
title: Coding agents provide direct control over physical hardware firmware
source: github
url: https://github.com/GLechevalier/nff-core
date: '2026-08-19'
tags:
- catchup
- coding-agents
- esp32
- firmware-development
- github
- hardware-control
- nff
- remote-diagnosis
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49366373'
comments: https://news.ycombinator.com/item?id=49366373
why_read: This text introduces NFF, an open-source platform that enables coding agents
  to directly control physical hardware. Readers will learn how agents can develop,
  diagnose, and fix ESP32-class firmware remotely.
authors:
- GLechevalier
---

Imagine an AI agent not just writing code, but having direct control over physical hardware: compiling, flashing, and even diagnosing faults without human intervention.

This open-source project, 'nff-core', showcases exactly that. It provides an end-to-end platform for coding agents to manage the entire lifecycle of ESP32-class firmware, from initial development on the bench to remote maintenance and diagnosis in the field.

Connecting your board via USB allows the agent to autonomously write, compile, flash, and read serial output. Deploying devices with the 'nff-sdk-c' library extends this control remotely, enabling crash state capture, failure diagnosis, and fix deployment.

This is a significant step forward for applied AI, demonstrating how intelligent agents can move beyond theoretical tasks to direct, low-level hardware interaction, potentially revolutionizing embedded systems development and operations.
