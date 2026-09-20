---
title: ZCode AI Programming App Silently Uploads Full Git History
source: hn
url: https://blog.ferstar.org/posts/zcode-silent-workspace-snapshot-upload/
date: '2026-09-18'
tags:
- catchup
- cloud-security
- data-privacy
- data-upload
- git-history
- hn
- reverse-engineering
- zcode
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49751042'
comments: https://news.ycombinator.com/item?id=49751042
why_read: This article exposes how the ZCode AI programming app silently uploaded
  users' entire Git repositories to cloud storage. Readers will learn about a real-world
  data privacy breach, the technical investigation process, and the discrepancies
  between observed behavior and official explanations.
authors:
- xiebaiyuan
---

You trust your AI programming client with your code, but what if it is quietly uploading your *entire* Git history, including LFS files and reflogs, to the cloud? A detailed reverse engineering effort uncovered exactly this behavior in the ZCode client.

The research reveals that ZCode silently packages and encrypts your complete workspace, sending it to阿里云 OSS. The critical detail: the encryption key is server-side. Your local client cannot decrypt what it sent, meaning only the provider holds the key to your codebase.

This is a major privacy and security alert for anyone using AI developer tools. It is a stark reminder to audit tools closely and understand their background operations, offering crucial lessons in safeguarding intellectual property and privacy in the age of AI-powered development.
