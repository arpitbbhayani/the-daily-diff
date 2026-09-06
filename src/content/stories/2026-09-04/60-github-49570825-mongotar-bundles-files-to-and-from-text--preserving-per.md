---
title: Mongotar bundles files to and from text, preserving permissions for LLM prompts
source: github
url: https://github.com/sebastiancarlos/mongotar
date: '2026-09-04'
tags:
- catchup
- file-deserialization
- file-permissions
- file-serialization
- github
- large-language-models
- mongotar
- text-archive
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49570825'
comments: https://news.ycombinator.com/item?id=49570825
why_read: This text introduces Mongotar, a tool for reliably bundling files into a
  human-readable text format and back. It is particularly useful for LLM prompts as
  it preserves file permissions during serialization and deserialization, unlike many
  other tools.
authors:
- Sebastian Carlos
---

Getting a codebase into an LLM's context window is tricky. Many tools exist for 'files to prompt', but few handle the 'and back' part reliably, especially with file permissions. Mongotar aims to solve this critical problem for coding agents.

This tool serializes entire directories into a single, human-readable text file, respecting `.gitignore` rules and preserving basic file permissions. Crucially, it can then accurately deserialize that text file back into the original directory structure.

For anyone building sophisticated coding agents, the ability to round-trip code context with fidelity is a game-changer for task success and avoiding frustrating edge cases.
