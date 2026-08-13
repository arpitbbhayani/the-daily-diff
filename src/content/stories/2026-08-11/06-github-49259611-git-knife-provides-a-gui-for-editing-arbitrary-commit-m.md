---
title: Git-knife provides a GUI for editing arbitrary commit metadata
source: github
url: https://github.com/TheRealYT/git-knife
date: '2026-08-11'
tags:
- catchup
- commit-metadata
- git-history-editing
- git-knife
- github
- gui-tools
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49259611'
comments: https://news.ycombinator.com/item?id=49259611
why_read: Read this to learn about git-knife, a unique GUI tool that fills a gap in
  the git ecosystem by enabling direct editing of arbitrary commit metadata like author
  dates and committer identity.
authors:
- TheRealYT
---

Have you ever needed to deeply scrub your Git history, going beyond `rebase -i` to fix commit author dates or committer dates? Existing Git GUIs often fall short, treating these crucial metadata points as effectively immutable.

Enter `git-knife`. This new desktop GUI lets you edit every commit's message, author, and all dates (including committer date) directly within a spreadsheet-like interface. It fills a significant gap in developer tooling.

The project achieves this by intelligently shelling out to the system `git CLI` and rebuilding commits with `git commit-tree`, crucially reusing each commit's original tree to ensure file contents remain untouched. This is not just a UI wrapper; it is a thoughtful approach to powerful history rewriting.

This tool is a game-changer for maintaining pristine code history, correcting past errors, or preparing repositories for public release, directly enhancing engineering practices and developer productivity.
