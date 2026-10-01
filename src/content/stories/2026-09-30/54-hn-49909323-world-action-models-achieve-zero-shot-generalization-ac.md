---
title: World action models achieve zero-shot generalization across robotic tasks
source: hn
url: https://dreamzero0.github.io/
date: '2026-09-30'
tags:
- catchup
- closed-loop-control
- cross-embodiment-transfer
- hn
- video-diffusion
- world-action-models
- zero-shot-generalization
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49909323'
comments: https://news.ycombinator.com/item?id=49909323
why_read: Read this to understand how joint modeling of video diffusion and action
  predictions enables zero-shot generalization and real-time robotic control across
  diverse embodiments.
authors:
- Seonghyeon Ye
- Yunhao Ge
- Kaiyuan Zheng
- Shenyuan Gao
- Sihyun Yu
- George Kurian
- Suneel Indupuru
- You Liang Tan
- Chuning Zhu
- Jiannan Xiang
- Ayaan Malik
- Kyungmin Lee
- William Liang
- Nadun Ranawaka
- Jiasheng Gu
- Yinzhen Xu
- Guanzhi Wang
- Fengyuan Hu
- Avnish Narayan
- Johan Bjorck
- Jing Wang
- Gwanghyun Kim
- Dantong Niu
- Ruijie Zheng
- Yuqi Xie
- Jimmy Wu
- Qi Wang
- Ryan Julian
- Danfei Xu
- Yilun Du
- Yevgen Chebotar
- Scott Reed
- Jan Kautz
- Yuke Zhu
- Linxi "Jim" Fan
- Joel Jang
---

Vision-Language-Action (VLA) models often fail when encountering unfamiliar physical motions because semantic understanding does not capture physical dynamics. DreamZero addresses this gap by training a World Action Model (WAM) directly on top of a pretrained video diffusion architecture.

Rather than treating actions as isolated downstream tokens, the framework jointly predicts upcoming world states and motor actions. Using video as a dense representation of environmental evolution yields more than double the task generalization compared to standard VLAs across novel robotics tasks.

System optimizations allow a 14B autoregressive model to execute closed-loop control at 7Hz in real time. Video demonstrations from humans enable cross-embodiment skill transfer with only 10 to 20 minutes of reference footage.

Jointly modeling environmental dynamics alongside actions points to a promising path forward for robust robotic policies.
