---
title: How recurring network maintenance exposed six cascading bugs
source: hn
url: https://blog.janestreet.com/how-recurring-network-maintenance-exposed-6-bugs/
date: '2026-10-03'
tags:
- catchup
- dns-resolution
- glibc
- hn
- kafka
- ocaml-async
- socket-leaks
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49943918'
comments: https://news.ycombinator.com/item?id=49943918
why_read: Read this post to understand how routine network partitions triggered cascading
  failures across glibc, OCaml concurrency libraries, and Kafka clients. You will
  learn how layered system bugs can mask one another during failure recovery in distributed
  environments.
authors:
- Adam Yi
---

Network partitions during routine maintenance are supposed to test your system resilience. When Jane Street subjected their internal Kafka cluster to standard twenty-minute switch reboots, the client stack completely broke down, leaking hundreds of thousands of sockets and triggering half a million reconnect requests.

The resulting root cause investigation uncovered six interconnected bugs spanning five distinct layers of the software stack. Two of these defects had remained hidden for over a decade. The chain began with an eleven-year-old glibc bug where a failed resolver re-initialization caused subsequent DNS lookups to segfault. That issue masked an OCaml socket leak under ephemeral port exhaustion, which in turn hid a fourteen-year-old timeout bug in their Async concurrency library that caused connection attempts stuck in name resolution to hang indefinitely.

The compounding failures show that distributed systems rarely fail in isolation. Each localized bug concealed the next layer of defects until extreme network pressure forced them all into the open at once.

Debugging distributed systems requires peeling every layer of the onion until the whole stack is verified.
