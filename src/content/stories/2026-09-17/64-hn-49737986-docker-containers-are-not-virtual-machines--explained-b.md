---
authors:
- Paul Herrmann
comments: https://news.ycombinator.com/item?id=49737986
date: '2026-09-17'
depth_score: 8
hn_id: '49737986'
image: /infographics/64-hn-49737986.jpg
interest_score: 8
novelty_score: 6
section: systems
source: hn
tags:
- catchup
- docker-container
- hn
- kernel
- linux-container
- process-isolation
- system-call
- virtual-machine
title: Docker Containers Are Not Virtual Machines, Explained by Rebuilding Them
url: https://freipaul.com/posts/what-actually-is-a-docker-container
utility_score: 8
why_read: Read this to understand the fundamental nature of Docker and Linux containers.
  You will learn how containers are built from isolation mechanisms and why they are
  distinct from virtual machines.
---

Most engineers use Docker, but few truly grasp what happens beneath the surface. This article meticulously breaks down containers by building one from scratch, revealing the Linux kernel's role in isolation. You are going to learn about cgroups, namespaces, and syscalls not as abstract concepts, but as fundamental building blocks. It is not just about Docker; it is about core operating system principles that power modern software. This deep dive is incredibly useful for troubleshooting, optimizing, and designing more robust distributed systems. Understanding these mechanics provides a solid foundation for any senior engineer working with containerized environments. Elevate your systems understanding beyond `docker run`.