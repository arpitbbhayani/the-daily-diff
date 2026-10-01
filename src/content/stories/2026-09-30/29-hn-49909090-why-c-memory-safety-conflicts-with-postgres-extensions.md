---
title: Why C++ memory safety conflicts with Postgres extensions
source: hn
url: https://clickhouse.com/blog/memory-safety-postgres-extensions-c-cpp
date: '2026-09-30'
tags:
- catchup
- cpp-interop
- exception-handling
- hn
- memorycontext
- postgres-extensions
- raii
- setjmp-longjmp
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49909090'
comments: https://news.ycombinator.com/item?id=49909090
why_read: Learn why Postgres error handling and memory contexts clash with C++ destructors
  and exceptions, and understand the mechanics required to safely bridge both runtimes.
authors:
- "Philip Dub\xE9"
---

Writing Postgres extensions in C++ involves navigating a dangerous mismatch between two distinct error-handling models. Postgres manages memory via MemoryContext arenas and raises errors using setjmp and longjmp macros. C++ relies on RAII and stack unwinding.

When a Postgres allocation fails, its longjmp skips non-trivial C++ destructors entirely. This bypasses stack unwinding and causes immediate undefined behavior rather than a simple memory leak. Conversely, if an uncaught C++ exception escapes an extension boundary, it aborts the process and forces the Postgres postmaster to crash every attached backend.

To build stable native extensions, you must wrap C++ execution boundaries with strict exception barriers and translate Postgres PG_TRY/PG_CATCH frames into exception-safe RAII wrappers. Relying on PG_FINALLY or MemoryContext callbacks alone is not sufficient to guarantee destructors run.

Bridging low-level database runtimes with modern languages requires understanding how setjmp and stack unwinding interact at the assembly level.
