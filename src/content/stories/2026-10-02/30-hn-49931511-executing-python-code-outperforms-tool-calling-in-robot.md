---
title: Executing Python code outperforms tool calling in robot manipulation
source: hn
url: https://dagroup-pku.github.io/PyRUA-Lean/
date: '2026-10-02'
tags:
- catchup
- code-generation
- hn
- pyrua-lean
- robot-agents
- token-efficiency
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49931511'
comments: https://news.ycombinator.com/item?id=49931511
why_read: Learn how replacing iterative tool calling with Python code generation cuts
  token overhead and improves task success rates in robot manipulation agents. It
  presents a mechanistic fix for the high cost and latency of vision-language robot
  planning.
authors:
- Ruiyang Si
- Jianxin Bi
- Shunyu Yang
- Rui Ni
- Wenbo Huang
- Qiang Wang
- Shulong Jiang
- Duomin Wang
- Xiuyu Li
- Haiwen Feng
- Zhen Dong
- Daquan Zhou
---

Standard agent frameworks execute actions through iterative tool calling, forcing a complete model round trip and repeated context re-ingestion for every individual primitive step. In vision-language robotics, this pattern wastes tokens and introduces latency because every single movement requires passing back updated multi-camera sensor feeds into an ever-expanding prompt history.

PyRUA-Lean demonstrates a cleaner alternative by replacing single-step tool calls with synthesized Python scripts. Instead of invoking a primitive like move_to and awaiting another model response, the agent outputs executable control code that runs locally against robot primitives and vision-language policies.

Across 700 benchmark instances in environments like RoboCasa365 and LIBERO-PRO, this program-synthesis approach reduced input tokens by 65 percent and cut model calls by 49 percent. Success rates increased from 63.1 percent to 71.7 percent while total execution cost dropped from 1.63 dollars to 0.74 dollars per episode.

Treating code generation as the primary agent action surface rather than atomic API calls eliminates context bloat and yields higher planning reliability.
